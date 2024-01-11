"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadTask = exports.CreateTask = void 0;
const enums_1 = require("../util/enums");
const ProjectModel_1 = __importDefault(require("../model/ProjectModel"));
const taskModel_1 = __importDefault(require("../model/taskModel"));
const mongoose_1 = require("mongoose");
const email_1 = require("../util/email");
const CreateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { projectID } = req.params;
        const { name, assignee, deadline } = req.body;
        const project = yield ProjectModel_1.default.findById(projectID);
        if (project) {
            const Task = yield taskModel_1.default.create({
                name, assignee, deadline
            });
            (0, email_1.sendMail)(Task);
            project.task.push(new mongoose_1.Types.ObjectId(Task._id));
            project.save();
            return res.status(enums_1.HTTP.OK).json({
                message: "Task created",
                data: Task
            });
        }
        else {
            return res.status(enums_1.HTTP.ERROR).json({
                message: "project not found",
            });
        }
    }
    catch (error) {
        return res.status(enums_1.HTTP.ERROR).json({
            message: "error occured"
        });
    }
});
exports.CreateTask = CreateTask;
const ReadTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { projectID } = req.params;
        const Findtask = yield ProjectModel_1.default.findById(projectID).populate({
            path: "task"
        });
        return res.status(enums_1.HTTP.OK).json({
            message: "Task created",
            data: Findtask
        });
    }
    catch (error) {
        return res.status(enums_1.HTTP.ERROR).json({
            message: "error occured"
        });
    }
});
exports.ReadTask = ReadTask;
