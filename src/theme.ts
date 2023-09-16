import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
// const { Button } = chakraTheme.theme.components;
const theme = extendTheme({
  config,
});

export default theme;