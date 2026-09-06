'use client'

import { Lightbulb, Lock } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Image from "next/image"

function About() {
    const { resolvedTheme } = useTheme()
    const isDark = resolvedTheme === "dark"
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <section className="py-28">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="h-137.5 rounded-3xl animate-pulse bg-slate-200 dark:bg-slate-800" />
                </div>
            </section>
        )
    }

    return (
        <section className="relative overflow-hidden py-15 transition-colors">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,.08),transparent_45%)]" />
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">
                <div>
                    <div className="mb-6 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        About CodeSync
                    </div>
                    <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                        The Workspace <br />
                        Developers Love {" "}
                        <span className="text-emerald-500">
                            ♡
                        </span>
                    </h2>
                    <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                        CodeSync combines GitHub, project management,
                        task tracking and your developer portfolio into
                        one elegant workspace designed to help you build
                        faster and stay organized.
                    </p>
                    <div className="my-10 h-px w-full bg-linear-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />
                    <div className="space-y-5">
                        <FeatureCard
                            icon={<FaGithub size={24} />}
                            title="GitHub Integration"
                            description="Sync repositories, contributions and profile insights automatically."
                        />
                        <FeatureCard
                            icon={<Lightbulb size={24} />}
                            title="Smart Workspace"
                            description="Manage projects, notes and tasks inside one unified dashboard."
                        />
                        <FeatureCard
                            icon={<Lock size={24} />}
                            title="Secure Cloud Sync"
                            description="Your preferences and workspace stay securely synchronized."
                        />
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 rounded-[40px] bg-emerald-500/20 blur-[120px]" />

                    <div
                        className="relative overflow-hidden rounded-4xl
                        border border-slate-200 dark:border-white/10
                        bg-white/40 dark:bg-slate-900/40
                        backdrop-blur-xl
                        shadow-[0_25px_80px_rgba(16,185,129,.18)]"
                    >
                        <Image
                            src={isDark ? "/Dark About.png" : "/Light About.png"}
                            alt="About"
                            width={900}
                            height={700}
                            className="w-full transition duration-500 hover:scale-[1.015]"
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About


function FeatureCard({icon, title, description}: 
    {icon: React.ReactNode 
    title: string
    description: string}) {
    return (
        <div
            className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md py-5 px-3
            transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-xl"
        >
            <div className="flex gap-3">
                <div
                    className=" flex h-12 w-12 p-3 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 transition group-hover:scale-110"
                >
                    {icon}
                </div>
                <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{description}</p>
                </div>

            </div>

        </div>
    )
}