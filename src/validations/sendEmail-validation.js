import Joi from "joi";

const send = Joi.object({
  email: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export default { send };
