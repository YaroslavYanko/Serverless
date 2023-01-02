import { config } from "./../core/config";
import * as jwt from "jsonwebtoken";

export const HASURA_CLAIMS = "https://hasura.io/jwt/claims";
export const HASURA_USER_ID = "x-hasura-user-id";

export const signToken = (id: string) => {
  return jwt.sign(
    {
      [HASURA_CLAIMS]: {
        "x-hasura-allowed-roles": ["admin"],
        "x-hasura-default-role": "admin",
        [HASURA_USER_ID]: id,
      },
    },
    config.jwtSecret
  );
};

export const getTokenData = (token: string) => {
  return jwt.verify(token, config.jwtSecret);
};
