const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const MyMiddleWare = require("./my-middleware/authenticate_middleware.js");

let a = 0;

const { api_router } = require("./routing/router.js");

// const myMiddleware = require("./my-middleware");
require("../database/db");
const app = express();

require("dotenv").config();

app.use(cors());
// app.use(MyMiddleWare);
app.use(bodyParser.json());
app.use(express.static("uploads"));
app.use("/api", api_router);
app.get("/" , (req , res) => {
  res.status(200).json("hello there");
});

app.listen(3001, () => {
  console.log(`express run on port `);
});
