"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectController_1 = require("../controller/projectController");
const router = (0, express_1.Router)();
router.route("/create-project/:userID").post(projectController_1.CreateProject);
router.route("/read-project/:userID").get(projectController_1.ReadProject);
router.route("/read-one-project/:userID").get(projectController_1.ReadoneProject);
exports.default = router;
