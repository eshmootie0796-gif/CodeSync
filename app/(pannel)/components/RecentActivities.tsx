"use client"

import { useSession } from "next-auth/react"
import useGithubEvents from "@/hooks/github/useGithubEvents"
import { getEventMessage } from "@/utils/githubEvents"
import { formatDistanceToNow } from "date-fns"
import {
    GitPullRequest,
    GitCommit,
    Star,
    CircleDot,
    GitFork,
    Rocket,
    GitBranch,
    MessageCircle,
    BookOpen,
    Users,
    Globe,
    HandCoins,
} from "lucide-react"
import Link from "next/link"

function RecentActivities() {
    const { data: session } = useSession()
    const username = session?.user?.username

    const { data: events, isLoading } = useGithubEvents(username)

    const getEventIcon = (type: string) => {
    switch (type) {
        case "PushEvent":
            return <GitCommit className="h-4 w-4" />

        case "PullRequestEvent":
            return <GitPullRequest className="h-4 w-4" />

        case "PullRequestReviewEvent":
        case "PullRequestReviewCommentEvent":
            return <MessageCircle className="h-4 w-4" />

        case "CommitCommentEvent":
        case "IssueCommentEvent":
            return <MessageCircle className="h-4 w-4" />

        case "IssuesEvent":
            return <CircleDot className="h-4 w-4" />

        case "DiscussionEvent":
            return <MessageCircle className="h-4 w-4" />

        case "ForkEvent":
            return <GitFork className="h-4 w-4" />

        case "WatchEvent":
            return <Star className="h-4 w-4" />

        case "CreateEvent":
        case "DeleteEvent":
            return <GitBranch className="h-4 w-4" />

        case "GollumEvent":
            return <BookOpen className="h-4 w-4" />

        case "MemberEvent":
            return <Users className="h-4 w-4" />

        case "PublicEvent":
            return <Globe className="h-4 w-4" />

        case "ReleaseEvent":
            return <Rocket className="h-4 w-4" />

        case "SponsorshipEvent":
            return <HandCoins className="h-4 w-4" />

        default:
            return <GitCommit className="h-4 w-4" />
    }
}

    return (
        <div
            className="group h-140 relative overflow-hidden my-10 w-full  rounded-3xl border bg-white/70 dark:bg-slate-900/70
            backdrop-blur-xl p-7 border-emerald-400/40 shadow-[0_0_50px_rgba(16,185,129,0.12)]"
        >
            <div className="mb-5">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Recent Activities
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Your latest GitHub activity
                </p>
            </div>

            {isLoading && (
                <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div
                            key={item}
                            className="flex items-center gap-8 animate-pulse"
                        >
                            <div className="h-9 w-9 rounded-xl bg-slate-200 dark:bg-slate-800" />

                            <div className="flex-1 space-y-2">
                                <div className="h-3 w-40 rounded bg-slate-200 dark:bg-slate-800" />
                                <div className="h-2.5 w-28 rounded bg-slate-200 dark:bg-slate-800" />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!isLoading && (
                <div>
                    {events?.slice(0, 5).map((event, index) => (
                        <div
                            key={event.id}
                            className={`group/activity flex items-start gap-4 px-2 py-3 transition-all
                            hover:bg-emerald-400/4
                            ${index !== 0
                                    ? "border-t border-slate-200/70 dark:border-slate-700/50"
                                    : ""
                                }`}
                        >
                            <div
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl
                                bg-emerald-400/10 border border-emerald-400/10 text-emerald-500
                                transition-all duration-200 group-hover/activity:bg-emerald-400/20
                                group-hover/activity:border-emerald-400/20 group-hover/activity:scale-105"
                            >
                                {getEventIcon(event.type)}
                            </div>

                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-slate-800 dark:text-slate-100">
                                    {getEventMessage(event)}
                                </p>

                                <p className="mt-1 truncate text-xs text-slate-500 dark:text-slate-400">
                                    {event.repo.name}
                                </p>

                                <p className="mt-1 text-[11px] text-slate-400 dark:text-slate-500">
                                    {formatDistanceToNow(new Date(event.created_at), {
                                        addSuffix: true,
                                    })}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Empty */}
            {!isLoading && events?.length === 0 && (
                <div className="py-8 text-center">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        No recent activities
                    </p>
                </div>
            )}
        </div>
    )
}

export default RecentActivities