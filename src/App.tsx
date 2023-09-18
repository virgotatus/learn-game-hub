import { ChakraBaseProvider, Show, extendBaseTheme } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameList from "./components/GameList";
import AsideBar from "./components/AsideBar";
import { useState } from "react";

function App() {
  const [genreName, setGenreName] = useState<string | null>(null);
  console.log(genreName);

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
          <AsideBar setGenreName={(name: string) => setGenreName(name)} />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameList genreName={genreName} />
      </GridItem>
    </Grid>
  );
}

export default App;
