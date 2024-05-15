import sendEmailService from "../services/sendEmail-service.js";

const send = async (req, res, next) => {
  try {
    const result = await sendEmailService.send(req.body);
    res
      .status(200)
      .json({
        data: result,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

export default { send };
