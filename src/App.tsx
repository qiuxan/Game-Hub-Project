import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./component/GameGrid";
import GameHeading from "./component/GameHeading";
import GenreList from "./component/GenreList";
import NavBar from "./component/NavBar";
import PlatformSelecter from "./component/PlatformSelecter";
import SortSelector from "./component/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
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
}

export default App;
