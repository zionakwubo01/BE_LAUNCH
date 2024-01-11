import { Application, NextFunction, Request, Response } from "express";
import { HTTP } from "./util/enums";
import user from "./router/userRouter";
import pro from "./router/projectRouter"
import task from "./router/taskRouter"

export const Mainapp = async (app: Application) => {
    app.use("/api/v1", user)
    app.use("/api/v1", pro)
    app.use("/api/v1", task)
    app.use("/", (req: Request, res: Response) => {
        try {
            return res.status(HTTP.OK).json({ message: "welcome to default page" })
        } catch (error) {
            return res.status(HTTP.ERROR).json({ message: "erroe" })
        }
    })

}