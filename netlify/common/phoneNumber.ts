import { phoneRegexp } from "./regex";

export const validatePhoneNumber = (phoneNumber: string) => {
  let trasformedPhoneNumber = phoneNumber
  const isPhoneValid = phoneRegexp.test(phoneNumber);

  if (!isPhoneValid) {
    throw new Error(
      JSON.stringify({
        statusCode: 400,
        body: JSON.stringify({ message: "Phone is invalid" }),
      })
    );
  }

  if (!phoneNumber.startsWith("+")) {
    if (phoneNumber.startsWith("38")){
        trasformedPhoneNumber = `+${phoneNumber}`;
    } 
     else{
        trasformedPhoneNumber = `+38${phoneNumber}`;
     }
  }

  return trasformedPhoneNumber;
};
