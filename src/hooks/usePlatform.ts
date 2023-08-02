import { FetchResponse } from "./../services/api-clients";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatForm = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 100,
    initialData: { count: platforms.length, results: platforms }, // remake the genre data to make it the same as FetchResponse<Platform>
  });

// const usePlatForm = () => useData<Platform>("/platforms/lists/parents");
export default usePlatForm;
