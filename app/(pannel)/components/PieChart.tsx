"use client"

import { Pie, PieChart } from "recharts"
import { ChartContainer, ChartLegend, ChartLegendContent, type ChartConfig } from "@/components/ui/chart"
import { useSession } from "next-auth/react"
import useGithubRepos from "@/hooks/github/useGithubRepos"

const colors = ["#047857", "#009966", "#50C878", "#00d492", "#6ee7b7"]

export function ChartPie() {
    const { data: session } = useSession()
    const username = session?.user?.username
    const { data: repos, isLoading, isError } = useGithubRepos(username)
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
            className="relative my-10 h-140 w-full overflow-hidden rounded-3xl border border-emerald-400/40 p-7 shadow-[0_0_50px_rgba(16,185,129,0.12)] backdrop-blur-xl"
        >
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white"> Language Distribution </h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400"> Languages used across your repositories</p>
            </div>

            {isLoading ? (
                <div className="flex h-105 flex-col items-center justify-center gap-8">
                    <div className="h-65 w-65 animate-pulse rounded-full border-30 border-emerald-500/10" />
                    <div className="flex gap-6">
                        <div className="h-4 w-20 animate-pulse rounded bg-zinc-200 dark:bg-white/10" />
                        <div className="h-4 w-20 animate-pulse rounded bg-zinc-200 dark:bg-white/10" />
                        <div className="h-4 w-20 animate-pulse rounded bg-zinc-200 dark:bg-white/10" />
                    </div>
                </div>
            ) : isError ? (
                <div className="flex h-105 flex-col items-center justify-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
                        <span className="text-2xl text-red-500">!</span>
                    </div>
                    <h3 className="mt-4 font-semibold"> Failed to load languages</h3>

                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">We couldn't load your repository data. Please try again later.</p>
                </div>
            ) : chartData.length === 0 ? (
                <div className="flex h-105 flex-col items-center justify-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                        <span className="text-2xl text-emerald-500"> ∅</span>
                    </div>
                    <h3 className="mt-4 font-semibold"> No language data </h3>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">No programming languages were found in your repositories.</p>
                </div>
            ) : (
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

                        <ChartLegend
                            content={
                                <ChartLegendContent nameKey="language" />
                            }
                            className="mt-10 flex-wrap justify-center gap-x-8 gap-y-2 text-[18px]"
                        />
                    </PieChart>
                </ChartContainer>
            )}
        </div>
    )
}