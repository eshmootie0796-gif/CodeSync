"use client"
import { useTaskStore } from "@/store/tasksStore"
import TaskList from "../components/TaskList"
import AddTask from "../components/AddTask"

function Tasks() {
    const tasks = useTaskStore((state) => state.tasks)
    const updateTask = useTaskStore((state) => state.updateTask)
    const deleteTask = useTaskStore((state) => state.deleteTask)

    const handleStatusChange = (
        id: string,
        status: "todo" | "in-progress" | "completed"
    ) => {
        updateTask(id, { status })
    }

    const handleEdit = (id: string, title: string) => {
        if (!title.trim()) return
        updateTask(id, {
            title: title.trim(),
        })
    }

    const handleDelete = (id: string) => {
        deleteTask(id)
    }

    return (
        <div className="min-h-screen px-5 pb-5 lg:py-5 mt-2 lg:mt-0">
            <div className="mb-5 lg:mb-8 flex flex-col lg:flex-row items-start justify-between ">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
                    <p className="mt-2 max-w-xl text-muted-foreground"> Manage and track your tasks.</p>
                </div>
                <AddTask />
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                <TaskList
                    title="Todo"
                    tasks={tasks}
                    status="todo"
                    onStatusChange={handleStatusChange}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
                <TaskList
                    title="In Progress"
                    tasks={tasks}
                    status="in-progress"
                    onStatusChange={handleStatusChange}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
                <TaskList
                    title="Completed"
                    tasks={tasks}
                    status="completed"
                    onStatusChange={handleStatusChange}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </div>
        </div>
    )
}

export default Tasks
