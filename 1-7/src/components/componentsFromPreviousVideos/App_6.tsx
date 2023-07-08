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

  const handleSubmitted = (data: any) => {
    console.log("in app.js", { data });
    setItems([
      ...items,
      {
        description: data.description,
        amount: data.amount,
        category: data.category,
      },
    ]);
  };

  const handleDelete = (index: number) => {
    console.log(index);
    const itemsCopy = [...items];
    itemsCopy.splice(index, 1);
    setItems(itemsCopy);
  };

  return (
    <div>
      <Form categories={categories} handleSubmitted={handleSubmitted} />
      <ItemTable items={items} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
