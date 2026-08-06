import Link from "next/link"

function Cta() {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div
                    className="relative overflow-hidden rounded-[36px] border border-emerald-500/20 bg-linear-to-br
                     from-emerald-500/10 via-white to-emerald-500/5 dark:from-emerald-500/10 dark:via-slate-900
                    dark:to-emerald-500/5 px-8 py-15 text-center shadow-[0_20px_80px_rgba(16,185,129,.12)] transition-colors"
                >
                    <div className="absolute left-1/2 top-1/2 -z-10 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-[140px]" />
                    <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full border border-emerald-500/10" />
                    <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full border border-emerald-500/10" />
                    <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        Start Building Today
                    </div>
                    <h2 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                        Ready to build your{" "}
                        <span className="text-emerald-500">
                            developer workspace?
                        </span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                        Organize your GitHub profile, projects and tasks
                        in one beautiful dashboard designed for modern developers.
                    </p>
                    <div className="mt-10">
                        <Link
                            href="/login"
                            className="
                            inline-flex
                            items-center
                            rounded-xl
                            bg-emerald-600
                            px-8
                            py-4
                            text-base
                            font-semibold
                            text-white
                            shadow-lg
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:bg-emerald-500
                            hover:shadow-emerald-500/30
                            "
                        >
                            Get Started Free →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta