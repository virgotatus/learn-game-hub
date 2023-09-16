import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { extendTheme, extendBaseTheme } from "@chakra-ui/react";
// import chakraTheme from "@chakra-ui/theme";
import App from "./App";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
// const { Button } = chakraTheme.theme.components;
const theme = extendTheme({
  config,
});

const rootElement = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
