import Link from "next/link";
import ToggleTheme from "../../../components/Custome/ToggleTheme";
import { Bell, Code2, UserRound } from "lucide-react";

function Header() {
    return (
        <header className="sticky top-0 z-50 bg-[#f3f3f3] dark:bg-zinc-900">
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 lg:flex-nowrap lg:px-6 lg:py-4">
                <Link href="/" className="flex items-center gap-2">
                    <Code2 className="text-emerald-800 w-8 h-8 lg:w-12 lg:h-12" />
                    <h1 className="bg-linear-to-r from-emerald-800 to-emerald-600 h-8 lg:h-12 bg-clip-text text-transparent font-bold text-2xl lg:text-4xl">CodeSync</h1>
                </Link>
                <div className="flex flex-wrap items-center justify-between gap-5 p-3 lg:flex-nowrap ">
                    <Bell className="text-zinc-600 cursor-pointer hover:fill-zinc-600" size={24}/>
                     <ToggleTheme></ToggleTheme>
                     <Link
                            href="/login"
                            className="flex items-center gap-2 border-2 border-emerald-600 text-emerald-600 px-3 py-2 rounded-md hover:bg-emerald-600 hover:text-white transition"
                        >
                            <UserRound size={18} />
                            <span className="hidden sm:inline">
                                Login
                            </span>
                        </Link>
                </div>
            </div>
        </header>
    )
}

export default Header