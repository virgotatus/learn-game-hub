import { ChakraBaseProvider, Show, extendBaseTheme } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav " "main "`,
        lg: `"nav nav" "category main"`,
      }}
      gap="1"
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem bg="gray.300" area={"category"}>
          category
        </GridItem>
      </Show>
      <GridItem bg="blue.300" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
