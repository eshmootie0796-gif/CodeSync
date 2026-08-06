import { useQuery } from "@tanstack/react-query";
import getUser from "@/services/Api/GetUser";

function useGithubUser(username: string) {
    return useQuery({
        queryKey: ["githubUser", username],
        queryFn: () => getUser(username)
    })
}

export default useGithubUser