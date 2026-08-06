import { create } from "zustand"

interface sidebarStore {
    activeItem: string
    setActiveItem: (item: string) => void
}

export const useSidebar = create<sidebarStore>((set) => ({
    activeItem: "Dashboard",
    setActiveItem: (item) => { set({ activeItem: item }) }
}))
