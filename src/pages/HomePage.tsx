import { Grid, Show, GridItem, Flex, Box } from "@chakra-ui/react";
import React from "react";
import GameGrid from "../component/GameGrid";
import GameHeading from "../component/GameHeading";
import GenreList from "../component/GenreList";
import PlatformSelecter from "../component/PlatformSelecter";
import SortSelector from "../component/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBlockEnd={5}>
            <Box marginRight={5}>
              <PlatformSelecter />
            </Box>
            <SortSelector />
          </Flex>
          <GameGrid />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
