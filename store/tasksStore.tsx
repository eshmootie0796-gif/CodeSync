import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Task } from "@/types/TaskType"

interface TaskStore {
    tasks: Task[]
    addTask: (title: string) => void
    deleteTask: (id: string) => void
    updateTask: (id: string, data: Partial<Task>) => void
    editTask: (id: string, title: string) => void
}

export const useTaskStore = create<TaskStore>()(
    persist(
        (set) => ({
            tasks: [],
            addTask: (title) => set((state) => ({
                tasks: [
                    ...state.tasks,
                    {
                        id: crypto.randomUUID(),
                        title,
                        status: "todo",
                    },
                ],
            })),
            deleteTask: (id) => set((state) => ({
                tasks: state.tasks.filter(
                    (task) => task.id !== id
                ),
            })),
            updateTask: (id, data) => set((state) => ({
                tasks: state.tasks.map((task) =>
                    task.id === id
                        ? { ...task, ...data }
                        : task
                ),
            })),
            editTask: (id, title) => set((state) => ({
                tasks: state.tasks.map((task) =>
                    task.id === id
                        ? { ...task, title }
                        : task
                ),
            })),
        }),
        {
            name: "codesync-tasks",
        }
    )
)