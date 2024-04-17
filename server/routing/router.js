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

// router.get('/news' , () => {});

module.exports = {api_router};
