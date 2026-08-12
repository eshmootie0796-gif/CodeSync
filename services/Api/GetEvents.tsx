import { Event } from "@/types/EventsType"

async function getEvents(username: string): Promise<Event[]> {
    const events: Event[] = []

    for (let page = 1; page <= 3; page++) {
        const response = await fetch(
            `https://api.github.com/users/${username}/events?per_page=100&page=${page}`
        )
        if (!response.ok) {
            throw new Error("Failed to fetch events")
        }
        const data: Event[] = await response.json()
        events.push(...data)

        if (data.length < 100) {
            break
        }
    }

    return events
}

export default getEvents