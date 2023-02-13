import { CreateOrderInput } from "./../common/sdk";
import { api } from "./../common/api";
import { Handler } from "@netlify/functions";
import { verifyHasura } from "../common/verifyHasura";
import { Payment_Types_Enum } from "../common/sdk";

const handler: Handler = async (event, context) => {
  const { headers, body } = event;

  try {
    verifyHasura(headers);
  } catch (error) {
    return JSON.parse(error.message);
  }

  const input: CreateOrderInput = JSON.parse(body!).input.order;


  const order = await api.CreateOrder({
    client_adress: input.client_adress,
    client_name: input.client_name,
    client_phone: input.client_phone,
    client_surname: input.client_surname,
    comment: input.comment,
    payment_type: input.payment_type as Payment_Types_Enum,
  });


  //Розбиваєм id товару і кількість id_3 
 const productsItems = input.items.split(',').map(orderItem=>{
  const [products_id,amount] = orderItem.split('_')
   
  return {
    order_id: order.insert_orders_one.id,
    products_id,
    amount
  }
 })

  await api.AddItemsToOrder({
    objects:productsItems
  })

  return {
    statusCode: 200,
    body: JSON.stringify({
      id: order.insert_orders_one.id

    }),
  };
};

export { handler }; 
