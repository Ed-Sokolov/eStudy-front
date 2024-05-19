import { type TAuthor } from "./Author";

type TInfo = {
    id: number
    name: string
}

export type TTaskItem = {
    id: number
    name: string
    date: string
    author: TAuthor
    room: TInfo
    type: TInfo
    status: TInfo
}