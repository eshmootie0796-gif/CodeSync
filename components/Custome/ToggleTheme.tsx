'use client'

import { useTheme } from "next-themes"
import { MoonStar, Sun } from "lucide-react"
import { useState, useEffect } from "react"

function ToggleTheme() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative h-10 w-20 lg:h-11 lg:w-24 rounded-full border border-gray-200 bg-white p-1 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 cursor-pointer"
        >
            <div
                className={`absolute top-1 left-1 h-8 w-8 lg:h-9 lg:w-9 rounded-full bg-emerald-600 transition-transform duration-300 ${theme === "light"
                    ? "translate-x-10 lg:translate-x-12"
                    : ""
                    }`}
            />

            <div className="flex gap-2 lg:gap-3">
                <div
                    className={`z-10 flex h-8 w-8 lg:h-9 lg:w-9 items-center justify-center ${theme === "dark"
                        ? "text-white dark:text-zinc-900"
                        : "text-slate-800"
                        }`}
                >
                    <MoonStar size={16} />
                </div>

                <div
                    className={`z-10 flex h-8 w-8 lg:h-9 lg:w-9 items-center justify-center ${theme === "light"
                        ? "text-white dark:text-zinc-900"
                        : "text-slate-800"
                        }`}
                >
                    <Sun size={16} />
                </div>
            </div>
        </button>
    )
}

export default ToggleTheme