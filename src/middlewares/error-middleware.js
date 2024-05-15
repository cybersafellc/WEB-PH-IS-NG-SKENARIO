import { ResponseError } from "../errors/response-error.js";

const pageNotFound = async (req, res, next) => {
  try {
    throw new ResponseError(404, "page not found");
  } catch (error) {
    next(error);
  }
};

const errorHandler = async (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ResponseError) {
    res
      .status(err.status)
      .json({
        errors: err.message,
      })
      .end();
  } else {
    res
      .status(500)
      .json({
        errors: err.message,
      })
      .end();
  }
};

export default { errorHandler, pageNotFound };
