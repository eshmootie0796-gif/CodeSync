export interface Event {
    id: string
    type: string
    actor: {
        login: string
        avatar_url: string
    }
    repo: {
        name: string
    }
    created_at: string
    payload: {
        action?: string
        ref?: string
        ref_type?: string
        commits?: {
            sha: string
            message: string
        }[]
        number?: number
        issue?: {
            number: number
            title: string
            html_url: string
        }
        pull_request?: {
            number: number
            title: string
            html_url: string
        }
        release?: {
            tag_name: string
            name: string
            html_url: string
        }
    }
}