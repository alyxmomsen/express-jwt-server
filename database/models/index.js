const { model } = require("mongoose");
const userSchema = require("../schemas/users");

const UserModel = model("user", userSchema);

module.exports = UserModel;
