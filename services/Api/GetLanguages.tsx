import { Languages } from "@/types/LanguagesType"

async function getRepoLanguages(owner: string, repo: string): Promise<Languages> {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`)

    if (!response.ok) {
        throw new Error("Failed to fetch repository languages")
    }

    return response.json()
}

export default getRepoLanguages