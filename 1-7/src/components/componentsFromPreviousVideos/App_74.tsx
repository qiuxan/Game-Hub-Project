import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
const connect = () => console.log("connecting");
const disconnect = () => console.log("disconnecting");

function App() {
  const [category, setCategory] = useState("");
  useEffect(() => {
    connect();
    return () => disconnect();
  });
  return (
    <>
      app
      {/* <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} /> */}
    </>
  );
}

export default App;
