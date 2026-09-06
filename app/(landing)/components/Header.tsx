import Link from "next/link";
import ToggleTheme from "../../../components/Custome/ToggleTheme";
import { Bell, Code2, UserRound } from "lucide-react";

function Header() {
    return (
        <header className="sticky top-0 z-50 bg-[#f3f3f3] dark:bg-zinc-900">
            <div className="flex flex-nowrap items-center justify-between gap-2 p-2 sm:gap-3 sm:p-3 lg:px-6 lg:py-4">
                <Link
                    href="/"
                    className="flex min-w-0 shrink items-center gap-1.5 sm:gap-2"
                >
                    <Code2 className="h-7 w-7 shrink-0 text-emerald-800 sm:h-8 sm:w-8 lg:h-12 lg:w-12" />
                    <h1 className="truncate bg-linear-to-r from-emerald-800 to-emerald-600 bg-clip-text text-xl font-bold text-transparent sm:text-2xl lg:text-4xl">
                        CodeSync
                    </h1>
                </Link>
                <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 lg:gap-4">
                    <Bell
                        className="shrink-0 cursor-pointer text-zinc-600 hover:fill-zinc-600"
                        size={22}
                    />
                    <ToggleTheme />
                    <Link
                        href="/login"
                        className="flex shrink-0 items-center gap-1.5 rounded-md border-2 border-emerald-600 px-2 py-1.5 text-emerald-600 transition hover:bg-emerald-600 hover:text-white sm:gap-2 sm:px-3 sm:py-2"
                    >
                        <UserRound size={18} />
                        <span className="hidden sm:inline">Login</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header