const { Schema } = require("mongoose");

const newsSchema = new Schema({
  title: String,
  body: String,
  date_to_post:Date ,
});

module.exports = newsSchema;
