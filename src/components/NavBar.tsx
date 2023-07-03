import React from "react";

interface Props {
  cartItemsCount: number;
}
function NavBar({ cartItemsCount }: Props) {
  return <div>NavBar Cart Items Count: {cartItemsCount}</div>;
}

export default NavBar;
