
const express = require('express');
const cors = require('cors');
const router = require('./routing/router');
const myMiddleware = require('./my-middleware');
const app = express() ;

require('dotenv').config() ;

app.use(myMiddleware);
app.use(router) ;
app.use(cors()) ;

app.listen(3001 , () => {
    console.log(`express run on port ${process.env.port}`);
});


