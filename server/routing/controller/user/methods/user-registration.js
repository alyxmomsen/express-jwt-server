const UserModel = require("../../../../../database/models");

async function userRegistration(req, res, next) {
  try {
    const body = req.body;

    const { username, password, email } = body;

    if (username && password && email) {
      const checkResult = await check_if_the_name_is_available({
        username,
        email,
      });

      if (!checkResult.status) {
        return res
          .status(409)
          .json({ message: checkResult.message, status: checkResult.status });
      }

      const newUser = new UserModel({
        username,
        password,
        email,
        // token: 'foo bar' ,
      });

      const result = await newUser.save();

      return res.status(200).json({ message: "user saved" });
    } else {
      return res.status(401).json({ message: "user no saved" });
    }
  } catch (err) {
    console.log(err);

    return res.status(500).json({ message: "error on server" });
  }
}

module.exports = userRegistration;

async function check_if_the_name_is_available({ username, email }) {
  const docByName = await UserModel.findOne({ username: { $eq: username } });
  const docByEmail = await UserModel.findOne({ email: { $eq: email } });

  if (docByEmail) {
    const message = "that user EMAIL exists";
    const status = false;

    return { message, status };
  }

  if (docByName) {
    const message = "that USER NAME exists";
    const status = false;

    return { message, status };
  }

  const message = "a new user is ALLOWED to register";
  const status = true;

  return { message, status };
}
