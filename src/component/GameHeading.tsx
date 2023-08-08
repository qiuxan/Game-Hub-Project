import { Heading } from "@chakra-ui/react";
import usePlatForm from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const platformId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platform = usePlatForm(platformId);

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = usePlatForm(genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
