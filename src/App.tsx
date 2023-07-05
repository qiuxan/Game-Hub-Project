import { useCallback, useState } from "react";
import Form from "./components/Form";
import ItemTable from "./components/ItemTable";

function App() {
  const [items, setItems] = useState([
    { description: "milk", amount: 5, category: "groceries" },
    { description: "egg", amount: 5, category: "groceries" },
    { description: "electricity", amount: 100, category: "utilities" },
    { description: "milk", amount: 5, category: "groceries" },
  ]);
  const categories = [...new Set(items.map((item) => item.category))];

  return (
    <div>
      <Form categories={categories} />
      <ItemTable items={items} />
    </div>
  );
}

export default App;
