const jwt = require("jsonwebtoken");
const UserModel = require("../../../../../database/models/user-model");

async function user_account(request, response, next) {


  // return response.status(409).json({status:false , message:'failure'});
  
  if(!request.userid) return response.status(409).json({status:false , message:'fail'});
  
  const userid = request.userid ;

  // console.log(typeof userid);
  
  const doc = await UserModel.findById(userid) ;

  console.log(doc);

  return response
    .status(200)
    .json({ status: true, message: "hello from account", payload: doc });
}

module.exports = user_account;
