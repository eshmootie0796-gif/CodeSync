import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideBar from "./SideBar";

function MobileSideBar() {
    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger>
                    <div className="rounded-xl border border-zinc-200 p-2 dark:border-white/10">
                        <Menu size={22} />
                    </div>
                </SheetTrigger>
                <SheetContent side="left" className="w-50 p-0">
                    <SideBar className="w-full border-r-0"/>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileSideBar