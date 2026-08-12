import { useQuery } from "@tanstack/react-query";
import getRepos from "@/services/Api/GetRepos";

function useGithubRepos(username: string) {
    return useQuery({
        queryKey: ["githubRepos", username],
        queryFn: () => getRepos(username)
    })
}

export default useGithubRepos