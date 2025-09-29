import React, { useState } from "react";
import GroceryList from "./GroceryList";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Milk", quantity: 2 },
    { id: 2, name: "Eggs", quantity: 12 },
    { id: 3, name: "Bread", quantity: 1 },
  ]);

  const [newItem, setNewItem] = useState({ name: "", quantity: "" });

  const handleAdd = () => {
    const { name, quantity } = newItem; // destructuring
    if (!name || !quantity) return;
  
    setItems(prevItems => [...prevItems, { id: Date.now(), name, quantity: +quantity }]); 
    setNewItem({ name: "", quantity: "" });
  };

  return (
    <div className="app">
      <h1>Grocery List</h1>
      <div className="add-item">
        <input
          type="text"
          placeholder="Item name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <GroceryList items={items} />
    </div>
  );
}

export default App;