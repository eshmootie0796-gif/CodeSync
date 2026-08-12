export interface Repo {
    id: number
    name: string
    full_name: string
    html_url: string
    description: string | null
    language: string | null
    private: boolean
}