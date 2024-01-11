import { Request, Response } from "express";
import { HTTP } from "../util/enums";
import ProjectModel from "../model/ProjectModel";
import taskModel from "../model/taskModel";
import { Types } from "mongoose";
import { sendMail } from "../util/email";



export const CreateTask = async (req: Request, res: Response) => {
    try {
        const { projectID } = req.params
        const { name, assignee, deadline } = req.body
        const project = await ProjectModel.findById(projectID)

        if (project) {
            const Task = await taskModel.create({
                name, assignee, deadline
            })
            sendMail(Task)

            project.task.push(new Types.ObjectId(Task._id))
            project.save()

            return res.status(HTTP.OK).json({
                message: "Task created",
                data: Task
            })

        } else {
            return res.status(HTTP.ERROR).json({
                message: "project not found",
            })
        }


    } catch (error) {
        return res.status(HTTP.ERROR).json({
            message: "error occured"
        })
    }
}
export const ReadTask = async (req: Request, res: Response) => {
    try {

        const { projectID } = req.params
        const Findtask = await ProjectModel.findById(projectID).populate({
            path: "task"
        })
        return res.status(HTTP.OK).json({
            message: "Task created",
            data: Findtask
        })

    } catch (error) {
        return res.status(HTTP.ERROR).json({
            message: "error occured"
        })
    }
}