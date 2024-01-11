import { Router } from "express"
import { CreateProject, ReadProject, ReadoneProject } from "../controller/projectController";



const router: Router = Router();

router.route("/create-project/:userID").post(CreateProject)
router.route("/read-project/:userID").get(ReadProject)
router.route("/read-one-project/:userID").get(ReadoneProject)


export default router;