import { Status } from "../types/type"

export interface IUserData{
    email: string,
    password: string
}

export interface IInitialState{
    user: IUserData | null,
    status: Status
}