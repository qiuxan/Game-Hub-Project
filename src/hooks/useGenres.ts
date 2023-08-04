import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genre";
import APIClients from "../services/api-clients";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClients<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });
// useData<Genre>("/genres");

export default useGenres;
