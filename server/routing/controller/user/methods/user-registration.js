const UserModel = require("../../../../../database/models/user-model");
const bcrypt = require("bcrypt");
const { MyResponse, MyPayload } = require("../../../../MyUtilits/utilits");

async function userRegistration(req, res, next) {
  try {
    const body = req.body;

    const { username, password, email } = body;

    if (username && password && email) {
      const checkResult = await check_if_the_name_and_email_is_available({
        username,
        email,
      });

      if (!checkResult.status) {
        const { status, message } = checkResult;

        return res.status(401).json({ status, message });
      }

      const { status, message, payload } = await tryToHashThePassword(password);

      if (!status) return res.status(500).json({ status, message });

      const newUser = new UserModel({
        username,
        password: payload,
        email,
      });

      await newUser.save();

      const myResponse = new MyResponse(
        true,
        "registration is successful".toUpperCase(),
        null,
      );

      return res.status(211).json(myResponse);
    } else {
      const myResponse = new MyResponse(
        false,
        "registration rejected".toUpperCase(),
        null,
      );

      return res.status(401).json(myResponse);
    }
  } catch (err) {
    const myResponse = new MyResponse(
      false,
      "registration error".toUpperCase(),
      new MyPayload("error", err),
    );

    console.log(err);

    return res.status(500).json(myResponse);
  }
}

module.exports = userRegistration;

async function check_if_the_name_and_email_is_available({ username, email }) {
  const doc = await UserModel.findOne({
    $or: [{ username: { $eq: username } }, { email: { $eq: email } }],
  });

  console.log({ doc });

  if (doc) {
    const message = "that USER NAME or EMAIL is EXISTS";
    const status = false;

    return { message, status };
  }

  const message = "a new user is ALLOWED to register";
  const status = true;

  return { message, status };
}

async function tryToHashThePassword(password) {
  try {
    const result = await new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, function (err, hash) {
        if (err) {
          reject({
            status: false,
            message: "password hashing error".toUpperCase(),
            payload: null,
          });
        } else {
          resolve({ status: true, message: "hashed".toUpperCase(), payload: hash });
        }
      });
    });
    return result;
  } catch (error) {
    return { status: false, message: "error", payload: null };
  }
}
