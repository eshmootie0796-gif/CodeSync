'use client'

import { useTheme } from "next-themes"
import Link from "next/link"
import { useState, useEffect } from "react"

function HeroSection() {
    const { resolvedTheme } = useTheme()
    const isDark = resolvedTheme === "dark"
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-20">
                <div className="h-120 w-full rounded-3xl bg-slate-200/60 dark:bg-slate-800/60 animate-pulse" />
            </div>
        )
    }

    return (
        <section className="relative overflow-hidden bg-[#D3F3DC] dark:bg-[#172321] transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-6 py-9 sm:py-24 lg:px-8 lg:py-32">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
                    <div className="flex flex-col items-start gap-6 lg:col-span-6">
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl leading-[1.15]">
                            Your Entire Developer World, <span className="text-emerald-600 dark:text-emerald-400">Synced.</span>
                        </h1>

                        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 sm:text-xl">
                            The professional workspace for developers. Manage projects, track
                            GitHub activity, and showcase your skills in one unified dashboard.
                        </p>

                            <Link className="rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-emerald-500 transition-all focus-visible:outline-2 focus-visible:outline-emerald-600"
                            href="./login">
                                Get Started Free
                            </Link>
                            

                    </div>
                    <div className="relative lg:col-span-6">
                        <div className="relative overflow-hidden rounded-2xl border border-slate-900/10 dark:border-white/10 shadow-2xl">
                            <img
                                src={isDark ? '/Dark Hero.jpg' : '/Light Hero.jpg'}
                                alt="Dashboard Preview"
                                className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection