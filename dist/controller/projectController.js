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
exports.ReadoneProject = exports.ReadProject = exports.CreateProject = void 0;
const enums_1 = require("../util/enums");
const ProjectModel_1 = __importDefault(require("../model/ProjectModel"));
const userModel_1 = __importDefault(require("../model/userModel"));
const mongoose_1 = require("mongoose");
const CreateProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const { name } = req.body;
        const user = yield userModel_1.default.findById(userID);
        if (user) {
            const createPro = yield ProjectModel_1.default.create({
                name
            });
            user.project.push(new mongoose_1.Types.ObjectId(createPro._id));
            user.save();
            return res.status(enums_1.HTTP.OK).json({
                message: "project created",
                data: createPro
            });
        }
        else {
            return res.status(enums_1.HTTP.ERROR).json({
                message: "user not found"
            });
        }
    }
    catch (error) {
        return res.status(enums_1.HTTP.ERROR).json({
            message: "error occcured"
        });
    }
});
exports.CreateProject = CreateProject;
const ReadProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const project = yield userModel_1.default.findById(userID).populate({
            path: "project"
        });
        return res.status(enums_1.HTTP.OK).json({
            message: "project read",
            date: project
        });
    }
    catch (error) {
        return res.status(enums_1.HTTP.ERROR).json({
            message: "error occcured"
        });
    }
});
exports.ReadProject = ReadProject;
const ReadoneProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const { projectID } = req.params;
        const project = yield userModel_1.default.findById(projectID).populate({
            path: "project"
        });
        return res.status(enums_1.HTTP.OK).json({
            message: "one project read",
            data: project
        });
    }
    catch (error) {
        return res.status(enums_1.HTTP.ERROR).json({
            message: "error occcured"
        });
    }
});
exports.ReadoneProject = ReadoneProject;
