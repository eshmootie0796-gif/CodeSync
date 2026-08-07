import { cn } from "@/utils/cn";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

function SettingsCard({title,description, icon: Icon, children,className}: {title: string,description: string,icon: LucideIcon,children: ReactNode, className?: string}) {
    return (
        <section
            className={cn("rounded-3xl border p-6 bg-white border-zinc-200 shadow-sm dark:bg-[#10151C] dark:border-white/5",
                className
            )}
        >
            <div className="mb-6 flex items-center gap-4">
                <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10")}>
                    <Icon className={cn("h-6 w-6 text-emerald-500")}/>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{description}</p>
                </div>
            </div>
            <div>{children}</div>
        </section>
    );
}

export default SettingsCard