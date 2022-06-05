import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const formData = {
    name: "",
    category: "Produce"
  }

  function handleChange(e) {
    let key = e.target.name;
    let value = e.target.value;
    formData[key] = value
  }
  function handleSubmit(e) {
    e.preventDefault();
    
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: formData.name,
      category: formData.category
    };
    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onSubmit={handleSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
