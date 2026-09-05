'use client'

import { cn } from "@/utils/cn";
import SidebarOption from "@/app/(pannel)/components/SidebarOption";
import { Code2, FolderGit2, LayoutDashboard, ListTodo, Settings, UserRound, } from "lucide-react";
import useCurrentUser from "@/hooks/session/useCurrentUser";
import Link from "next/link";

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

  if (loading) {
    return (
      <aside
        className={cn(
          "flex h-screen shrink-0 flex-col border-r border-zinc-200 bg-white dark:border-white/5 dark:bg-linear-to-b dark:from-[#0D1117] dark:to-[#090C10]",
          className
        )}
      >
        <div className="border-b border-zinc-200 px-6 py-7 dark:border-white/5">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 animate-pulse rounded-xl bg-emerald-500/10" />
            <div className="space-y-2">
              <div className="h-4 w-20 animate-pulse rounded-md bg-zinc-200 dark:bg-white/10" />
              <div className="h-3 w-28 animate-pulse rounded-md bg-zinc-200 dark:bg-white/10" />
            </div>
          </div>
        </div>
        <nav className="flex-1 space-y-8 p-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex h-11 items-center gap-5 rounded-xl px-3"
            >
              <div className="h-10 w-10 animate-pulse rounded-md bg-zinc-200 dark:bg-white/10" />
              <div
                className="h-4 animate-pulse rounded-md bg-zinc-200 dark:bg-white/10"
                style={{ width: `${65 + item * 8}px` }}
              />
            </div>
          ))}
        </nav>
        <div className="border-t border-zinc-200 p-2 dark:border-white/5">
          <div className="flex items-center gap-3 rounded-2xl bg-zinc-100 p-3 dark:bg-white/5">
            <div className="h-11 w-11 shrink-0 animate-pulse rounded-full bg-zinc-200 dark:bg-white/10" />
            <div className="min-w-0 flex-1 space-y-2">
              <div className="h-3.5 w-24 animate-pulse rounded-md bg-zinc-200 dark:bg-white/10" />
              <div className="h-3 w-32 animate-pulse rounded-md bg-zinc-200 dark:bg-white/10" />
            </div>
          </div>
        </div>
      </aside>
    )
  }

  return (
    <aside className={cn("flex h-screen shrink-0 flex-col border-r border-zinc-200 bg-white dark:border-white/5 dark:bg-linear-to-b dark:from-[#0D1117] dark:to-[#090C10]", className)}>
      <div className="border-b border-zinc-200 px-6 py-7 dark:border-white/5">
        <div className="flex items-center gap-3">
          <Link href="/dashboard">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
            <Code2 size={22} className="text-emerald-500" />
          </div>
          </Link>
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
      <div className="border-t border-zinc-200 p-2 dark:border-white/5">
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