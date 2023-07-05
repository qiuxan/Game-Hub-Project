import React, { useState } from "react";
import ItemSelecter from "./ItemSelecter";

const ItemTable = () => {
  const [items, setItems] = useState([
      { description: "milk", amount: 5, category: "groceries" },
      { description: "egg", amount: 5, category: "groceries" },
      { description: "electricity", amount: 100, category: "utilities" },
      { description: "milk", amount: 5, category: "groceries" },
    ]),
    [showingCategory, setShowingCategory] = useState("All");

  const categories = [...new Set(items.map((item) => item.category))];

  return (
    <>
      <ItemSelecter
        categories={categories}
        setShowingCategory={setShowingCategory}
      />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {showingCategory === "All"
            ? items.map((item, index) => (
                <tr key={index}>
                  <td>{item.description}</td>
                  <td>$ {item.amount}</td>
                  <td>{item.category}</td>
                  <td>
                    <button className="btn btn-danger" id={"delete-" + index}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : items
                .filter((item) => item.category == showingCategory)
                .map((item, index) => (
                  <tr key={index}>
                    <td>{item.description}</td>
                    <td>$ {item.amount}</td>
                    <td>{item.category}</td>
                    <td>
                      <button className="btn btn-danger" id={"delete-" + index}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
        </tbody>
      </table>
    </>
  );
};

export default ItemTable;
