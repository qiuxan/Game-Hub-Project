import { useQuery } from "@tanstack/react-query";
import apiClients from "../services/api-clients";
import useData from "./useData";
import { FetchResponse } from "./useData";
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
  });
// useData<Genre>("/genres");

export default useGenres;
