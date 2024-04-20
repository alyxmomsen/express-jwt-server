const NewsModel = require("../../../../../database/models/news-model");
const { MyPayload, MyResponse } = require("../../../../MyUtilits/utilits");

async function getUserPosts(request, response) {
  console.log(MyPayload, MyResponse);

  const { body, headers } = request;

  if (!headers.authorization)
    return response
      .status(200)
      .json(new MyResponse(false, "no auth header", null));

  const userId = request.userid;

  if (!userId) {
    return response
      .status(200)
      .json(new MyResponse(false, "user id invalid", null));
  }

  const doc = await NewsModel.find({ authorId: userId });

  console.log({ doc });

  return response
    .status(200)
    .json(new MyResponse(true, "success", new MyPayload("", doc)));
}

module.exports = getUserPosts;
