// TODO: remove this file, it is just a template
import { useQuery } from "@tanstack/react-query";

import apiService from "./apiService";

export const POSTS_QUERY_KEY = "posts";

export function usePosts() {
  return useQuery({
    queryKey: [POSTS_QUERY_KEY],
    queryFn: async () => {
      return await apiService.get("/posts");
    },
  });
}
