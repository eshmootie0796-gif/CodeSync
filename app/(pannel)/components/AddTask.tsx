"use client"

import { FormEvent, useState } from "react"
import { Plus } from "lucide-react"
import { useTaskStore } from "@/store/tasksStore"

function AddTask() {
    const addTask = useTaskStore((state) => state.addTask)
    const [title, setTitle] = useState("")
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!title.trim()) return
        addTask(title.trim())
        setTitle("")
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md items-center gap-2 mt-5 lg:mt-3"
        >
            <div className="flex flex-1 items-center rounded-xl border bg-background px-3 shadow-sm transition focus-within:ring-2 focus-within:ring-primary/20">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="What needs to be done?"
                    className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
            </div>

            <button
                type="submit"
                disabled={!title.trim()}
                className="flex h-10 items-center gap-2 rounded-xl bg-emerald-500 px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
                <Plus className="h-4 w-4" />
                Add Task
            </button>
        </form>
    )
}

export default AddTask