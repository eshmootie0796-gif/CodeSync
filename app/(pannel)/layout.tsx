import SideBar from "./components/SideBar"

function PanelLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <aside className="w-64 border-r">
                <SideBar />
            </aside>
            <main className="flex-1">
                {children}
            </main>

        </div>
    )
}

export default PanelLayout