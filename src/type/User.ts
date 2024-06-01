export type TUser = {
    id: number
    name: string
    email: string
    role: 'administrator' | 'teacher' | 'student' | null
}