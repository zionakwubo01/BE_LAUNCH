"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserModel = new mongoose_1.Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    project: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "project"
        }
    ],
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("user", UserModel);
