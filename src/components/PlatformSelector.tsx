import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Platform } from "../hooks/usePlatform";

interface Props {
  selectedPlatform: Platform | null;
  onChange: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onChange }: Props) => {
  const { platforms } = usePlatform();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onChange(platform)}>
            {platform.slug}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
