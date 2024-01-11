import mongoose, { Schema, Types, model } from "mongoose";


interface iUser {
    email: string;
    password: string;
    uniqueCode: string;
    project: Array<{}>
}

interface iUserData extends iUser, Document { }

const UserModel = new Schema<iUserData>({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,

    },
    project: [
        {
            type: Types.ObjectId,
            ref: "project"
        }
    ],
},
    { timestamps: true }

)



export default model<iUserData>("user", UserModel)