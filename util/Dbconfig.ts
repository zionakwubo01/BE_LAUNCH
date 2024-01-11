import { connect } from "mongoose"


const URL: string = "mongodb+srv://zionakwubo:zionakwubo@cluster0.3bx2yps.mongodb.net/?retryWrites=true&w=majority"


export const Dbconfig = async () => {
    try {
        await connect(URL).then((res) => {
            console.log("database is active")
        })
    } catch (error) {
        return error
    }
}


// https://zion-first-deploy.onrender.com