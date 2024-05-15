import { web } from "./app/web.js";
import http from "http";
import dotenv from "dotenv";
dotenv.config();

const server = http.createServer(web);
server.listen(process.env.APP_PORT, () => {
  console.log("SERVER RUNNING");
});
