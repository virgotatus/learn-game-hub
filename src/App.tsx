import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from "@chakra-ui/theme";
import { Button, ButtonGroup } from "@chakra-ui/react";

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

function App() {
  return <Button>aaa</Button>;
}

export default App;
