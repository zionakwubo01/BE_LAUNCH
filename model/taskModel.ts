import { Schema, Types, model } from "mongoose";
import { iProdata, iTaskdata } from "../util/interface";






export const taskModel = new Schema<iTaskdata>(
    {
        name: {
            type: String
        },
        assignee: {
            type: String
        },
        deadline: {
            type: String
        }

    },
    { timestamps: true }
)

export default model<iTaskdata>("task", taskModel)