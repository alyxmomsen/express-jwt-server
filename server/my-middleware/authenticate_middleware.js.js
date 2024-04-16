const jwt = require('jsonwebtoken');


async function authMiddleWare(req, res, next) {

  const token = req.headers.authorization;
  const data = jwt.verify(token , process.env.secret_key);
  // console.log({token , data});


  if(!data) res.status(409).json({status:false , message:'failed'});

  req.userid = data.userid ;
  next();
}

module.exports = authMiddleWare;
