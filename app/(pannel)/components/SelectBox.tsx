"use client"

import { useState } from "react"
import { ChevronDown, Check, Search } from "lucide-react"

interface FilterSelectProps {
    value: string
    options: string[]
    onChange: (value: string) => void
    searchable?: boolean
}

function FilterSelect({ value, options, onChange, searchable = false, }: FilterSelectProps) {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")
    const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(search.toLowerCase().trim())
    )
    const handleOpen = () => {
        setOpen((prev) => !prev)
        setSearch("")
    }
    const handleSelect = (option: string) => {
        onChange(option)
        setOpen(false)
        setSearch("")
    }

    return (
        <div className="relative w-52 md:w-100 lg:w-40">
            <button
                type="button"
                onClick={handleOpen}
                className="flex h-11 w-full cursor-pointer items-center justify-between gap-4 rounded-xl border border-emerald-400/30 bg-white/70 px-4 text-sm font-medium text-slate-700 shadow-[0_0_20px_rgba(16,185,129,0.06)] backdrop-blur-xl transition hover:border-emerald-400/50 hover:bg-emerald-50/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-emerald-950/20"
            >
                <span className="line-clamp-1">{value}</span>
                <ChevronDown
                    className={`h-4 w-4 shrink-0 text-emerald-500 transition-transform ${open ? "rotate-180" : ""}`}
                />
            </button>
            {open && (
                <div className="absolute right-0 z-50 mt-2 max-h-72 min-w-full overflow-hidden rounded-xl border border-emerald-400/30 bg-white/95 p-1 shadow-[0_10px_40px_rgba(16,185,129,0.15)] backdrop-blur-xl dark:bg-slate-900/95">
                    {searchable && (
                        <div className="flex items-center border-b border-border px-2">
                            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
                            <input
                                autoFocus
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search language..."
                                className="h-10 w-full bg-transparent px-2 text-sm outline-none placeholder:text-muted-foreground"
                            />
                        </div>
                    )}
                    <div className="max-h-64 overflow-y-auto overscroll-contain">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option) => (
                                <button
                                    key={option}
                                    type="button"
                                    onClick={() => handleSelect(option)}
                                    className="flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition hover:bg-emerald-500/10"
                                >
                                    <span>{option}</span>
                                    {value === option && (
                                        <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                                    )}
                                </button>
                            ))
                        ) : (
                            <p className="px-3 py-4 text-center text-sm text-muted-foreground">No languages found</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default FilterSelect
