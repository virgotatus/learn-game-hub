import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo_abstract-zip.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"50px"} />
      <Text>Game Hub</Text>
    </HStack>
  );
};

export default NavBar;
