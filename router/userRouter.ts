import { Router } from "express"
import { Createuser, Signin } from "../controller/userController";


const router: Router = Router()

router.route("/create-user").post(Createuser)
router.route("/log-in").post(Signin)

export default router