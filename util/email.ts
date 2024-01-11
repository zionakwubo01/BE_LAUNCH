import { google } from "googleapis"
import nodemailer from "nodemailer"
const ID = "848542784186-9os7noa7qvcg3nckfu38s3bhob8u6oga.apps.googleusercontent.com"
const SECRET = "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";
const REFRESH = "1//04GgN8ydoI_ZdCgYIARAAGAQSNwF-L9IrKCOkFE95PncupZNTb3WCiygNcFb1vp20oW-1SMJTKzSWxnWw2B6nf4S85GXSTpgR44M";
const GOOGLE_URL = "https://developers.google.com/oauthplayground";
import ejs from "ejs"
import path from "path"


const oAuth = new google.auth.OAuth2(
    ID,
    SECRET,
    GOOGLE_URL
)

oAuth.setCredentials({ refresh_token: REFRESH })

export const sendMail = async (Task: any) => {
    try {
        const accessToken: any = (await oAuth.getAccessToken()).token

        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "codelabbest@gmail.com",
                clientId: ID,
                clientSecret: SECRET,
                refreshToken: REFRESH,
                accessToken
            }
        })


        const data = {
            assignee: Task.assignee
        }

        const myPath = path.join(__dirname, "./index.ejs")

        const html = await ejs.renderFile(myPath, { data })




        const mailer = {
            to: Task.assignee,
            from: "codelabbest@gmail.com",
            subject: "account opening",
            html
        }

        await transport.sendMail(mailer).then((res) => {
            console.log("sent")
        })
    } catch (error) {
        return error
    }
}