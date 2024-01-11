import express, { Application } from "express"
import cors from "cors"
import { Dbconfig } from "./util/Dbconfig"
import { Mainapp } from "./Mainapp"
import env from "dotenv"

env.config()

const port: number = 3355



const app: Application = express()
app.use(express.json())
app.use(cors())
Mainapp(app)

const server = app.listen(port, () => {
    console.log("server is active")
    Dbconfig()
})


process.on("uncaughtException", (error: Error) => {
    process.exit(1)
})

process.on("unhandledRejection", (reason: any) => {
    server.close(() => {
        process.exit(1)
    })
})