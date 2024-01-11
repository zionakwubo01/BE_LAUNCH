"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const googleapis_1 = require("googleapis");
const nodemailer_1 = __importDefault(require("nodemailer"));
const ID = "848542784186-9os7noa7qvcg3nckfu38s3bhob8u6oga.apps.googleusercontent.com";
const SECRET = "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";
const REFRESH = "1//04GgN8ydoI_ZdCgYIARAAGAQSNwF-L9IrKCOkFE95PncupZNTb3WCiygNcFb1vp20oW-1SMJTKzSWxnWw2B6nf4S85GXSTpgR44M";
const GOOGLE_URL = "https://developers.google.com/oauthplayground";
const ejs_1 = __importDefault(require("ejs"));
const path_1 = __importDefault(require("path"));
const oAuth = new googleapis_1.google.auth.OAuth2(ID, SECRET, GOOGLE_URL);
oAuth.setCredentials({ refresh_token: REFRESH });
const sendMail = (Task) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accessToken = (yield oAuth.getAccessToken()).token;
        const transport = nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "codelabbest@gmail.com",
                clientId: ID,
                clientSecret: SECRET,
                refreshToken: REFRESH,
                accessToken
            }
        });
        const data = {
            assignee: Task.assignee
        };
        const myPath = path_1.default.join(__dirname, "./index.ejs");
        const html = yield ejs_1.default.renderFile(myPath, { data });
        const mailer = {
            to: Task.assignee,
            from: "codelabbest@gmail.com",
            subject: "account opening",
            html
        };
        yield transport.sendMail(mailer).then((res) => {
            console.log("sent");
        });
    }
    catch (error) {
        return error;
    }
});
exports.sendMail = sendMail;
