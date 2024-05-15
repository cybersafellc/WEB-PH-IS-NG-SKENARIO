import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import errorMiddleware from "../middlewares/error-middleware.js";
import sendEmailController from "../controllers/sendEmail-controller.js";

export const web = express();
web.use(cors());
web.use(cookieParser());
web.use(bodyParser.json());
web.post("/send", sendEmailController.send);
web.use(errorMiddleware.pageNotFound);
web.use(errorMiddleware.errorHandler);
