import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
// 1. Import the extendTheme function
import { extendTheme, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const { Button } = chakraTheme.theme.components;
const theme = extendTheme({
  colors,
  components: {
    Button,
  },
});

const rootElement = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
