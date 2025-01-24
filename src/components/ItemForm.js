import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  // State for controlled inputs
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: uuid(), // Generate a unique ID
      name: name,
      category: category,
    };

    onItemFormSubmit(newItem); // Call the callback with the new item

    // Reset form fields
    setName("");
    setCategory("Produce");
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name} // Controlled input
          onChange={(e) => setName(e.target.value)} // Update state
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category} // Controlled select
          onChange={(e) => setCategory(e.target.value)} // Update state
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
