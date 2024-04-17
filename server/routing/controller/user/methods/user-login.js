const jwt = require("jsonwebtoken");
const UserModel = require("../../../../../database/models/user-model");

async function user_login(req, res, next) {
  const body = req.body;

  const { email, password } = body;

  if (!email || !password)
    return res
      .status(409)
      .json({ status: false, message: "request no contain email or password" });

  const authentication_result = await authetnticateUser({ email, password });

  if(!authentication_result.status) return res.status(401).json({status:false ,  message:authentication_result.message});

  const authorization_result = await authorization(
    authentication_result.payload,
  );

  return authorization_result.status
    ? res.status(200).json({
        status: authorization_result.status,
        message: authorization_result.message,
        payload: {
          token: authorization_result.payload.token,
        },
      })
    : res.status(409).json({
        status: authorization_result.status,
        message: authorization_result.message,
        payload: null,
      });
}

module.exports = user_login;

async function authetnticateUser({ email, password }) {
  if (!email) return { status: false, message: "EMAIL no passed " };
  if (!password) return { status: false, message: "PASSWORD no passed " };

  const ifDocByUsernameAndPassworMatch = await find_By_Username_And_Password({
    email,
    password,
  });

  return ifDocByUsernameAndPassworMatch
    ? {
        status: true,
        message: "username and password MATCH" ,
        payload: ifDocByUsernameAndPassworMatch ,
      }
    : {
        status: false,
        message: "username and password NO MATCH",
        payload: null,
      };
}

async function authorization(userDoc) {
  //   const doc = await UserModel.findOne({ name: "" });

  const user = userDoc;
  // doc
  if (!process.env.secret_key)
    return { status: false, message: "secret key env error", payload: null };
  const secret = process.env.secret_key;

  const userid = user._id.toString();
  const token = jwt.sign({ userid }, secret);

  return { status: true, message: "user AUTHORIZED", payload: { token } };
}

async function find_By_Username_And_Password({ password, email }) {
  const doc = await UserModel.findOne({
    email: { $eq: email },
    password: { $eq: password },
  });
  return doc;
}
