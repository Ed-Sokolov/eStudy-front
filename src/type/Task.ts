import { type TAuthor } from "./Author";
import { type TInfo } from "./Info";

type TAttachment = {
    id: number
    original_name: string
    url: string
    type: 'image' | 'doc' | 'pdf' | 'archive' | 'text' | 'excel' | 'point'
}

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