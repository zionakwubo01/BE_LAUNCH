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
exports.Mainapp = void 0;
const enums_1 = require("./util/enums");
const userRouter_1 = __importDefault(require("./router/userRouter"));
const projectRouter_1 = __importDefault(require("./router/projectRouter"));
const taskRouter_1 = __importDefault(require("./router/taskRouter"));
const Mainapp = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.use("/api/v1", userRouter_1.default);
    app.use("/api/v1", projectRouter_1.default);
    app.use("/api/v1", taskRouter_1.default);
    app.use("/", (req, res) => {
        try {
            return res.status(enums_1.HTTP.OK).json({ message: "welcome to default page" });
        }
        catch (error) {
            return res.status(enums_1.HTTP.ERROR).json({ message: "erroe" });
        }
    });
});
exports.Mainapp = Mainapp;
