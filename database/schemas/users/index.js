const { Schema } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  isAuthorized: Boolean,
  token: String,
  secret: String,
});

module.exports = userSchema;
