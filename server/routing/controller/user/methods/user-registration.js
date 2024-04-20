const UserModel = require("../../../../../database/models/user-model");
const bcrypt = require('bcrypt');

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

        const {status , message} = checkResult ;

        return res
          .status(401)
          .json({ status , message });
      }

      const {status , message , payload} = await tryToHashThePassword(password) ;

      if(!status) return res.status(500).json({status , message});

      const newUser = new UserModel({
        username,
        password:payload,
        email,
      });

      await newUser.save();
      
      return res.status(200).json({status:true ,  message: "registration is successful".toUpperCase() });
    } else {
      return res.status(401).json({status:false ,   message: "registration rejected".toUpperCase() });
    }
  } catch (err) {

    console.log(err);

    return res.status(500).json({status:false ,  message: err });
  }
}

module.exports = userRegistration;

async function check_if_the_name_and_email_is_available({ username, email }) {
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


async function tryToHashThePassword(password) {
  try {
    const result = await new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, function(err, hash) {
        if (err) {
          reject({ status: false, message: 'error while hashing', payload: null });
        } else {
          resolve({ status: true, message: 'ok', payload: hash });
        }
      });
    });
    return result;
  } catch (error) {
    return { status: false, message: 'error', payload: null };
  }
}
