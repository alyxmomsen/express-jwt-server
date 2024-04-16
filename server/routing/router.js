const { Router } = require("express");
const UserModel = require("../../database/models");
const routerController = require("./controller/common-controller");

const router = new Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "hello from base route" });
});

router.post("/registration", routerController.userRegistration);

router.post("/login", (req, res, next) => {});

router.post("/auth", routerController.authorization);

module.exports = router;
