import { Request, Response } from "express"
import bcrypt from "bcrypt"
import crypto from "crypto"
import userModel from "../model/userModel"
import { HTTP } from "../util/enums"
import jwt from "jsonwebtoken"
export const Createuser = async (req: Request, res: Response) => {
    try {

        const { email, password } = req.body

        const CreateUser = await userModel.create({
            email,
            password
        })
        return res.status(201).json({
            message: "user created using freemo",
            data: CreateUser
        })

    } catch (error: any) {
        return res.status(404).json({
            message: error.message
        })
    }
}






export const Signin = async (req: Request, res: Response) => {
    try {

        const { email, password } = req.body

        const getemail = await userModel.findOne({ email })

        if (getemail) {

            if (password === getemail.password) {
                const encrypt = jwt.sign({ id: getemail._id }, "JAS", { expiresIn: "2d" })
                return res.status(HTTP.OK).json({
                    message: "signed in",
                    data: encrypt
                })
            } else {
                return res.status(HTTP.ERROR).json({
                    message: "check your password"
                })
            }

        } else {
            return res.status(HTTP.ERROR).json({
                message: "check your email address"
            })
        }

    } catch (error) {
        return res.status(HTTP.ERROR).json({
            message: "an error occured"
        })
    }
}