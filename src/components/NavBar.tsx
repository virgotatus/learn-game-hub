import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo_abstract-zip.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize={"50px"} />

      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
