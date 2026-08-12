import SideBar from "./components/SideBar"
import MobileSideBar from "./components/MobileSideBar"

export default function PanelLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen overflow-hidden">
            <aside className="relative z-20 hidden h-screen w-64 shrink-0 border-r bg-slate-950 lg:block">
                <SideBar />
            </aside>
            <div className="fixed left-0 top-0 z-50 p-4 lg:hidden">
                <MobileSideBar />
            </div>
            <main className="min-h-0 min-w-0 flex-1 mt-15 lg:mt-0 overflow-y-auto overflow-x-hidden">
                {children}
            </main>

        </div>
    )
}