import { Star, GitFork, Code2 } from "lucide-react"
import Link from "next/link"
import type { Repo } from "@/types/RepoType"

interface ProjectCardProps {
    project: Repo
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div
            className="group relative flex min-h-52 w-full flex-col overflow-hidden rounded-3xl border border-emerald-400/40  p-7 shadow-[0_0_50px_rgba(16,185,129,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/60 hover:shadow-[0_0_50px_rgba(16,185,129,0.18)] lg:my-10"
        >
            <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10">
                        <Code2 className="h-5 w-5 text-emerald-500" />
                    </div>
                    <h2 className="mt-2 truncate text-lg font-semibold">{project.name}</h2>
                </div>
            </div>

            <p className="mt-3 min-h-10 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {project.description ||
                    "No description provided for this repository."}
            </p>

            <div className="mt-auto flex items-center justify-between border-t border-emerald-400/20 pt-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    {project.language && (
                        <span className="flex items-center gap-1.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                            <span>{project.language}</span>
                        </span>
                    )}

                    <span className="flex items-center gap-1.5">
                        <Star className="h-4 w-4 text-emerald-500" />
                        {project.stargazers_count}
                    </span>

                    <span className="flex items-center gap-1.5">
                        <GitFork className="h-4 w-4 text-emerald-500" />
                        {project.forks_count}
                    </span>
                </div>

                <Link
                    href={`/projects/${project.id}`}
                    className="text-sm font-medium text-emerald-500 transition hover:text-emerald-600 hover:underline"
                >
                    Details
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard
