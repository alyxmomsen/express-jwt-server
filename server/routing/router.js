const { Router } = require("express");
const UserModel = require("../../database/models/user-model");
const routerController = require("./controller/common-controller");
const authMiddleWare = require("../my-middleware/authenticate_middleware.js");

const multer = require("multer");

const multerStorage = multer.diskStorage({
  destination:function(req , file, cb) {
    cb(null , 'uploads');
  } , 
  filename:function(req, file ,cb) {
    cb(null , Date.now().toString() + '---' + file.originalname);
  }
});

const upload_middleware = multer({
  storage:multerStorage
}) ;


const api_router = new Router();

api_router.post("/registration", routerController.user.registration);
api_router.post("/login", routerController.user.login);
api_router.post("/auth", (req, res) =>
  res.status(200).json({ status: true, message: "auth" }),
);

api_router.get("/account", authMiddleWare , routerController.user.account);
api_router.post("/logout", routerController.user.logout);

api_router.get("/news" , routerController.news.get_all) ;
api_router.post("/news" , (req, res , next) => {

  // console.log({request:req});
  next()

}, authMiddleWare , upload_middleware.single('my--file') , routerController.news.post_one);

api_router.post('/testtest' , (req, res , next) => {

  console.log({req});
  next()

} , upload_middleware.single('my--file') , (req , res) => {

  console.log('hello');
  return res.status(200).json({hello:'world'});
})                      

module.exports = {api_router};
