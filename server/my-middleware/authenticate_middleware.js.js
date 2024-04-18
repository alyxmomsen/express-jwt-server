const jwt = require('jsonwebtoken');


async function authMiddleWare(req, res, next) {

  try {
    const {authorization}  = req.headers;
    const token = authorization ;

    // console.log({authorization});

    const decoded = jwt.verify(token ,process.env.secret_key );

    if(decoded) {
      req.userid = decoded.userid ;
      
      next();
    }
    else {
      return res.status(401).json({status:false , message:myErr});
    }
    
  }
  catch (myErr) {
    console.log({myErr});
    return res.status(401).json({status:false , message:{myErr}});
    
  }
  
  
}

module.exports = authMiddleWare;
