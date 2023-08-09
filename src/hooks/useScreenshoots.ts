import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";
import { Screenshot } from "../entities/Screenshot";

const useScreenshoots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshoots;
