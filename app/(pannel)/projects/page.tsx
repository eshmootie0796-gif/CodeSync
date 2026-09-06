"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { Search } from "lucide-react"
import useGithubRepos from "@/hooks/github/useGithubRepos"
import ProjectCard from "@/app/(pannel)/components/ProjectCard"
import languages from "language-map"
import FilterSelect from "../components/SelectBox"
import { FaGithub } from "react-icons/fa"

function Projects() {
    const { data: session } = useSession()
    const username = session?.user?.username
    const { data: projects = [], isLoading, isError } = useGithubRepos(username)
    const [input, setInput] = useState("")
    const [sortBy, setSortBy] = useState("name")
    const [language, setLanguage] = useState("All")

    const filteredProjects = [...projects]
        .filter((project) => {
            const query = input.toLowerCase().trim()
            const matchesSearch =
                !query ||
                project.name.toLowerCase().includes(query) ||
                project.description?.toLowerCase().includes(query) === true ||
                project.language?.toLowerCase().includes(query) === true
            const matchesLanguage =
                language === "All" ||
                project.language === language
            return matchesSearch && matchesLanguage
        })
        .sort((a, b) => {
            if (sortBy === "name") {
                return a.name.localeCompare(b.name)
            }
            if (sortBy === "stars") {
                return b.stargazers_count - a.stargazers_count
            }
            if (sortBy === "date") {
                return (
                    new Date(b.updated_at).getTime() -
                    new Date(a.updated_at).getTime()
                )
            }

            return 0
        })

    if (isError) {
        return (
            <div className="flex min-h-[70vh] items-center justify-center">
                <div className="text-center">
                    <FaGithub className="mx-auto h-12 w-12 text-emerald-500" />
                    <h1 className="mt-4 text-2xl font-bold"> Unable to load projects</h1>
                    <p className="mt-2 text-muted-foreground"> Please try again later.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen px-5 pt-2 pb-5 lg:py-5">
            <div className="mb-8 flex flex-col justify-between">
                <div className="mb-4 lg:mb-7">
                    <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
                    <p className="mt-1 text-sm text-muted-foreground">Your GitHub repositories.</p>
                </div>
                <div className="mt-5 flex w-full flex-col gap-5 lg:mt-0 lg:flex-row lg:items-center lg:gap-3">
                    <div className="flex h-11 w-full min-w-0 items-center rounded-xl border border-emerald-400/30 bg-white/70 px-3 shadow-[0_0_25px_rgba(16,185,129,0.06)] backdrop-blur-xl transition focus-within:border-emerald-400/60 focus-within:ring-2 focus-within:ring-emerald-500/20 dark:bg-slate-900/70">
                        <Search className="h-4 w-4 shrink-0 text-emerald-500" />
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Looking for your projects?"
                            className="h-full w-full bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground"
                        />
                    </div>
                    <div className="flex gap-5">
                        <FilterSelect
                            value={sortBy}
                            options={["name", "stars", "date"]}
                            onChange={setSortBy}
                        />
                        <FilterSelect
                            value={language}
                            options={["All", ...Object.keys(languages)]}
                            onChange={setLanguage}
                            searchable
                        />
                    </div>
                </div>
            </div>
            {isLoading && (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div
                            key={item}
                            className="h-44 animate-pulse rounded-2xl border bg-muted/40"
                        />
                    ))}
                </div>
            )}
            {!isLoading && filteredProjects.length > 0 && (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            )}
            {!isLoading && filteredProjects.length === 0 && (
                <div className="flex h-100 items-center justify-center rounded-2xl border border-dashed border-emerald-400/20 bg-emerald-500/2 lg:h-130">
                    <div className="text-center">
                        <p className="font-medium"> No projects found</p>
                        <p className="mt-1 text-sm text-muted-foreground"> Try searching for another project.</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Projects
