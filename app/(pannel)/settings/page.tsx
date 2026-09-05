'use client'

import { Palette, GitBranch, LogOutIcon, Link2 } from "lucide-react"
import SettingsCard from "@/app/(pannel)/components/SettingsCard"
import ToggleTheme from "@/components/Custome/ToggleTheme"
import Link from "next/link"
import { useSession } from "next-auth/react"
import useGithubUser from "@/hooks/github/useGithubUser"
import LogOutDialog from "@/app/(pannel)/components/LogOutDialog"

function Settings() {
    const { data: session } = useSession()
    const username = session?.user?.username
    const { data: githubUser, isLoading } = useGithubUser(username)

    return (
        <div className="px-5 pb-5 lg:py-5">
            <div className="mb-5 lg:mb-8 mt-2 lg:mt-0 flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                    <p className="mt-2 max-w-xl text-muted-foreground"> Manage your account, appearance, and GitHub connection.</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 lg:gap-7">
                <SettingsCard
                    title="Appearance"
                    description="Customize the application theme."
                    icon={Palette}
                >
                    <div className="flex items-center justify-between">
                        <span className="font-medium">Theme</span>
                        <ToggleTheme />
                    </div>
                </SettingsCard>
                <SettingsCard
                    title="GitHub"
                    description="Manage your connected account."
                    icon={GitBranch}
                >
                    <div >
                        {
                            isLoading ?
                                <div className="h-10 w-full rounded-2xl bg-zinc-200 dark:bg-white/10" /> :
                                <div className="flex items-center justify-between rounded-2xl bg-muted/50 p-4">
                                    <p className="truncate">
                                        {githubUser?.html_url}
                                    </p>
                                    <Link
                                        href={githubUser?.html_url ?? "#"}
                                        target="_blank"
                                        className="flex gap-1.5"
                                    >
                                        <Link2 />
                                        Open
                                    </Link>
                                </div>
                        }

                    </div>
                </SettingsCard>
                <SettingsCard
                    title="Account"
                    description="Sign out of your account."
                    icon={LogOutIcon}
                >
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                            You can sign in again at any time.
                        </p>
                        <LogOutDialog />
                    </div>
                </SettingsCard>
            </div>
        </div>
    )
}

export default Settings