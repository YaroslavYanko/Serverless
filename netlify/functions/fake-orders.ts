import { CreateFakeOrderMutationVariables } from "./../common/sdk";
import { verifyHasura } from "./../common/verifyHasura";
import { faker } from "@faker-js/faker";
import { Handler } from "@netlify/functions";
import { api } from "../common/api";
import { config } from "../core/config";
import { DateTime } from "luxon";

const handler: Handler = async (event, context) => {
  const { headers, queryStringParameters } = event;

  const { amount: amountRaw = "1", recent: recentRow = "0", forceCreate:forceCreateRaw = 'false' } =
    queryStringParameters;

  const amount = Number(amountRaw);
  const recent = Number(recentRow);
  const forceCreate = forceCreateRaw === 'true'

  try {
    verifyHasura(headers);
  } catch (error) {
    return JSON.parse(error.message);
  }
   
  const currentHour = DateTime.now().setZone('Europe/Kiev').hour
  const isWorkingHours = currentHour>=10 && currentHour <=22

  // if(!isWorkingHours){
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({ status: "not working hours" }),
  //   };
  // }

  const categories = await api.GetCategories();

  const productsItems = await api.GetGoodsItemsGroupByCategoryId({
    firstCategory: categories.categories[0].id,
    secondsCategory: categories.categories[1].id,
  });

  const firstGroupLength = productsItems.firstGroup.length;
  const secondGroupLength = productsItems.secondGroup.length;

  for (let i = 0; i < amount; i++) {
    const fakeData: CreateFakeOrderMutationVariables = {
      client_name: faker.name.firstName(),
      client_surname: faker.name.lastName(),
      client_adress: faker.address.streetAddress(true),
      client_phone: faker.phone.number("+380#########"),
      created_at: new Date(),
    };
    if (recent !== 0) {
      fakeData.created_at = faker.date.recent(recent);
    }
    const nrwOrder = await api.CreateFakeOrder(fakeData, {
      "x-hasura-admin-secret": config.hasuraAdminSecret,
    });

    const firstGroupItem =
      productsItems.firstGroup[
        faker.datatype.number({ max: firstGroupLength - 1 })
      ].id;
    const secondGroupItem =
      productsItems.secondGroup[
        faker.datatype.number({ max: secondGroupLength - 1 })
      ].id;

    await api.AddItemsToFakeOrder(
      {
        objects: [
          {
            order_id: nrwOrder.insert_orders_one.id,
            products_id: firstGroupItem,
          },
          {
            order_id: nrwOrder.insert_orders_one.id,
            products_id: secondGroupItem,
          },
        ],
      },
      {
        "x-hasura-admin-secret": config.hasuraAdminSecret,
      }
    );
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ status: "OK" }),
  };
};

export { handler };
