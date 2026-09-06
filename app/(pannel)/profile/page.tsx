"use client"

import { ExternalLink, Users, UserPlus, InboxIcon, MapPin, Link, Building2, Calendar, Star, GitFork, } from "lucide-react"
import useCurrentUser from "@/hooks/session/useCurrentUser"
import useGithubUser from "@/hooks/github/useGithubUser"
import useGithubRepos from "@/hooks/github/useGithubRepos"
import { FaGithub } from "react-icons/fa"

function Profile() {
    const { user, loading: sessionLoading } = useCurrentUser()
    const username = user?.username
    const { data: githubUser, isLoading: githubLoading, isError: userError } = useGithubUser(username)
    const { data: repos, isLoading: reposLoading } = useGithubRepos(username)

    if (sessionLoading || githubLoading) {
        return (
            <div className="min-h-screen px-5 pb-10 pt-5">
                <div className="mx-auto max-w-6xl animate-pulse">
                    <div className="mb-6">
                        <div className="h-8 w-28 rounded-lg bg-zinc-200 dark:bg-white/10" />
                        <div className="mt-2 h-4 w-72 rounded bg-zinc-200 dark:bg-white/10" />
                    </div>
                    <div className="flex flex-col gap-5 md:flex-row">
                        <div className="h-30 w-30 shrink-0 rounded-full bg-zinc-200 dark:bg-white/10" />
                        <div className="min-w-0 flex-1 space-y-3">
                            <div className="h-7 w-52 rounded bg-zinc-200 dark:bg-white/10" />
                            <div className="h-4 w-32 rounded bg-zinc-200 dark:bg-white/10" />
                            <div className="h-4 w-full max-w-2xl rounded bg-zinc-200 dark:bg-white/10" />
                            <div className="h-4 w-3/4 max-w-xl rounded bg-zinc-200 dark:bg-white/10" />
                            <div className="flex gap-4 pt-2">
                                <div className="h-4 w-24 rounded bg-zinc-200 dark:bg-white/10" />
                                <div className="h-4 w-28 rounded bg-zinc-200 dark:bg-white/10" />
                                <div className="h-4 w-20 rounded bg-zinc-200 dark:bg-white/10" />
                            </div>
                        </div>
                        <div className="h-9 w-24 rounded-lg bg-zinc-200 dark:bg-white/10" />
                    </div>
                    <div className="my-6 h-px bg-zinc-200 dark:bg-white/10" />
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-3"
                            >
                                <div className="h-7 w-7 rounded-lg bg-zinc-200 dark:bg-white/10" />
                                <div className="space-y-2">
                                    <div className="h-5 w-12 rounded bg-zinc-200 dark:bg-white/10" />
                                    <div className="h-3 w-20 rounded bg-zinc-200 dark:bg-white/10" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <section className="mt-8">
                        <div className="mb-5">
                            <div className="h-6 w-52 rounded bg-zinc-200 dark:bg-white/10" />
                            <div className="mt-2 h-4 w-72 rounded bg-zinc-200 dark:bg-white/10" />
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {[1, 2, 3, 4].map((item) => (
                                <div
                                    key={item}
                                    className="h-36 rounded-2xl bg-zinc-200 dark:bg-white/10"
                                />
                            ))}
                        </div>
                    </section>

                </div>
            </div>
        )
    }
    if (!githubUser || userError) {
        return (
            <div className="flex min-h-[70vh] items-center justify-center">
                <div className="text-center">
                    <FaGithub className="mx-auto h-12 w-12 text-emerald-500" />
                    <h1 className="mt-4 text-2xl font-bold">Unable to load profile</h1>
                    <p className="mt-2 text-muted-foreground">Please try again later.</p>
                </div>
            </div>
        )
    }
    const createdAt = githubUser.created_at
        ? new Date(githubUser.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long" }) : null
    const popularRepos = [...(repos ?? [])].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6)

    return (
        <div className="min-h-screen px-5 pb-10 pt-5 lg:py-5">
            <div className="w-full max-w-6xl">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
                    <p className="mt-1 text-sm text-muted-foreground">Your GitHub profile and popular repositories.</p>
                </div>
                <div className="flex flex-col gap-5 md:flex-row">
                    <img
                        src={githubUser.avatar_url}
                        alt={githubUser.login}
                        className="h-30 w-30 shrink-0 rounded-full object-cover"
                    />
                    <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <h2 className="text-2xl font-bold">{githubUser.name || githubUser.login}</h2>
                                <p className="mt-0.5 text-sm text-emerald-500">@{githubUser.login}</p>
                                {githubUser.bio && (
                                    <p className="mt-3 max-w-2xl text-sm leading-5 text-muted-foreground">{githubUser.bio}</p>
                                )}
                            </div>
                            <a
                                href={githubUser.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex w-fit shrink-0 items-center gap-2 rounded-lg border border-emerald-500/20 px-3 py-1.5 text-sm font-medium transition hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
                            >
                                <FaGithub className="h-4 w-4" />
                                GitHub
                                <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                            {githubUser.company && (
                                <span className="flex items-center gap-1.5">
                                    <Building2 className="h-3.5 w-3.5 text-emerald-500" />
                                    {githubUser.company}
                                </span>
                            )}
                            {githubUser.location && (
                                <span className="flex items-center gap-1.5">
                                    <MapPin className="h-3.5 w-3.5 text-emerald-500" />
                                    {githubUser.location}
                                </span>
                            )}
                            {githubUser.blog && (
                                <a
                                    href={githubUser.blog.startsWith("http") ? githubUser.blog : `https://${githubUser.blog}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-1.5 transition hover:text-emerald-500"
                                >
                                    <Link className="h-3.5 w-3.5 text-emerald-500" />
                                    Website
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <div className="my-6 h-px bg-zinc-200 dark:bg-white/10" />
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="flex items-center gap-3">
                        <InboxIcon className="h-7 w-7 text-emerald-500" />
                        <div>
                            <p className="text-lg font-semibold">{githubUser.public_repos}</p>
                            <p className="text-xs text-muted-foreground">Repositories</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Users className="h-7 w-7 text-emerald-500" />
                        <div>
                            <p className="text-lg font-semibold">{githubUser.followers}</p>
                            <p className="text-xs text-muted-foreground">Followers</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <UserPlus className="h-7 w-7 text-emerald-500" />
                        <div>
                            <p className="text-lg font-semibold">{githubUser.following} </p>
                            <p className="text-xs text-muted-foreground"> Following</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Calendar className="h-7 w-7 text-emerald-500" />
                        <div>
                            <p className="text-sm font-semibold">{createdAt || "—"} </p>
                            <p className="text-xs text-muted-foreground">Joined</p>
                        </div>
                    </div>
                </div>
                <section className="mt-8">
                    <div className="mb-5">
                        <h2 className="text-xl font-semibold">
                            Popular Repositories
                        </h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Your most starred GitHub repositories.
                        </p>
                    </div>
                    {reposLoading ? (
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {[1, 2, 3, 4].map((item) => (
                                <div
                                    key={item}
                                    className="h-36 animate-pulse rounded-2xl bg-zinc-100 dark:bg-white/5"
                                />
                            ))}
                        </div>
                    ) : popularRepos.length === 0 ? (
                        <p className="text-sm text-muted-foreground">No repositories found.</p>
                    ) : (
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {popularRepos.map((repo) => (
                                <a
                                    key={repo.id}
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group rounded-2xl border border-zinc-200 p-5 transition hover:border-emerald-500/40 dark:border-white/10 dark:hover:border-emerald-500/40"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="min-w-0">
                                            <h3 className="truncate font-semibold transition group-hover:text-emerald-500">
                                                {repo.name}
                                            </h3>
                                            <p className="mt-2 line-clamp-2 text-sm leading-5 text-muted-foreground">
                                                {repo.description ||
                                                    "No description available."}
                                            </p>
                                        </div>
                                        <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-emerald-500" />
                                    </div>
                                    <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                                        {repo.language && (
                                            <span className="flex items-center gap-1.5">
                                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                                                {repo.language}
                                            </span>
                                        )}
                                        <span className="flex items-center gap-1">
                                            <Star className="h-3.5 w-3.5" />
                                            {repo.stargazers_count}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <GitFork className="h-3.5 w-3.5" />
                                            {repo.forks_count}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    )
}

export default Profile