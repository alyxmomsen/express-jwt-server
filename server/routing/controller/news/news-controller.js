const getNews = require("./methods/get-news");
const post_one = require("./methods/post_one");


class NewsController {
  constructor() {
    this.get_all = getNews ;
    this.post_one = post_one ;
  }
}

module.exports = NewsController;
