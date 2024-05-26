export type TAttachment = {
    id: number
    original_name: string
    url: string
    type: 'image' | 'doc' | 'pdf' | 'archive' | 'text' | 'excel' | 'point'
}