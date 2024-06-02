import { type TAuthor } from "./Author";
import { type TSelectOption } from "./select/Option";

export type TRoom = {
    id: number
    name: string
    author: TAuthor
    students: TSelectOption[]
}