import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";

// Import your components
import Dashboard from "./Components/Welcome";
import ViewPlayers from "./Components/ViewPlayers";
import AddPlayers from "./Components/AddPlayers";
import UpdatePlayers from "./Components/UpdatePlayers";
import DeletePlayers from "./Components/DeletePlayers";

// Main App with Routes
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      
      <Route path="/view-players" element={<ViewPlayers />} />
      <Route path="/add-players" element={<AddPlayers />} />
      <Route path="/update-players" element={<UpdatePlayers />} />
      <Route path="/delete-players" element={<DeletePlayers />} />
    </Routes>
  );
}

export default App;
