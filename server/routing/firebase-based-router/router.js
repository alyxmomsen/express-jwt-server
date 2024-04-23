const { Router } = require("express");


const firebaserouter = new Router () ;


firebaserouter.get('/' , (req , res) => {
    res.send('hello from firebase router');
});


module.exports = firebaserouter ;