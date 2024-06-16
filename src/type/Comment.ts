import { type TAuthor } from "./Author";

export type TComment = {
    id: number
    content: string
    date: string

    author: TAuthor
}