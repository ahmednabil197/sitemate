import mongoose from "mongoose";

mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDB = process.env.MONGO_URI ?? 'INVALID_MONGO_URI';

export async function initDbConnection() {
  await mongoose.connect(mongoDB, {
    dbName: 'sitemate'
  });
}