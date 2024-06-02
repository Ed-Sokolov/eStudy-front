import { type TSelectOption } from "../select/Option";

export type TEditRoom = {
    id: number
    name: string
    students: TSelectOption[]
}