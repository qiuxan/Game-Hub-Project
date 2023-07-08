import { MouseEvent } from "react";
import { useState } from "react";
import style from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  handleSelected: (item: string) => void;
}
function ListGroup({ items, heading, handleSelected }: Props) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const handleClick = (event: MouseEvent) => {
    let selectedIndex = 0;
    console.log(event);
  };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item</p>}
      <List className={style.listGroup}>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedItemIndex}
            key={item}
            onClick={() => {
              setSelectedItemIndex(index);
              handleSelected(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default ListGroup;
