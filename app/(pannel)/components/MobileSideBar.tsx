import { Code2, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import SideBar from "./SideBar"

function MobileSideBar() {
    return (
        <div className="flex items-center justify-between lg:hidden">
            <div className="flex items-center gap-3">
                <Sheet>
                    <SheetTrigger className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500">
                        <Menu />
                    </SheetTrigger>
                    <SheetContent
                        side="left"
                        className="w-72 border-r border-emerald-500/20 bg-white p-0 dark:bg-[#0D1117]"
                    >
                        <SideBar className="w-full border-r-0" />
                    </SheetContent>
                </Sheet>
                <div className="flex items-center gap-2.5">
                    <div
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500"
                    >
                        <Code2 size={19} />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-zinc-900 dark:text-white"> CodeSync</p>
                        <p className="text-[10px] text-zinc-500"> Developer Workspace </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileSideBar