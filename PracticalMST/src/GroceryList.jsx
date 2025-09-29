import React from "react";

function GroceryList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} - {item.quantity}
        </li>
      ))}
    </ul>
  );
}

export default GroceryList;