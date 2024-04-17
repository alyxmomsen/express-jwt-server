const UserModel = require("../../../../database/models/user-model");
const user_account = require("./methods/user-account");
const user_login = require("./methods/user-login");
const user_logout = require("./methods/user-logout");
const user_registration = require("./methods/user-registration");

class UserController {
  constructor() {
    this.registration = user_registration;
    this.login = user_login;
    this.logout = user_logout;
    this.account = user_account;
  }
}

module.exports = UserController;
