const { model } = require("mongoose");
const userSchema = require("../schemas");


const UserModel = model('user' , userSchema);


module.exports = UserModel ;