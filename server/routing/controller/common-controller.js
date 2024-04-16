const UserModel = require("../../../database/models");
const UserController = require("./user/user-controller");

class RouterController extends UserController {
  constructor() {
    super();
  }
}

const routerController = new RouterController();

module.exports = routerController;
