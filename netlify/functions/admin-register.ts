import { api } from "./../common/api";
import { signToken } from "./../common/jwt";
import { hashPassword } from "./../common/password";
import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { AdminRegisterInput } from "../common/sdk";
import { config } from "../core/config";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const { body, headers } = event;

  if (
    !headers["x-tvoyapolychka-secret-key"] ||
    headers["x-tvoyapolychka-secret-key"] !== config.hasuraTvoyapolychkaSecret
  ) {
    return {
      statusCode: 403,
      body: JSON.stringify({
        message: "'x-tvoyapolychka-secret-key' is missing or value is invalid",
      }),
    };
  }
  const input: AdminRegisterInput = JSON.parse(body!).input.admin;

  const password = hashPassword(input.password);

  const data = await api.InsertAdmin(
    {
      username: input.username,
      password,
    },
    {
      "x-hasura-admin-secret": config.hasuraAdminSecret,
    }
  );

  const accessToken = signToken(data.insert_admin_one?.id);
  return {
    statusCode: 200,
    body: JSON.stringify({ accessToken: accessToken }),
  };
};

export { handler };
