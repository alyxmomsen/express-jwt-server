const { Router } = require("express");
const UserModel = require("../../database/models/user-model");
const routerController = require("./controller/common-controller");
const authMiddleWare = require("../my-middleware/authenticate_middleware.js");

const multer = require("multer");

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null , Date.now().toString() + "---" + file.originalname);
  },
});

const upload_middleware = multer({
  storage: multerStorage,
});

const api_router = new Router();

api_router.post("/registration", routerController.user.registration);
api_router.post("/login", routerController.user.login);
api_router.post("/auth", (req, res) =>
  res.status(200).json({ status: true, message: "auth" }),
);

api_router.get("/account", authMiddleWare, routerController.user.account);
api_router.post("/logout", routerController.user.logout);

api_router.get("/news", routerController.news.get_all);

api_router.get("foo" , (req , res) => {
  res.send('bar');
});

api_router.post(
  "/news",
  authMiddleWare,
  upload_middleware.single("my--file"),
  // (request, response, next) => {
    
  //   upload_middleware.single("my--file")(request, response, err => {
  //     if (err instanceof multer.MulterError) {
  //       return response.status(400).json({ status: false, message: err.message });
  //     } else if (err) {
  //       return response.status(500).json({ status: false, message: "Internal server error" });
  //     }
  //     next();
  //   });
  // },
  
  routerController.news.post_one,
);

/**
 *
 * @param {*} request
 * @param {*} response
 */

api_router.get(
  "/user/posts",
  authMiddleWare,
  routerController.news.get_all_posts_by_user_id,
);

api_router.get(
  "/user/account/the_post",
  authMiddleWare,
  routerController.news.get_one,
);

api_router.patch(
  "/user/account/thepost" , 
  authMiddleWare ,
  upload_middleware.single('file') ,
  routerController.news.update_one ,
);


api_router.get('/' , (req , res) => {
  res.status(200).json('hello ther');
});

module.exports = {
  api_router,
};
