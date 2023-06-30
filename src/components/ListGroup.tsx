import { MouseEvent } from "react";
import { useState } from "react";
function ListGroup() {
  let list = ["NY", "SF", "TK", "LD", "PR"];
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const handleClick = (event: MouseEvent) => {
    let selectedIndex = 0;
    console.log(event);
  };

  return (
    <>
      <h1>List</h1>
      {list.length === 0 && <p>No item</p>}
      <ul className="list-group">
        {list.map((item, index) => (
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
