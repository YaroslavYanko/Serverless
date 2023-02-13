import { api } from "../common/api";
import { HasuraEventBody } from "../dto/hasura-event-body.dto";

export const createNewCostomer = async (body: HasuraEventBody) => {
  const {
    event: {
      data: { new: order },
    },
  } = body;
  try {
    await api.CreateNewCustomer({
      phone: order.client_phone,
      name: order.client_name,
      surname: order.client_surname,
      address: order.client_adress,
    });
  } catch (error) {
    console.log("Error on creating new customer", {
      phone: order.client_phone,
      name: order.client_name,
      surname: order.client_surname,
      address: order.client_adress,
    });
  }
};
