const { MongoClient } = require("mongodb");

const url =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1";

const client = new MongoClient(url);

const connectDB = async () => {
  let connect = await client.connect();
  let db = connect.db("oncredit");
  return db;
};

// connectDB();

module.exports = connectDB;
