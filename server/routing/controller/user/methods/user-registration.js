const UserModel = require("../../../../../database/models/user-model");

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

        const {status , message} = checkResult ;

        return res
          .status(401)
          .json({ status , message });
      }

      const newUser = new UserModel({
        username,
        password,
        email,
      });

      await newUser.save();

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
  const doc = await UserModel.findOne({ username: { $eq: username } , email:{$eq:email} });

  if (doc) {
    const message = "that USER NAME or EMAIL is EXISTS";
    const status = false;

    return { message, status };
  }

  const message = "a new user is ALLOWED to register";
  const status = true;

  return { message, status };
}
