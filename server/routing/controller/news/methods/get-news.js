const NewsModel = require("./../../../../../database/models/news-model");

async function get_all_news(request, response, next) {
  const allnews = await NewsModel.find({
    date_to_post: { $lte: new Date(Date.now()).toISOString() },
  }).sort({ date_to_post: "desc" });

  console.log({ allnews });

  response.status(200).json({ status: true, payload: allnews ? allnews : null});
}

module.exports = get_all_news ;
