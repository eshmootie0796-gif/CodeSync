"use client"

import { useSession } from "next-auth/react"
import { useParams } from "next/navigation"
import Link from "next/link"
import {
    ArrowLeft,
    Star,
    GitFork,
    ExternalLink,
    Code2,
    Calendar,
} from "lucide-react"
import useGithubRepos from "@/hooks/github/useGithubRepos"

function ProjectDetails() {
    const { data: session } = useSession()
    const { id } = useParams()
    const username = session?.user?.username

    const {
        data: projects = [],
        isLoading,
    } = useGithubRepos(username)

    const project = projects.find(
        (project) => project.id.toString() === id
    )

    if (isLoading) {
        return (
            <div className="min-h-screen p-6 lg:p-8">
                <div className="space-y-6 animate-pulse">
                    <div className="h-8 w-32 rounded-lg bg-emerald-500/10" />
                    <div className="h-12 w-72 rounded-lg bg-emerald-500/10" />
                    <div className="h-24 w-full rounded-2xl bg-emerald-500/10" />

                    <div className="grid gap-5 md:grid-cols-3">
                        <div className="h-28 rounded-2xl bg-emerald-500/10" />
                        <div className="h-28 rounded-2xl bg-emerald-500/10" />
                        <div className="h-28 rounded-2xl bg-emerald-500/10" />
                    </div>
                </div>
            </div>
        )
    }

    if (!project) {
        return (
            <div className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-center">
                <h1 className="text-2xl font-bold">
                    Project not found
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    We couldn't find this repository.
                </p>

                <Link
                    href="/projects"
                    className="mt-6 flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-600"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Projects
                </Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen px-5 pb-10 lg:py-5">
            <Link
                href="/projects"
                className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-emerald-500"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
            </Link>
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

                <div className="flex gap-7 min-w-0">
                    <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-500/10">
                        <Code2 className="h-15 w-15 text-emerald-500" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">
                            {project.name}
                        </h1>

                        <p className="mt-2 max-w-2xl text-muted-foreground">
                            {project.description || "No description provided."}
                        </p>
                    </div>
                </div>

                <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-fit items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-500/5 px-4 py-2 text-sm font-medium transition hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-emerald-500"
                >
                    View on GitHub
                    <ExternalLink className="h-4 w-4" />
                </a>
            </div>

            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl border border-emerald-400/20 bg-background p-5 transition hover:border-emerald-400/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.08)]">
                    <div className="mb-3 flex items-center gap-2 text-muted-foreground">
                        <Star className="h-4 w-4 text-emerald-500" />
                        <span className="text-sm">
                            Stars
                        </span>
                    </div>

                    <p className="text-2xl font-bold">
                        {project.stargazers_count}
                    </p>
                </div>

                <div className="rounded-2xl border border-emerald-400/20 bg-background p-5 transition hover:border-emerald-400/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.08)]">
                    <div className="mb-3 flex items-center gap-2 text-muted-foreground">
                        <GitFork className="h-4 w-4 text-emerald-500" />
                        <span className="text-sm">
                            Forks
                        </span>
                    </div>

                    <p className="text-2xl font-bold">
                        {project.forks_count}
                    </p>
                </div>

                <div className="rounded-2xl border border-emerald-400/20 bg-background p-5 transition hover:border-emerald-400/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.08)]">
                    <div className="mb-3 flex items-center gap-2 text-muted-foreground">
                        <Code2 className="h-4 w-4 text-emerald-500" />
                        <span className="text-sm">
                            Language
                        </span>
                    </div>

                    <p className="text-lg font-semibold">
                        {project.language || "Not specified"}
                    </p>
                </div>

                <div className="rounded-2xl border border-emerald-400/20 bg-background p-5 transition hover:border-emerald-400/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.08)]">
                    <div className="mb-3 flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4 text-emerald-500" />
                        <span className="text-sm">
                            Updated
                        </span>
                    </div>

                    <p className="text-sm font-semibold">
                        {new Date(
                            project.updated_at
                        ).toLocaleDateString()}
                    </p>
                </div>
            </div>
            <section className="mb-6 rounded-2xl border border-emerald-400/20 bg-background p-6 transition hover:border-emerald-400/30">
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">
                        Technology Stack
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Technologies used in this repository
                    </p>
                </div>

                {project.language ? (
                    <span className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-500">
                        {project.language}
                    </span>
                ) : (
                    <p className="text-sm text-muted-foreground">
                        No language information available.
                    </p>
                )}
            </section>
            <section className="mb-6 rounded-2xl border border-emerald-400/20 bg-background p-6 transition hover:border-emerald-400/30">
                <h2 className="text-lg font-semibold">
                    Comments
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                    Discuss this project with your team.
                </p>

                <div className="mt-5 rounded-xl border border-dashed border-emerald-400/20 bg-emerald-500/2 p-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        No comments yet
                    </p>
                </div>
            </section>
            <section className="rounded-2xl border border-emerald-400/20 bg-background p-6 transition hover:border-emerald-400/30">
                <h2 className="text-lg font-semibold">
                    Activity
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                    Recent activity for this project.
                </p>

                <div className="mt-5 rounded-xl border border-dashed border-emerald-400/20 bg-emerald-500/2 p-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        No activity yet
                    </p>
                </div>
            </section>
        </div>
    )
}

export default ProjectDetails