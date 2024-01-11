import { Request, Response } from "express";
import { HTTP } from "../util/enums";
import ProjectModel from "../model/ProjectModel";
import userModel from "../model/userModel";
import { Types } from "mongoose";




export const CreateProject = async (req: Request, res: Response) => {
    try {
        const { userID } = req.params
        const { name } = req.body

        const user = await userModel.findById(userID)

        if (user) {
            const createPro = await ProjectModel.create({
                name
            })

            user.project.push(new Types.ObjectId(createPro._id))
            user.save()
            return res.status(HTTP.OK).json({
                message: "project created",
                data: createPro

            })
        } else {
            return res.status(HTTP.ERROR).json({
                message: "user not found"
            })
        }



    } catch (error) {
        return res.status(HTTP.ERROR).json({
            message: "error occcured"
        })
    }
}

export const ReadProject = async (req: Request, res: Response) => {
    try {
        const { userID } = req.params

        const project = await userModel.findById(userID).populate({
            path: "project"
        })

        return res.status(HTTP.OK).json({
            message: "project read",
            date: project
        })

    } catch (error) {
        return res.status(HTTP.ERROR).json({
            message: "error occcured"
        })
    }
}
export const ReadoneProject = async (req: Request, res: Response) => {
    try {
        const { userID } = req.params
        const { projectID } = req.params


        const project = await userModel.findById(projectID).populate({
            path: "project"
        })

        return res.status(HTTP.OK).json({
            message: "one project read",
            data: project
        })

    } catch (error) {
        return res.status(HTTP.ERROR).json({
            message: "error occcured"
        })
    }
}