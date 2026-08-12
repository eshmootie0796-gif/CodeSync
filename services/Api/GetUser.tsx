import { User } from '@/types/UserType'

async function getUser(username: string): Promise<User> {
    const response = await fetch(`https://api.github.com/users/${username}`)

    if (!response.ok) {
        throw new Error('Failed to fetch user!')
    }

    return response.json()

}

export default getUser