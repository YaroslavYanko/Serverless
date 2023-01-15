import { config } from "../core/config";

export const verifyHasura =(headers)=>{
    if (
        !headers["x-tvoyapolychka-secret-key"] ||
        headers["x-tvoyapolychka-secret-key"] !== config.hasuraTvoyapolychkaSecret
      ) {
        throw new Error(
            JSON.stringify( {
                statusCode: 403,
                body: JSON.stringify({
                  message: "'x-tvoyapolychka-secret-key' is missing or value is invalid",
                }),
              })
          );
      }
}