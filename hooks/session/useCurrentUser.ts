"use client"
import { useSession } from "next-auth/react"

function useCurrentUser(username?: string){
    const {data: session, status} = useSession()

    return {
        user: session?.user,
        loading: status === "loading",
         enabled: !!username,
    }

}

export default useCurrentUser