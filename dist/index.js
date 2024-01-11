"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Dbconfig_1 = require("./util/Dbconfig");
const Mainapp_1 = require("./Mainapp");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = 3355;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
(0, Mainapp_1.Mainapp)(app);
const server = app.listen(port, () => {
    console.log("server is active");
    (0, Dbconfig_1.Dbconfig)();
});
process.on("uncaughtException", (error) => {
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    server.close(() => {
        process.exit(1);
    });
});
