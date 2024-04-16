const { Router } = require("express");
const UserModel = require("../../database/models");
const routerController = require("./controller/common-controller");

const router = new Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "hello from base route" });
});

router.post("/registration", routerController.user_registration);

router.post("/logout", routerController.user_logout);

router.post("/auth", routerController.user_authorization);

module.exports = router;
