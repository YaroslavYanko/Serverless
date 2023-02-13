import { Handler } from "@netlify/functions";
import crypto from "crypto";
import axios from "axios";

const handler: Handler = async (event, context) => {
  const { headers } = event;

  const fondyPassword = "test";

  const orderBody = {
    order_id: "ID5589",
    merchant_id: "1397120",
    order_desc: "Шампунь з Франції 1 шт",
    amount: 52500,
    currency: "UAH",
  };

  const orderedKeys = Object.keys(orderBody).sort((a, b) => {
    if (a < b) return -1;

    if (a > b) return 1;

    return 0;
  });

  const signatureRaw = orderedKeys.map((v) => orderBody[v]).join("|");
  const signature = crypto.createHash("sha1");
  signature.update(`${fondyPassword}|${signatureRaw}`);

  const { data } = await axios.post("https://pay.fondy.eu/api/checkout/url/", {
    request: { ...orderBody, signature: signature.digest("hex") },
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      data,
    }),
  };
};

export { handler };
