const { Schema } = require("mongoose");

const newsSchema = new Schema({
  title: String,
  body: String,
});

module.exports = userSchema;
