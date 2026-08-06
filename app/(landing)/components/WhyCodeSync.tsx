import {Table2, Layers, GitCommit } from "lucide-react"
import { FaGithub,FaChartPie } from "react-icons/fa"

function Why() {
    return (
        <section className="relative mx-auto max-w-7xl px-6 py-28">
            <div className="absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
            <div className="mx-auto max-w-3xl text-center">
                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
                    BUILT FOR DEVELOPERS
                </span>

                <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-6xl">
                    Why {" "}
                    <span className="bg-linear-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent">
                        CodeSync {" "}
                    </span>
                    ?
                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                    Everything developers need to build, track and showcase
                    their work.
                </p>
            </div>

            <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                <Card
                    icon={<FaGithub size={34} />}
                    title="GitHub Intelligence"
                    description="Connect your GitHub profile and showcase repositories, contributions and coding activity."
                />

                <Card
                    icon={<Layers size={34} />}
                    title="Project Workspace"
                    description="Organize projects, technologies, progress and development workflow in one place."
                />
                <Card
                    icon={<FaChartPie size={34} />}
                    title="Developer Analytics"
                    description="Track your growth, skills, repositories and coding achievements."
                />
                <Card
                    icon={<Table2 size={34} />}
                    title="Smart Task Management"
                    description="Manage your development tasks with a simple Kanban workflow."
                />
            </div>
        </section>
    )
}

export default Why

function Card({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode
    title: string
    description: string
}) {
    return (
        <div
            className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            dark:border-white/10
            bg-white/70
            dark:bg-slate-900/70
            backdrop-blur-xl
            p-8
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-emerald-400/40
            hover:shadow-[0_0_50px_rgba(16,185,129,0.18)]
        "
        >
            <div
                className="
                absolute
                inset-0
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
                bg-linear-to-br
                from-emerald-500/5
                via-transparent
                to-emerald-400/5
            "
            />
            <div className="relative">
                <div
                    className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-linear-to-br
                    from-emerald-400/20
                    to-emerald-600/10
                    text-emerald-400
                    ring-1
                    ring-emerald-500/20
                    transition-transform
                    duration-300
                    group-hover:scale-110
                "
                >
                    {icon}
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900 dark:text-white">
                    {title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                    {description}
                </p>
            </div>
        </div>
    )
}