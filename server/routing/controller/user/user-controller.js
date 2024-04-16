const UserModel = require("../../../../database/models");
const user_authorization = require("./methods/user-auth");
const user_logout = require("./methods/user-logout");
const user_registration = require("./methods/user-registration");

class UserController {
  constructor() {
    this.user_registration = user_registration;
    this.user_authorization = user_authorization;
    this.user_logout = user_logout;
  }
}

module.exports = UserController;
