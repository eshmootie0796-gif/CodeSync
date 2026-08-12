import { Repo } from "@/types/RepoType"

async function getRepoLanguages(username: string): Promise<Repo> {
    const response = await fetch(`https://api.github.com/users/${username}/repos`)

    if (!response.ok) {
        throw new Error("Failed to fetch repositories")
    }

    return response.json()
}

export default getRepoLanguages