"use client"
import { useSession } from "next-auth/react"

function useCurrentUser(){
    const {data: session, status} = useSession()

    return {
        user: session?.user,
        loading: status === "loading"
    }

}

export default useCurrentUser