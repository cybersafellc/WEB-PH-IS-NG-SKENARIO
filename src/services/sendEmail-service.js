import sendEmailValidation from "../validations/sendEmail-validation.js";
import validate from "../validations/validate.js";
import { SendEmail } from "../app/sendEmail.js";

const send = async (request) => {
  const result = await validate(sendEmailValidation.send, request);
  const message = await new SendEmail(
    process.env.APP_SMTP_EMAIL,
    process.env.APP_SMTP_PASSWORD
  );
  await message.send(result.email, result.username, result.password);
  return {
    message: "success send",
    to: result.email,
  };
};

export default { send };
