require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({encode: false}));
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

app.get("/", (req,res)=> {
  res.send("Hi, I am live pubg");
});

//middleware or to set router

app.use("/api/orders", products_routes);

const start = async () =>{
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, ()=>{
      console.log(`${PORT} Yes I am connected`);
    });
  }catch (error) {
    console.log(error);
  }
};

start();