'use client'

import { LucideIcon } from "lucide-react"
import CountUp from "react-countup"

function StatsCard({ title, amount = 0, icon: Icon, description, }: { title: string, amount?: number, icon: LucideIcon, description?: string }) {
    return (
        <div
            className="group relative overflow-hidden rounded-3xl border bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl 
            p-6 transition-all duration-300 border-emerald-400/40 shadow-[0_0_40px_rgba(16,185,129,0.12)]"
        >
            <div className="relative">
                <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-500">
                    <Icon size={21} />
                </div>
                <div className="mt-6">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
                    <CountUp className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
                        end={amount}
                        duration={5}
                    />
                    {description && (
                        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{description}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default StatsCard