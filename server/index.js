
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const router = require('./routing/router');
const myMiddleware = require('./my-middleware');
require('../database/db');
const app = express() ;

require('dotenv').config() ;

app.use(cors()) ;
app.use(myMiddleware);
app.use(bodyParser.json());
app.use(router) ;

app.listen(3001 , () => {
    console.log(`express run on port ${process.env.port}`);
});


