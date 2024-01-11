"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModel = void 0;
const mongoose_1 = require("mongoose");
exports.ProjectModel = new mongoose_1.Schema({
    name: {
        type: String
    },
    task: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "task"
        }
    ],
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("project", exports.ProjectModel);
