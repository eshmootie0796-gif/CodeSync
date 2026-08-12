import { Event } from "@/types/EventsType"

export function getEventMessage(event: Event) {
    switch (event.type) {
        case "CommitCommentEvent":
            return "Commented on a commit"

        case "CreateEvent":
            return `Created a ${event.payload.ref_type ?? "resource"}`

        case "DeleteEvent":
            return `Deleted a ${event.payload.ref_type ?? "resource"}`

        case "DiscussionEvent":
            return `${event.payload.action ?? "Interacted with"} a discussion`

        case "ForkEvent":
            return "Forked a repository"

        case "GollumEvent":
            return "Updated a repository wiki"

        case "IssueCommentEvent":
            return `${event.payload.action ?? "Commented"} on an issue`

        case "IssuesEvent":
            return `${capitalize(event.payload.action ?? "Updated")} an issue`

        case "MemberEvent":
            return `${capitalize(event.payload.action ?? "Updated")} a repository member`

        case "PublicEvent":
            return "Made a repository public"

        case "PullRequestEvent":
            return `${capitalize(event.payload.action ?? "Updated")} a pull request`

        case "PullRequestReviewEvent":
            return `${capitalize(event.payload.action ?? "Submitted")} a pull request review`

        case "PullRequestReviewCommentEvent":
            return "Commented on a pull request review"

        case "PushEvent": {
            return "Pushed a commit"
        }

        case "ReleaseEvent":
            return `${capitalize(event.payload.action ?? "Published")} a release`

        case "SponsorshipEvent":
            return `${capitalize(event.payload.action ?? "Updated")} a sponsorship`

        case "WatchEvent":
            return "Starred a repository"

        default:
            return "Performed an activity"
    }
}

function capitalize(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1)
}