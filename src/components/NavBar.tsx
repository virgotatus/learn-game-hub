import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo_abstract-zip.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSetSearchText: (SearchText: string) => void;
}

const NavBar = ({ onSetSearchText }: Props) => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize={"50px"} />
      <Box w="70%">
        <SearchInput
          onSetSearchText={(SearchText: string) => onSetSearchText(SearchText)}
        />
      </Box>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
