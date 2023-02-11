import * as dotenv from "dotenv";
import express from "express";
import config from "config";
import connectToDb, { Database } from "./utils/connectToDb";
import log from "./utils/logger";
import router from "./routes";
import deserializeUser from "./middleware/deserializeUser";
dotenv.config();

const app = express();
app.use(express.json());
app.use(deserializeUser);
app.use(router);

const port = config.get("port") as number;

app.listen(port, () => {
  log.info(`App started at http://localhost:${port}`);
  // connectToDb();
  Database.getInstance();
});
