const { Router } = require("express");
const UserModel = require("../../database/models/user-model");
const routerController = require("./controller/common-controller");
const authMiddleWare = require("../my-middleware/authenticate_middleware.js");

const api_router = new Router();

api_router.post("/registration", routerController.user.registration);
api_router.post("/login", routerController.user.login);
api_router.post("/auth", (req, res) =>
  res.status(200).json({ status: true, message: "auth" }),
);

api_router.get("/account", authMiddleWare , routerController.user.account);
api_router.post("/logout", routerController.user.logout);

api_router.get("/news" , routerController.news.get_all) ;
api_router.post("/news" , authMiddleWare , routerController.news.post_one);

module.exports = {api_router};
