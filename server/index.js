const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const MyMiddleWare = require("./my-middleware/authenticate_middleware.js");

const { api_router } = require("./routing/router.js");

const db = require("../database/db");
const firebaserouter = require("./routing/firebase-based-router/router.js");


db.on("error", (err) => {
  console.log('smth wrong with db');

  run_express_server(firebaserouter);

});

db.once("open", () => {

  console.log("Подключено к MongoDB");

  console.log('run server ... ');


  run_express_server(api_router);

});


function run_express_server (router) {

  const app = express();

  app.use(cors());

  app.use(bodyParser.json());
  app.use(express.static("uploads"));
  app.use("/api", router);

  app.get('/news/hello' , (req , res) => {
    res.send('hello from news');
  });

  app.listen(3002, () => {
    console.log(`express run on port ${3002}`);
  });

}
