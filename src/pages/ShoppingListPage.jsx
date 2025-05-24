// pages/ShoppingListPage.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatWidget from "../components/chat/ChatWidget";

import ShoppingForm from "../components/shopping/ShoppingForm";
import ShoppingList from "../components/shopping/ShoppingList";
import FilterBar from "../components/shopping/FilterBar";
import SortControls from "../components/shopping/SortControls";
import StatsBar from "../components/shopping/StatsBar";

import { getLocalData, saveLocalData } from "../utils/localStorageHelpers";
import { applyFiltersAndSort } from "../utils/itemHelpers";

const STORAGE_KEY = "shopping-list-app-data";

export default function ShoppingListPage() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("date");
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    const data = getLocalData(STORAGE_KEY, []);
    setItems(data);
  }, []);

  const updateStorage = (newItems) => {
    saveLocalData(STORAGE_KEY, newItems);
    setItems(newItems);
  };

  const handleAddOrUpdate = (item) => {
    let updatedItems = [...items];
    if (editingItem) {
      updatedItems = updatedItems.map((i) =>
        i.id === item.id ? { ...item } : i
      );
    } else {
      updatedItems.push(item);
    }
    updateStorage(updatedItems);
    setEditingItem(null);
  };

  const handleDelete = (id) => {
    const updated = items.filter((item) => item.id !== id);
    updateStorage(updated);
  };

  const handleTogglePurchased = (id) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, purchased: !item.purchased } : item
    );
    updateStorage(updated);
  };

  const filteredItems = applyFiltersAndSort(items, filter, sort);

  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <Navbar />
      <main className="container my-4 flex-grow-1">
        <h2 className="fw-bold mb-4 text-center">🛒 My Shopping List</h2>

        <ShoppingForm
          onSave={handleAddOrUpdate}
          editingItem={editingItem}
          setEditingItem={setEditingItem}
        />

        <FilterBar filter={filter} setFilter={setFilter} />
        <SortControls sort={sort} setSort={setSort} />
        <StatsBar items={items} />

        {filteredItems.length > 0 ? (
          <ShoppingList
            items={filteredItems}
            onEdit={setEditingItem}
            onDelete={handleDelete}
            onTogglePurchased={handleTogglePurchased}
          />
        ) : (
          <div className="text-center py-5">
            <img
              src="/empty-cart.svg"
              alt="Empty list illustration"
              className="img-fluid"
              style={{ maxWidth: "400px", marginBottom: "1rem" }}
            />
            <p className="fs-5 text-muted">Your shopping list is empty.</p>
          </div>
        )}
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
