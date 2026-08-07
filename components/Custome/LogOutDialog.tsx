'use client'


import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { signOut } from "next-auth/react"

function LogOutDialog() {
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <div className=" rounded-xl bg-emerald-600 px-4 py-2 font-semibold text-white shadow-lg transition-all hover:scale-105 cursor-pointer duration-300 hover:bg-emerald-500 shadow-emerald-500/30"
                >Logout</div>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
                    <AlertDialogDescription>You will need to sign in again to access your CodeSync dashboard.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        className="bg-emerald-600 text-white cursor-pointer hover:bg-emerald-500 "
                        onClick={() => signOut({ callbackUrl: "/" })}
                    >
                        Logout
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default LogOutDialog