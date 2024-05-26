import { type TAuthor } from "./Author";
import { type TInfo } from "./Info";
import { type TAttachment } from "./Attachment";

export type TTask = {
    id: number
    name: string
    content: string
    date: string
    author: TAuthor
    room: TInfo
    type: TInfo
    status: TInfo
    attachments: TAttachment[]
}