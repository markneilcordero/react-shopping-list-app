// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Shared Layout Components
import ChatWidget from "./components/chat/ChatWidget";

// Pages
import LandingPage from "./pages/LandingPage";
import ShoppingListPage from "./pages/ShoppingListPage";
import DashboardPage from "./pages/DashboardPage";
import SettingsPage from "./pages/SettingsPage";

export default function App() {
  return (
    <Router>
      <div className="app-container d-flex flex-column min-vh-100">
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/shopping-list" element={<ShoppingListPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
        <ChatWidget />
      </div>
    </Router>
  );
}
