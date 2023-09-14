import mongoose, { Connection } from "mongoose";

let isConnected = false; // track the connection
let DB_URL: string;
let db: Connection;

export const connectToDB = async () => {
  if (process.env.DB_URL) {
    DB_URL = `${process.env["DB_URL"]}`;
  } else {
    DB_URL = "mongodb://127.0.0.1:27017";
  }

  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return db;
    return;
  }

  try {
    await mongoose.connect(DB_URL, {
      dbName: "students",
    });

    isConnected = true;

    db = mongoose.connection;

    console.log("MongoDB connected");

    return db;
  } catch (error) {
    console.log(error);
  }
};
