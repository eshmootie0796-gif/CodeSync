"use client"

import { LucideIcon } from "lucide-react"
import CountUp from "react-countup"

interface StatsCardProps {
    title: string
    amount?: number
    icon: LucideIcon
    description?: string
    loading?: boolean
    error?: boolean
}

function StatsCard({
    title,
    amount = 0,
    icon: Icon,
    description,
    loading = false,
    error = false,
}: StatsCardProps) {
    if (loading) {
        return (
            <div
                className="
                    relative h-full min-h-45flow-hidden
                    rounded-3xl border
                    border-emerald-400/40
                    p-4 sm:p-5 lg:p-6
                    shadow-[0_0_40px_rgba(16,185,129,0.12)]
                    backdrop-blur-xl
                "
            >
                <div className="animate-pulse">
                    <div className="h-10 w-10 rounded-2xl bg-emerald-400/10 sm:h-11 sm:w-11" />

                    <div className="mt-5 space-y-3 sm:mt-6">
                        <div className="h-4 w-24 rounded bg-zinc-200 dark:bg-white/10" />

                        <div className="h-9 w-20 rounded bg-zinc-200 dark:bg-white/10 sm:h-10" />

                        {description && (
                            <div className="h-3 w-32 rounded bg-zinc-200 dark:bg-white/10" />
                        )}
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div
                className="
                    relative h-full min-h-45 overflow-hidden
                    rounded-3xl border
                    border-red-400/30
                    p-4 sm:p-5 lg:p-6
                    shadow-[0_0_40px_rgba(239,68,68,0.08)]
                    backdrop-blur-xl
                "
            >
                <div className="relative">
                    <div
                        className="
                            flex h-10 w-10 items-center justify-center
                            rounded-2xl bg-red-500/10 text-red-500
                            sm:h-11 sm:w-11
                        "
                    >
                        <span className="text-xl font-bold">!</span>
                    </div>

                    <div className="mt-5 sm:mt-6">
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                            {title}
                        </p>

                        <p className="mt-2 text-sm text-red-500">
                            Failed to load
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div
            className="
                group relative h-full min-h-45 overflow-hidden
                rounded-3xl border
                border-emerald-400/40
                p-4 sm:p-5 lg:p-6
                shadow-[0_0_40px_rgba(16,185,129,0.12)]
                backdrop-blur-xl
                transition-all duration-300
            "
        >
            <div className="relative flex h-full flex-col">
                <div
                    className="
                        flex h-10 w-10 shrink-0 items-center justify-center
                        rounded-2xl bg-emerald-400/10 text-emerald-500
                        sm:h-11 sm:w-11
                    "
                >
                    <Icon size={21} />
                </div>

                <div className="mt-5 sm:mt-6">
                    <p
                        className="
                            truncate text-sm font-medium
                            text-slate-500 dark:text-slate-400
                        "
                    >
                        {title}
                    </p>

                    <CountUp
                        className="
                            mt-2 block
                            text-3xl font-bold tracking-tight
                            text-slate-900 dark:text-white
                            sm:text-4xl
                        "
                        end={amount}
                        duration={2}
                    />

                    {description && (
                        <p
                            className="
                                mt-2 line-clamp-2
                                text-xs text-slate-500
                                dark:text-slate-400
                            "
                        >
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default StatsCard
