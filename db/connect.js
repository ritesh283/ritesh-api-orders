const mongoose = require("mongoose");
/*uri = "mongodb+srv://salimans52859_db_user:4rBwYDd4h4PvybEj@riteshapi.bjp8ehj.mongodb.net/?appName=RiteshApi";*/
const connectDB = (uri) => {
  console.log("connect db");
  return mongoose.connect(uri);
};
module.exports = connectDB;