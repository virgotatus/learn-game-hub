import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

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
