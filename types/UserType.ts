export interface User {
    login: string
    id: number
    avatar_url: string
    html_url: string
    name: string | null
    bio: string | null
    company: string | null
    location: string | null
    blog: string
    twitter_username: string | null
    public_repos: number
    followers: number
    following: number
    created_at: string
    followers_url: string
    following_url: string
    starred_url: string
    repos_url: string
}
