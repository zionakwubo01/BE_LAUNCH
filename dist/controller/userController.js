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
exports.Signin = exports.Createuser = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const enums_1 = require("../util/enums");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Createuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const CreateUser = yield userModel_1.default.create({
            email,
            password
        });
        return res.status(201).json({
            message: "user created using freemo",
            data: CreateUser
        });
    }
    catch (error) {
        return res.status(404).json({
            message: error.message
        });
    }
});
exports.Createuser = Createuser;
const Signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const getemail = yield userModel_1.default.findOne({ email });
        if (getemail) {
            if (password === getemail.password) {
                const encrypt = jsonwebtoken_1.default.sign({ id: getemail._id }, "JAS", { expiresIn: "2d" });
                return res.status(enums_1.HTTP.OK).json({
                    message: "signed in",
                    data: encrypt
                });
            }
            else {
                return res.status(enums_1.HTTP.ERROR).json({
                    message: "check your password"
                });
            }
        }
        else {
            return res.status(enums_1.HTTP.ERROR).json({
                message: "check your email address"
            });
        }
    }
    catch (error) {
        return res.status(enums_1.HTTP.ERROR).json({
            message: "an error occured"
        });
    }
});
exports.Signin = Signin;
