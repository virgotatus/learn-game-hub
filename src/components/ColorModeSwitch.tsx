import { HStack, Switch, Text, color, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch onChange={() => toggleColorMode()} colorScheme="green"></Switch>
      <Text>{colorMode}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
