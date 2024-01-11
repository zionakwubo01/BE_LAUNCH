import { Document } from "mongoose";
import { HTTP } from "./enums";

export interface iPro {
    name: string;
    task: Array<{}>,
}

export interface iProdata extends iPro, Document { }


export interface iTask {
    name: string;
    assignee: string;
    deadline: string;
}

export interface iTaskdata extends iTask, Document { }
