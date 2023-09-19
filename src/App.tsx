import { HStack, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameList from "./components/GameList";
import AsideBar from "./components/AsideBar";
import { useState } from "react";
import { GameParams } from "./hooks/useGame";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import HeadingGame from "./components/HeadingGame";
import { Genre } from "./hooks/useGenres";

function App() {
  const [gameParams, setGameParams] = useState<GameParams>({} as GameParams);

  return (
    <Grid
      templateAreas={{
        base: `"nav " "main "`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      gap="1"
    >
      <GridItem area={"nav"}>
        <NavBar
          onSetSearchText={(searchText: string) =>
            setGameParams({ ...gameParams, searchText: searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX="5">
          <AsideBar
            selectedGenre={gameParams.genre}
            setGenre={(genre: Genre) =>
              setGameParams({ ...gameParams, genre: genre })
            }
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack spacing="10px" paddingY={1}>
          <PlatformSelector
            selectedPlatform={gameParams.platform}
            onChange={(platform) =>
              setGameParams({ ...gameParams, platform: platform })
            }
          />
          <SortSelector
            currentOrdering={gameParams.ordering}
            onChange={(ordering: string) =>
              setGameParams({ ...gameParams, ordering: ordering })
            }
          />
        </HStack>
        <HeadingGame gameParams={gameParams} />
        <GameList gameparams={gameParams} />
      </GridItem>
    </Grid>
  );
}

export default App;
