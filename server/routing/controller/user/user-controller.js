const UserModel = require("../../../../database/models");
const userAuthorization = require("./methods/user-auth");
const userRegistration = require("./methods/user-registration");

class UserController {
  constructor() {
    this.userRegistration = userRegistration;
    this.authorization = userAuthorization;
  }
}

module.exports = UserController;
