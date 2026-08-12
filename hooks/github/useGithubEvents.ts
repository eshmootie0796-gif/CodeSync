import { useQuery } from "@tanstack/react-query";
import getEvents from "@/services/Api/GetEvents";

function useGithubEvents(username: string) {
    return useQuery({
        queryKey: ["githubEvents", username],
        queryFn: () => getEvents(username)
    })
}

export default useGithubEvents