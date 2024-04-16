const jwt = require("jsonwebtoken");
const UserModel = require("../../../../../database/models");

async function user_authorization(req, res, next) {
  const body = req.body;

  const headers = req.headers;

  res.status(200).json({ message: "response", payload: headers });
}

module.exports = user_authorization;

async function user_authentication({
  email,
  username,
  password,
}) {
  if (!email) return { status: false, message: "EMAIL no passed " };
  if (!username) return { status: false, message: "USER NAME no passed " };
  if (!password) return { status: false, message: "PASSWORD no passed " };

  const ifDocByUsernameAndPassworMatch = await find_By_Username_And_Password({
    email,
    password,
  });

  return ifDocByUsernameAndPassworMatch
    ? { status: true, message: "username and password MATCH" }
    : { status: false, message: "username and password NO MATCH" };
}

async function user_authorization() {
    jwt.sign({} , '');
}

async function find_By_Username_And_Password({ password, email }) {
  const doc = await UserModel.findOne({
    email: { $eq: email },
    password: { $eq: password },
  });
  return doc;
}
