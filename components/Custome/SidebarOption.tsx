'use client'

import { cn } from "@/utils/cn";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ComponentProps } from "react";
import { usePathname } from "next/navigation";

interface SidebarOptionProps extends ComponentProps<typeof Link> {
  icon: LucideIcon;
  title: string;
}

function SidebarOption({
  icon: Icon,
  title,
  href,
  className,
  ...props
}: SidebarOptionProps) {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <Link
      href={href}
      {...props}
      className={cn(
        "group relative flex items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-300",
        active
          ? "border-emerald-500/20 bg-emerald-500/10 shadow-lg shadow-emerald-500/10"
          : "border-transparent hover:bg-zinc-100 dark:hover:bg-white/5",
        className
      )}
    >
      <span
        className={cn(
          "absolute left-0 top-2 bottom-2 w-1 rounded-full transition-all",
          active ? "bg-emerald-500" : "opacity-0"
        )}
      />

      <div
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-xl transition-all",
          active
            ? "bg-emerald-500 text-white"
            : "bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200 dark:bg-white/5 dark:text-zinc-400 dark:group-hover:bg-white/10 dark:group-hover:text-white"
        )}
      >
        <Icon size={18} />
      </div>

      <span
        className={cn(
          "font-medium transition-colors",
          active
            ? "text-zinc-900 dark:text-white"
            : "text-zinc-600 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-white"
        )}
      >
        {title}
      </span>
    </Link>
  );
}

export default SidebarOption;