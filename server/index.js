const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const MyMiddleWare = require("./my-middleware/authenticate_middleware.js");

const { api_router } = require("./routing/router.js");

const db = require("../database/db");


db.on("error", (err) => {
  console.log('smth wrong with db');

});

db.once("open", () => {

  console.log("Подключено к MongoDB");

  console.log('run server ... ');


  run_express_server();

});


function run_express_server () {

  const app = express();

  app.use(cors());

  app.use(bodyParser.json());
  app.use(express.static("uploads"));
  app.use("/api", api_router);

  app.get('/news/hello' , (req , res) => {
    res.send('hello from news');
  });

  app.listen(3002, () => {
    console.log(`express run on port ${3002}`);
  });

}
