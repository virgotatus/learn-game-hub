import {
  FaWindows,
  FaApple,
  FaLinux,
  FaXbox,
  FaPlaystation,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { GrAndroid } from "react-icons/gr";
import { Platform } from "../services/GameService";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface Props {
  platforms: Platform[];
}

const PlatformIcon = ({ platforms }: Props) => {
  const platformMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    macintosh: FaApple,
    linux: FaLinux,
    nintendo: BsNintendoSwitch,
    android: GrAndroid,
  };

  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon
          as={platformMap[platform.slug]}
          key={platform.id}
          color="gray.400"
        />
      ))}
    </HStack>
  );
};

export default PlatformIcon;
