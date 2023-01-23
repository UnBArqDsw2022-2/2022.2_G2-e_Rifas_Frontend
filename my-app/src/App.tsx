import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastyProvider } from "./context/ToastyContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CriarCampanha from "./pages/CriarCampanha";

function App() {
  return (
    <div className="App">
      <ToastyProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="criar-campanha" element={<CriarCampanha />} />
          </Routes>
        </BrowserRouter>
      </ToastyProvider>
    </div>
  );
}

export default App;
