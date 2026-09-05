import { Check, Circle, Clock3 } from "lucide-react"
import { Task } from "@/types/TaskType"
import TaskCard from "./TaskCard"

interface TaskListProps {
    title: string
    tasks: Task[]
    status: Task["status"]
    onStatusChange: (taskId: string, status: Task["status"]) => void
    onEdit: (taskId: string, title: string) => void
    onDelete: (taskId: string) => void
}

function TaskList({ title, tasks, status, onStatusChange, onEdit, onDelete }: TaskListProps) {
    const filteredTasks = tasks.filter((task) => task.status === status)
    const statusConfig = {
        todo: {
            icon: Circle,
            color: "text-amber-500",
            bg: "bg-amber-500/10",
        },
        "in-progress": {
            icon: Clock3,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
        },
        completed: {
            icon: Check,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
        },
    }

    const config = statusConfig[status]
    const Icon = config.icon

    return (
        <div
            data-status={status}
            className="flex flex-col h-80 lg:h-145 overflow-y-auto gap-4 rounded-2xl border border-emerald-400 dark:border-emerald-700 p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg ${config.bg}`}
                    >
                        <Icon className={`h-4 w-4 ${config.color}`}/>
                    </div>
                </div>
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">{filteredTasks.length}</span>
            </div>
            <div className="flex flex-col gap-3">
                {filteredTasks.length === 0 ? (
                    <div className="flex h-55 lg:h-120 items-center justify-center rounded-xl border border-dashed border-emerald-400/20 bg-emerald-500/2 text-xl text-muted-foreground">
                        No tasks
                    </div>
                ) : (
                    filteredTasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onStatusChange={onStatusChange}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ))
                )}
            </div >
        </div >
    )
}

export default TaskList