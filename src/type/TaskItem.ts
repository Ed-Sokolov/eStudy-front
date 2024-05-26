import { type TAuthor } from "./Author";
import { type TInfo } from "./Info";

export type TTaskItem = {
    id: number
    name: string
    date: string
    author: TAuthor
    room: TInfo
    type: TInfo
    status: TInfo
}