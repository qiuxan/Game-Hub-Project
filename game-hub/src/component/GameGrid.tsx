import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";

import apiClients from "../services/api-clients";
interface Game {
  id: number;
  name: string;
}
interface FetchGamesRespons {
  count: number;
  results: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState();
  useEffect(() => {
    apiClients
      .get<FetchGamesRespons>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
