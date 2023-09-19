import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface Props {
  currentOrdering: string | null;
  onChange: (ording: string) => void;
}

const SortSelector = ({ onChange, currentOrdering }: Props) => {
  const order_by: { value: string; label: string }[] = [
    { value: "", label: "Order: By Relevent" },
    { value: "name", label: "Name" },
    { value: "released", label: "Released" },
    { value: "-added", label: "Add" },
    { value: "-created", label: "Newer" },
    { value: "-updated", label: "Update" },
    { value: "-rating", label: "Rate" },
    { value: "-metacritic", label: "Popular" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {order_by.find((order) => order.value === currentOrdering)?.label ||
          "Order: By Relevent"}
      </MenuButton>
      <MenuList>
        {order_by.map(({ value, label }) => (
          <MenuItem key={value} onClick={() => onChange(value)}>
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
