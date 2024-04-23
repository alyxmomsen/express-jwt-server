const getUserPosts = require("./methods/get-all-posts-by-user-id");
const get_all_news = require("./methods/get-news");
const get_one_post = require("./methods/get-one");
const post_one = require("./methods/post_one");
const update_one_post = require("./methods/update-one-post");

class NewsController {
  constructor() {
    this.get_all = get_all_news;
    this.post_one = post_one;
    this.get_one = get_one_post;
    this.get_all_posts_by_user_id = getUserPosts;
    this.update_one = update_one_post ;
    this.drop_one = () => {};
  }
}

/**
 * 
 * @param {boolean} ifMongoExist 
 * @returns () => {}
 */

function setMethod (ifMongoExist) {

  return async (req , res) => {

    const allnews = await NewsModel.find({
      date_to_post: { $lte: new Date(Date.now()).toISOString() },
    }).sort({ date_to_post: "desc" });

  }
  
}

module.exports = NewsController;
