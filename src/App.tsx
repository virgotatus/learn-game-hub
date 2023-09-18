import { HStack, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameList from "./components/GameList";
import AsideBar from "./components/AsideBar";
import { useState } from "react";
import { GameParams } from "./hooks/useGame";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX="5">
          <AsideBar
            selectedGenre={gameParams.genreName}
            setGenreName={(name: string) =>
              setGameParams({ ...gameParams, genreName: name })
            }
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack spacing="10px">
          <PlatformSelector
            selectedPlatform={gameParams.platforms}
            onChange={(platform) =>
              setGameParams({ ...gameParams, platforms: platform })
            }
          />
          <SortSelector
            currentOrdering={gameParams.ordering}
            onChange={(ordering: string) =>
              setGameParams({ ...gameParams, ordering: ordering })
            }
          />
        </HStack>
        <GameList
          gameparams={gameParams}
          onChangePlatform={(platform: string) =>
            setGameParams({ ...gameParams, platforms: platform })
          }
        />
      </GridItem>
    </Grid>
  );
}

export default App;
