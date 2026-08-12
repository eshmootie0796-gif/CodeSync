"use client"

import { Pie, PieChart } from "recharts"
import { ChartContainer, ChartLegend, ChartLegendContent, type ChartConfig } from "@/components/ui/chart"
import { useSession } from "next-auth/react"
import useGithubRepos from "@/hooks/github/useGithubRepos"

const colors = [
    "#047857",
    "#009966",
    "#50C878",
    "#00d492",
    "#6ee7b7",
]



export function ChartPie() {
    const { data: session } = useSession()
    const username = session?.user?.username
    const { data: repos } = useGithubRepos(username)

    const languageCount: Record<string, number> = {}

    repos?.forEach((repo) => {
        if (repo.language) {
            languageCount[repo.language] =
                (languageCount[repo.language] || 0) + 1
        }
    })

    const chartData = Object.entries(languageCount).map(
        ([language, count], index) => ({
            language,
            count,
            fill: colors[index % colors.length],
        })
    )

    const chartConfig = chartData.reduce((config, item) => {
        config[item.language] = {
            label: item.language,
            color: item.fill,
        }

        return config
    }, {} as ChartConfig)

    return (
        <div
            className="group h-140 relative overflow-hidden my-10 w-full rounded-3xl border bg-white/70 dark:bg-slate-900/70
            backdrop-blur-xl p-7 border-emerald-400/40 shadow-[0_0_50px_rgba(16,185,129,0.12)]">
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Language Distribution </h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Languages used across your repositories</p>
            </div>
            <ChartContainer
                config={chartConfig}
                className="mx-auto h-100 w-full max-w-105"
            >
                <PieChart className="mt-5">
                    <Pie
                        data={chartData}
                        dataKey="count"
                        nameKey="language"
                        innerRadius={95}
                        outerRadius={145}
                        paddingAngle={3}
                        strokeWidth={0}
                    />
                    <ChartLegend content={<ChartLegendContent nameKey="language" />}
                        className="mt-10 text-[18px] flex-wrap justify-center gap-x-8 gap-y-2"
                    />
                </PieChart>
            </ChartContainer>
        </div>
    )

}
