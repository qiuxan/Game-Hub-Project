import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";
export interface Game {
  background_image: string;
  id: number;
  name: string;
}
interface FetchGamesRespons {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState();
  useEffect(() => {
    const controller = new AbortController();
    apiClients
      .get<FetchGamesRespons>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { games, error };
};
export default useGames;
