const { Router } = require("express");

const router = new Router();

router.get('/' , (req , res) => {

    res.status(200).json({message:'hello from base route'})
});

router.get('/foo' , (req, res) => {
    res.status(200).json({message:'hello from foo'})
})

router.post('/bar')

module.exports = router ;