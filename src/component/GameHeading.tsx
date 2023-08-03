import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatForm from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();

  const { data: platforms } = usePlatForm();
  const selectedPlatform = platforms?.results.find(
    (g) => g.id === gameQuery.platformId
  );
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const heading = `${selectedPlatform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
