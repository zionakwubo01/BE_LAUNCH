import { Router } from "express";
import { CreateTask, ReadTask } from "../controller/Taskcontroller";


const router: Router = Router();

router.route("/create-task/:projectID").post(CreateTask)
router.route("/read-task/:projectID").get(ReadTask)

export default router;