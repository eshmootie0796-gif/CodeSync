"use client"

import useDnd, { DragCallbackState } from "@/hooks/dnd/useDnd"
import { Task } from "@/types/TaskType"
import { Check, Pencil, Play, Trash2, X } from "lucide-react"
import { useCallback, useRef, useState } from "react"

interface TaskCardProps {
    task: Task
    onStatusChange: (
        taskId: string,
        status: Task["status"]
    ) => void
    onEdit: (
        taskId: string,
        title: string
    ) => void
    onDelete: (
        taskId: string
    ) => void
}

function TaskCard({
    task,
    onStatusChange,
    onEdit,
    onDelete,
}: TaskCardProps) {

    const startX = useRef(0)
    const startY = useRef(0)
    const cardPosition = useRef({
        x: 0, y: 0,
    })

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isDragging, setIsDragging] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [editTitle, setEditTitle] = useState(task.title)

    const handleDrag = useCallback(
        ({ start, end, e }: DragCallbackState) => {
            if (start) {
                const rect = e.currentTarget.getBoundingClientRect()
                cardPosition.current = { x: rect.left, y: rect.top }
                startX.current = e.clientX
                startY.current = e.clientY
                setIsDragging(true)
                return
            }
            if (!start && !end) {
                const deltaX = e.clientX - startX.current
                const deltaY = e.clientY - startY.current
                setPosition({ x: deltaX, y: deltaY })
                return
            }
            if (end) {
                const element = document.elementFromPoint(e.clientX, e.clientY)
                const list = element?.closest("[data-status]")
                const status = list?.getAttribute("data-status")
                if (status === "todo" || status === "in-progress" || status === "completed") {
                    onStatusChange(task.id, status)
                }
                setPosition({ x: 0, y: 0 })
                setIsDragging(false)
            }
        },
        [
            onStatusChange,
            task.id,
        ]
    )

    const binding = useDnd(handleDrag)

    const handleEditStart = () => {
        setEditTitle(task.title)
        setIsEditing(true)
    }

    const handleEditCancel = () => {
        setEditTitle(task.title)
        setIsEditing(false)
    }

    const handleEditSave = () => {
        const newTitle = editTitle.trim()
        if (!newTitle) return
        onEdit(task.id, newTitle)
        setIsEditing(false)
    }

    return (
        <div
            ref={binding.elementRef}
            onPointerDown={binding.onPointerDown}
            onPointerMove={binding.onPointerMove}
            onPointerUp={binding.onPointerUp}
            style={{
                position: isDragging ? "fixed" : undefined,
                left: isDragging ? cardPosition.current.x : undefined,
                top: isDragging ? cardPosition.current.y : undefined,
                transform: isDragging ? `translate(${position.x}px, ${position.y}px)` : undefined,
                zIndex: isDragging ? 9999 : undefined,
            }}
            className={`group rounded-xl border bg-background p-4 shadow-sm transition hover:shadow-md cursor-grab touch-none ${isDragging ?
                "opacity-80 shadow-2xl"
                : ""
                }
            `}
        >

            <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                        {isEditing ? (
                            <input
                                autoFocus
                                value={editTitle}
                                onChange={(e) =>
                                    setEditTitle(
                                        e.target.value
                                    )
                                }
                                onPointerDown={(e) =>
                                    e.stopPropagation()
                                }
                                onKeyDown={(e) => {

                                    if (
                                        e.key === "Enter"
                                    ) {
                                        handleEditSave()
                                    }

                                    if (
                                        e.key === "Escape"
                                    ) {
                                        handleEditCancel()
                                    }
                                }}
                                className="w-full rounded-md border bg-background px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                            />

                        ) : (

                            <>
                                <h3 className="truncate font-medium">
                                    {task.title}
                                </h3>

                                {task.description && (
                                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                                        {task.description}
                                    </p>
                                )}
                            </>

                        )}

                    </div>
                    <div className="flex shrink-0 gap-1">
                        {isEditing ? (
                            <>
                                <button
                                    type="button"
                                    onPointerDown={(e) =>
                                        e.stopPropagation()
                                    }
                                    onClick={
                                        handleEditSave
                                    }
                                    className="rounded-md p-1.5 text-muted-foreground transition hover:text-emerald-500"
                                    aria-label="Save task"
                                >
                                    <Check className="h-4 w-4" />
                                </button>
                                <button
                                    type="button"
                                    onPointerDown={(e) =>
                                        e.stopPropagation()
                                    }
                                    onClick={
                                        handleEditCancel
                                    }
                                    className="rounded-md p-1.5 text-muted-foreground transition hover:text-red-500"
                                    aria-label="Cancel edit"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </>

                        ) : (
                            <>
                                <button
                                    type="button"
                                    onPointerDown={(e) =>
                                        e.stopPropagation()
                                    }
                                    onClick={
                                        handleEditStart
                                    }
                                    className="rounded-md p-1.5 text-muted-foreground transition hover:text-emerald-500"
                                    aria-label="Edit task"
                                >
                                    <Pencil className="h-4 w-4" />
                                </button>
                                <button
                                    type="button"
                                    onPointerDown={(e) =>
                                        e.stopPropagation()
                                    }
                                    onClick={() =>
                                        onDelete(
                                            task.id
                                        )
                                    }
                                    className="rounded-md p-1.5 text-muted-foreground transition hover:text-red-500"
                                    aria-label="Delete task"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </>

                        )}

                    </div>

                </div>

                {/* Status button */}

                {task.status === "todo" && (
                    <button
                        type="button"
                        onPointerDown={(e) =>
                            e.stopPropagation()
                        }
                        onClick={() =>
                            onStatusChange(
                                task.id,
                                "in-progress"
                            )
                        }
                        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                    >
                        <Play className="h-4 w-4" />
                        Start
                    </button>
                )}

                {task.status === "in-progress" && (
                    <button
                        type="button"
                        onPointerDown={(e) =>
                            e.stopPropagation()
                        }
                        onClick={() =>
                            onStatusChange(
                                task.id,
                                "completed"
                            )
                        }
                        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-emerald-600"
                    >
                        <Check className="h-4 w-4" />
                        Complete
                    </button>
                )}

                {task.status === "completed" && (
                    <div className="flex items-center gap-2 text-sm font-medium text-emerald-500">
                        <Check className="h-4 w-4" />
                        Completed
                    </div>
                )}

            </div>

        </div>
    )
}

export default TaskCard
