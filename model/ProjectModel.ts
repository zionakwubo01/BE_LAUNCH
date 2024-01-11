import { Schema, Types, model } from "mongoose";
import { iProdata } from "../util/interface";






export const ProjectModel = new Schema<iProdata>(
    {
        name: {
            type: String
        },
        task: [
            {
                type: Types.ObjectId,
                ref: "task"
            }
        ],

    },
    { timestamps: true }
)

export default model<iProdata>("project", ProjectModel)