const { model } = require("mongoose");
const newsSchema = require("../schemas/news/news-schema");

const NewsModel = model("news", newsSchema);

module.exports = NewsModel;
