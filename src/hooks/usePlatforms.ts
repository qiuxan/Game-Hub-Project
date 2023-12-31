import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";
import platforms from "../data/platforms";
import ms from "ms";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatForms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

// const usePlatForm = () => useData<Platform>("/platforms/lists/parents");
export default usePlatForms;
