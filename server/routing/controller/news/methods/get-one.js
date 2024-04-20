const NewsModel = require("../../../../../database/models/news-model");
const { MyResponse, MyPayload } = require("../../../../MyUtilits/utilits");

/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 * @returns 
 */

async function get_one_post(request, response, next) {
  const postid = request.query.postid;

  if (!postid)
    return response
      .status(401)
      .json(new MyResponse(false, "no post id", new MyPayload("result", null)));

  const thePostDocument = await NewsModel.findById(postid);

  if (!thePostDocument)
    return response
      .status(401)
      .json(new MyResponse(false, "that news no exist", new MyPayload("result", null)));

  response
    .status(200)
    .json(new MyResponse(true, "success", new MyPayload("the post data", thePostDocument)));
}

module.exports = get_one_post;
