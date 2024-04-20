const jwt = require("jsonwebtoken");
const UserModel = require("../../../../../database/models/user-model");

async function user_account(request, response, next) {
  console.log({ userid: request.userid });

  const doc = await UserModel.findById(request.userid);

  if (!doc) {
    return response.status(401).json({
      status: true,
      message: "hello from account",
      payload: "auth error",
    });
  }

  return response
    .status(200)
    .json({ status: true, message: "hello from account", payload: doc });
}

module.exports = user_account;
