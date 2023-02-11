import mongoose from "mongoose";
import config from "config";
import log from "./logger";

// example 1
async function connectToDb() {
  const dbUri = config.get<string>("dbUri");
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(dbUri);
    log.info("Connected to MongoDB");
  } catch (e) {
    process.exit(1);
  }
}

export default connectToDb;

// example 2
const dbUri = config.get("dbUri") as string;

export class Database {
  static instance: Database;
  constructor() {
    try {
      mongoose.connect(dbUri).then(() => {
        log.info("Connected to MongoDB");
      });
    } catch (e) {
      process.exit(1);
    }
  }

  static getInstance() {
    if (this.instance) {
      console.log("Returning instance");
      return this.instance;
    }

    console.log("Creating new instance");
    this.instance = new Database();
    return this.instance;
  }
}
