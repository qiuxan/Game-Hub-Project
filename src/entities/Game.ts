import { Genre } from "./Genre";
import { Platform } from "./Platform";

export interface Game {
  background_image: string;
  slug: string;
  id: number;
  name: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  rating_top: number;
  rating: number;
  description_raw: string;
}
