'use client'

import { FolderKanban, GitBranch, Users, UserPlus } from "lucide-react"
import StatsCard from "@/app/(pannel)/components/StatsCard"
import { useSession } from "next-auth/react"
import useGithubUser from "@/hooks/github/useGithubUser"
import { ChartPie } from "../components/PieChart"
import RecentActivities from "../components/RecentActivities"
import { useTaskStore } from "../../../store/tasksStore"
import { FaGithub } from "react-icons/fa"

function Dashboard() {
    const { data: session } = useSession()
    const username = session?.user?.username
    const { data: githubUser,isError } = useGithubUser(username)
    const tasks = useTaskStore((state) => state.tasks)

     if (!githubUser || isError) {
        return (
            <div className="flex min-h-[70vh] items-center justify-center">
                <div className="text-center">
                    <FaGithub className="mx-auto h-12 w-12 text-emerald-500" />
                    <h1 className="mt-4 text-2xl font-bold">Unable to load dashboard</h1>
                    <p className="mt-2 text-muted-foreground"> Please try again later.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-w-0 p-5">
            <div className="mb-5 lg:mb-8 mt-2 lg:mt-0 flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="mt-2 max-w-xl text-muted-foreground"> View your Github porfolio in one look.</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
                <StatsCard
                    title="Following"
                    amount={githubUser?.following}
                    icon={UserPlus}
                />
                <StatsCard
                    title="Follower"
                    amount={githubUser?.followers}
                    icon={Users}
                />
                <StatsCard
                    title="Projects"
                    amount={githubUser?.public_repos}
                    icon={GitBranch}
                />
                <StatsCard
                    title="Completed Tasks"
                    amount={tasks.length}
                    icon={FolderKanban}
                />
            </div>
            <div className="flex min-w-0 flex-col gap-3 lg:gap-10 lg:flex-row">
                <ChartPie />
                <RecentActivities />
            </div>

        </div>
    )
}

export default Dashboard