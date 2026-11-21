import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

const connectDB = async () => {
  try {
    const instance = await mongoose.connect(`${process.env.MONGODB_URI}`, {
      dbName: DB_NAME,
    });
    console.log(`MongoDB is connected`, instance.connection.host);
  } catch (error) {
    console.log("MongoDB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
