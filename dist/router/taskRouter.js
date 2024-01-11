"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Taskcontroller_1 = require("../controller/Taskcontroller");
const router = (0, express_1.Router)();
router.route("/create-task/:projectID").post(Taskcontroller_1.CreateTask);
router.route("/read-task/:projectID").get(Taskcontroller_1.ReadTask);
exports.default = router;
