import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import LikeButton from "./components/LikeButton";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { MouseEvent, useState } from "react";
import { BsCash, BsHeartFill, BsHeart } from "react-icons/bs";
import produce from "immer";

// import "./App.css";
function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      {
        id: 1,
        title: "product 1 ",
        quantity: 1,
      },
      {
        id: 2,
        title: "product 2 ",
        quantity: 1,
      },
    ],
  });

  const addOneP1 = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
      age: 13,
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy pepperoni",
    toppings: ["Mushroom"],
  });

  const handleAddCheese = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };

  const [cartItems, setCartItems] = useState(["product 1", "product 2"]);

  const [bugs, setBugs] = useState([
    { id: 1, tiltle: "bug 1", fixed: false },
    { id: 2, tiltle: "bug 2", fixed: false },
  ]);

  const handleClick = () => {
    //old fasshion way
    // setBugs(bugs.map((bug) => (bug.id == 1 ? { ...bug, fixed: true } : bug)));
    //immer way
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  let items = ["NY", "SF", "TK", "LD", "PR"];

  let handleSelected = (item: string) => {
    console.log("from app.tsx", item);
  };

  const [alertVisible, setAlertVisible] = useState(false);

  let handleButtonClick = () => {
    setAlertVisible(false);
  };

  return (
    <div>
      <div>
        <h3>Cart</h3>
        <ul>
          {cart.items.map((item) => (
            <li>
              id: {item.id} title: {item.title} quantity : {item.quantity}
            </li>
          ))}
        </ul>
        <button onClick={addOneP1}> Add 1 to Prod 1</button>
      </div>
      <div>
        <h3>Name: {pizza.name}</h3>
        <p>Toppings: </p>
        <ul>
          {pizza.toppings.map((topping) => (
            <li>{topping}</li>
          ))}
        </ul>
        <button onClick={handleAddCheese}>Add Cheese</button>
      </div>
      <div>
        <p>ID: {game.id} </p>
        <p>Player: {game.player.name}</p>
        <p>Age: {game.player.age}</p>
      </div>

      <button
        onClick={() => {
          setGame({ ...game, player: { ...game.player, name: "Bob" } });
        }}
      >
        Change Name to Bob
      </button>

      <NavBar cartItemsCount={cartItems.length} />
      <Cart
        cartItems={cartItems}
        clearCart={() => {
          setCartItems([]);
        }}
      />

      {bugs.map((bug) => (
        <p key={bug.id}>
          {" "}
          {bug.tiltle} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}

      <button onClick={handleClick}>Fix bug 1</button>

      <LikeButton
        likeClicked={() => {
          console.log("like clicked");
        }}
      />
      <BsCash color="green" size={40} />
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisible(false);
          }}
        >
          My <span>Alert</span>
        </Alert>
      )}
      <Button
        color="primary"
        onClick={(event: MouseEvent) => {
          setAlertVisible(true);
          console.log(event);
        }}
      >
        Button text
      </Button>
      <ListGroup items={items} heading="List" handleSelected={handleSelected} />
    </div>
  );
}

export default App;
