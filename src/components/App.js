import React, { useState } from "react";
import Filter from "./Filter";

const App = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const items = [
    { name: "Lettuce", category: "Produce" },
    { name: "Yogurt", category: "Dairy" },
    { name: "Swiss Cheese", category: "Dairy" },
    { name: "String Cheese", category: "Dairy" },
    { name: "Cake", category: "Dessert" },
  ];

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  // Filter items based on search and category
  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Filter
        search={search}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.name}>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
