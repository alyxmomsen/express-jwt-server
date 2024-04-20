const UserModel = require("../../../../../database/models/user-model");
const NewsModel = require("./../../../../../database/models/news-model");

async function post_one(request, response, next) {
  const { title, body, date_to_post } = request.body;

  console.log({ date_to_post });

  const { file } = request;

  if (!title) {
    return response
      .status(401)
      .json({ status: false, message: "you must provide title" });
  }

  const doc = await UserModel.findById(request.userid);

  const news = new NewsModel({
    title,
    body: body ? body : "",
    date_to_post: date_to_post
      ? date_to_post
      : new Date(Date.now()).toISOString(),
    authorId: request.userid,
    authorUserName: doc ? doc.username : "undefined",
    image_url: "http://localhost:3001/" + file.filename,
    date: new Date(),
  });

  await news.save();

  response
    .status(200)
    .json({ status: true, payload: null, message: "you posted the news" });
}

module.exports = post_one;
