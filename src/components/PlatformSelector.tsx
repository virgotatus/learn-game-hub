import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface Props {
  selectedPlatform: string | null;
  onChange: (platform: string) => void;
}

const PlatformSelector = ({ selectedPlatform, onChange }: Props) => {
  const { platforms } = usePlatform();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {selectedPlatform || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onChange(String(platform.id))}
          >
            {platform.slug}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
