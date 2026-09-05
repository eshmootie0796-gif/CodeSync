import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white mt-20 dark:border-slate-800 dark:bg-[#0F1720] transition-colors">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <h1
                            className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white"> Code <span className="text-emerald-500">Sync</span>
                        </h1>
                        <p className="mt-5 max-w-sm leading-7 text-slate-600 dark:text-slate-400">Your unified workspace for GitHub, projectmanagement and task tracking. Everything a developer needs in one elegant dashboard.</p>
                        <div className="mt-8 flex items-center gap-4">
                            <a
                                href="#"
                                className="rounded-xl border border-slate-200 p-3 text-slate-600 transition hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-700 dark:text-slate-400"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href="#"
                                className="rounded-xl border border-slate-200 p-3 text-slate-600 transition hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-700 dark:text-slate-400"
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a
                                href="#"
                                className="rounded-xl border border-slate-200 p-3 text-slate-600 transition hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-700 dark:text-slate-400"
                            >
                                <FaTwitter size={20} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">Product</h3>
                        <ul className="mt-5 space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400"
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400"
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400"
                                >
                                    Tasks
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">
                            Resources
                        </h3>
                        <ul className="mt-5 space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400"
                                >
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400"
                                >
                                    API
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400"
                                >
                                    Support
                                </a>
                            </li>

                        </ul>

                    </div>
                    <div>

                        <h3 className="font-semibold text-slate-900 dark:text-white">
                            Company
                        </h3>
                        <ul className="mt-5 space-y-3">

                            <li>
                                <a
                                    href="#"
                                    className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400"
                                >
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-500 md:flex-row">
                    <p> © 2026 CodeSync. All rights reserved.</p>
                    <p> Built with Next.js, TypeScript & Tailwind CSS </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer