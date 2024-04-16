const UserModel = require("../../../database/models/user-model");
const NewsController = require("./news/news-controller");
const UserController = require("./user/user-controller");

class RouterController extends UserController {
  /* addController(name , controller) {
    
  } */

  constructor() {
    super();
    this.news = new NewsController();
    this.user = new UserController();
  }
}

const routerController = new RouterController();

module.exports = routerController;
