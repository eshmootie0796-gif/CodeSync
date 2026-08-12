'use client'

import { FolderKanban, GitBranch, Users, UserPlus } from "lucide-react"
import StatsCard from "@/components/Custome/StatsCard"
import { useSession } from "next-auth/react"
import useGithubUser from "@/hooks/github/useGithubUser"
import { ChartPie } from "../components/PieChart"
import RecentActivities from "../components/RecentActivities"

function Dashboard() {
    const { data: session } = useSession()
    const username = session?.user?.username
    const { data: githubUser } = useGithubUser(username)

    return (
        <div className="min-w-0 p-5">
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
                    amount={40}
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