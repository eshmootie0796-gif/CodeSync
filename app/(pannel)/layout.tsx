import SideBar from "./components/SideBar"
import MobileSideBar from "./components/MobileSideBar"

function PanelLayout({ children }: { children: React.ReactNode }) {
    return (
       <div className="flex">
            <div className="hidden md:block">
                <SideBar />
            </div>
            <main className="flex-1">
                <div className="flex items-center gap-4 p-4 md:hidden">
                    <MobileSideBar />
                </div>
                {children}
            </main>
        </div>
    )
}

export default PanelLayout