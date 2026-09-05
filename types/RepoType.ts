export interface Repo {
    id: number
    name: string
    full_name: string
    html_url: string
    forks_count: number
    stargazers_count: number
    description: string | null
    language: string | null
    private: boolean
    updated_at:string
}