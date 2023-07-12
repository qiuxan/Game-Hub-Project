import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedOrdering: Ordering | null;
  onSelectOrdering: (ordering: Ordering) => void;
}
export interface Ordering {
  name: string;
  displayName: string;
}

const SortSelector = ({ selectedOrdering, onSelectOrdering }: Props) => {
  const sortingOrders = [
    { name: "", displayName: "Relevance" },
    { name: "-added", displayName: "Date added" },
    { name: "-name", displayName: "Name" },
    { name: "-released", displayName: "Release date" },
    { name: "-metacritic", displayName: "Popularity" },
    { name: "-rating", displayName: "Average rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedOrdering?.displayName || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortingOrders.map((sortingOrder) => (
          <MenuItem
            onClick={() => onSelectOrdering(sortingOrder)}
            key={sortingOrder.name}
          >
            {sortingOrder.displayName}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
