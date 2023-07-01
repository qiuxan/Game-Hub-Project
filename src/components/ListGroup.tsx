import { MouseEvent } from "react";
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}
function ListGroup({ items, heading }: Props) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const handleClick = (event: MouseEvent) => {
    let selectedIndex = 0;
    console.log(event);
  };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItemIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedItemIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
