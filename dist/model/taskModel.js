"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskModel = void 0;
const mongoose_1 = require("mongoose");
exports.taskModel = new mongoose_1.Schema({
    name: {
        type: String
    },
    assignee: {
        type: String
    },
    deadline: {
        type: String
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("task", exports.taskModel);
