import { useQuery } from "@tanstack/react-query";
import apiClients from "../services/api-clients";
import genres from "../data/genre";
import { FetchResponse } from "../services/api-clients";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClients.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24 hrs, coz the genre hardly changes,
    initialData: { count: genres.length, results: genres }, // remake the genre data to make it the same as FetchResponse<Genre> we get from  ` queryFn `
  });
// useData<Genre>("/genres");

export default useGenres;
