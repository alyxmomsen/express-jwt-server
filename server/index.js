const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const MyMiddleWare = require("./my-middleware/authenticate_middleware.js");

// const { api_router } = require("./routing/router.js");

// require("../database/db");
const app = express();

// require("dotenv").config();

// console.log('the port: ' , process.env.port) ;

// app.use(cors());

// app.use(bodyParser.json());
// app.use(express.static("uploads"));
// app.use("/api", api_router);

app.get('/' , (req , res ) => {
  res.status(200).json({
    message:'foo bar' ,
  });
});

app.listen(3002, () => {
  console.log(`express run on port `);
});
