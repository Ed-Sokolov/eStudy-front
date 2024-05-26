export type TCreateTask = {
    name: string
    description: string
    author_id: number
    room_id: number
    status_id: number
    type_id: number
    attachments: File[]
}