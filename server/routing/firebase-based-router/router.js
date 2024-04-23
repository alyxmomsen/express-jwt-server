const { Router } = require("express");


const firebaserouter = new Router () ;


firebaserouter.get("/news" ,  async () => {
    res.send('hello from news firebase router');
} );

firebaserouter.get('/' , async (req , res) => {
    res.send('hello from firebase router');
});


module.exports = firebaserouter ;