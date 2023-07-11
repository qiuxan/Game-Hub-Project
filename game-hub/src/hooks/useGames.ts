import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  background_image: string;
  id: number;
  name: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = () => useData<Game>("/games");
export default useGames;
