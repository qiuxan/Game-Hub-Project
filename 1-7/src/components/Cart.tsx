import React from "react";
interface Props {
  cartItems: string[];
  clearCart: () => void;
}
function Cart({ cartItems, clearCart }: Props) {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((cartItem) => (
          <li key={cartItem}>{cartItem}</li>
        ))}
      </ul>
      <button onClick={clearCart}>Clear</button>
    </>
  );
}

export default Cart;
