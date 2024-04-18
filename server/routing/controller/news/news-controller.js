const get_all_news = require("./methods/get-news");
const post_one = require("./methods/post_one");


class NewsController {
  constructor() {
    this.get_all = get_all_news ;
    this.post_one = post_one ;
  }
}

module.exports = NewsController;
