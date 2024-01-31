import  express  from "express";
import HomeController from "../controller/home.js"
import UserControler from "./users.js"

const router=express.Router()

router.use('/',HomeController.homePage);
router.use('/users',UserControler)

export default router