import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatForms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 100,
    initialData: platforms,
  });

// const usePlatForm = () => useData<Platform>("/platforms/lists/parents");
export default usePlatForms;
