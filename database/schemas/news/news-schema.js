const { Schema } = require("mongoose");

const newsSchema = new Schema({
  title: String ,
  body: String ,
  date_to_post: Date ,
  authorId: String ,
  authorUserName: String ,
});

module.exports = newsSchema;
