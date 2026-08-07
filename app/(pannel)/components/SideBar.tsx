'use client'

import { cn } from "@/utils/cn";
import SidebarOption from "@/components/Custome/SidebarOption";
import { Code2, FolderGit2, LayoutDashboard, ListTodo, Settings, UserRound, } from "lucide-react";
import useCurrentUser from "@/hooks/session/useCurrentUser";

export const sidebarItems = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Projects", href: "/projects", icon: FolderGit2 },
  { title: "Tasks", href: "/tasks", icon: ListTodo },
  { title: "Profile", href: "/profile", icon: UserRound },
  { title: "Settings", href: "/settings", icon: Settings },
]

interface SideBarProps {
  className?: string;
}

function SideBar({ className }: SideBarProps) {
  const { user, loading } = useCurrentUser()

  if (loading) return <div>loading...</div>

  return (
    <aside className={cn("flex h-screen w-72 shrink-0 flex-col border-r border-zinc-200 bg-white dark:border-white/5 dark:bg-linear-to-b dark:from-[#0D1117] dark:to-[#090C10]", className)}>
      <div className="border-b border-zinc-200 px-6 py-7 dark:border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
            <Code2 size={22} className="text-emerald-500" />
          </div>
          <div>
            <h1 className="font-semibold text-zinc-900 dark:text-white">CodeSync</h1>
            <p className="text-xs text-zinc-500">Developer Workspace</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {sidebarItems.map((item) => (
          <SidebarOption
            key={item.title}
            title={item.title}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </nav>
      <div className="border-t border-zinc-200 p-4 dark:border-white/5">
        <div className="flex items-center gap-3 rounded-2xl bg-zinc-100 p-3 dark:bg-white/5">
          <img src={user?.image} className="flex h-11 w-11 items-center justify-center rounded-full" />
          <div>
            <p className="text-sm font-medium text-zinc-900 dark:text-white">{user?.name}</p>
            <p className="text-xs text-zinc-500">{user?.email}</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SideBar