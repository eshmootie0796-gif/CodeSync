"use client"

import { useState } from "react"
import { ChevronDown, Check } from "lucide-react"

interface FilterSelectProps {
    value: string
    options: string[]
    onChange: (value: string) => void
    label?: string
}

function FilterSelect({ value, options, onChange }: FilterSelectProps) {
    const [open, setOpen] = useState(false)

    return (
        <div className="relative w-52 lg:w-40 md:w-100">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex h-11 w-full cursor-pointer items-center justify-between gap-4 rounded-xl border border-emerald-400/30 bg-white/70 px-4 text-sm font-medium text-slate-700 shadow-[0_0_20px_rgba(16,185,129,0.06)] backdrop-blur-xl transition hover:border-emerald-400/50 hover:bg-emerald-50/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-emerald-950/20"
            >
                <span className="line-clamp-1">
                    {value}
                </span>

                <ChevronDown
                    className={`h-4 w-4 shrink-0 text-emerald-500 transition-transform ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {open && (
                <div className="absolute right-0 z-50 mt-2 max-h-72 min-w-full overflow-y-auto overscroll-contain rounded-xl border border-emerald-400/30 bg-white/95 p-1 shadow-[0_10px_40px_rgba(16,185,129,0.15)] backdrop-blur-xl dark:bg-slate-900/95">
                    {options.map((option) => (
                        <button
                            key={option}
                            type="button"
                            onClick={() => {
                                onChange(option)
                                setOpen(false)
                            }}
                            className="flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition hover:bg-emerald-500/10"
                        >
                            <span>{option}</span>

                            {value === option && (
                                <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default FilterSelect