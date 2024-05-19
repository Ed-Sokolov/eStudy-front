export type TCreateRoom = {
    name: string
    user_id: number
    people: (string | number)[]
}