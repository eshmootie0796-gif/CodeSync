"use client"

import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa6";

export default function LoginPage() {
    return (
        <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-slate-950">
            <section className="relative flex flex-col justify-center px-8  lg:px-20 overflow-hidden">
                <div className="absolute top-10 left-20 h-72 w-72 rounded-full bg-emerald-200/30 dark:bg-emerald-400/20 blur-3xl" />
                <div className="relative z-10 max-w-xl">
                    <h1 className="text-5xl font-bold leading-tight text-slate-900 dark:text-white ">
                        Your GitHub,
                        <br />
                        beautifully organized
                        <span className="text-emerald-500">.</span>
                    </h1>
                    <p className="mt-6 text-lg leading-relaxed text-slate-500 dark:text-slate-400">
                        Sign in with GitHub to access your repositories, contributions, projects, and developer insights in one powerful workspace.
                    </p>
                    <div className="flex flex-col mt-10 gap-6">
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white">Repository Analytics</h3>
                            <p className=" mt-1 text-sm text-slate-500">Track performance and repository health.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white">Developer Insights</h3>
                            <p className=" mt-1 text-sm text-slate-500">Understand your coding activity.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative flex items-center justify-center px-8">
                <div className="absolute inset-0" />
                <div className="relative w-full max-w-md rounded-3xl border border-slate-200 dark:border-slate-800
                                bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-10 shadow-2xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white"> Welcome back</h2>
                        <p className="mt-3 text-slate-500"> Continue securely using your GitHub account.</p>
                    </div>
                    <div className="mt-8">
                        <button
                            onClick={() =>
                                signIn("github", {
                                    callbackUrl: "/dashboard"
                                })
                            }
                            className="w-full flex items-center justify-center gap-3 rounded-xl bg-slate-900 px-5 py-3 text-white font-medium transition
                                    hover:bg-slate-800 hover:-translate-y-0.5 shadow-lg cursor-pointer"
                        >
                            <FaGithub size={20} />
                            Continue with GitHub
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}
