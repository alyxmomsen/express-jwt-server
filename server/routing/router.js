const { Router } = require("express");
const UserModel = require("../../database/models/user-model");
const routerController = require("./controller/common-controller");
const authMiddleWare = require("../my-middleware/authenticate_middleware.js");

const router = new Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "hello from base route" });
});

// open

router.post("/registration", routerController.user.registration);
router.post("/login", routerController.user.login);
router.post("/auth", (req, res) =>
  res.status(200).json({ status: true, message: "auth" }),
);

// protected

router.get("/account", authMiddleWare , routerController.user.account);
router.post("/logout", routerController.user.logout);

// router.get('/news' , () => {});

module.exports = router;
