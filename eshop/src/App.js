import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./componets/Header";
import "./pages/HomePage.js";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <Header searchTerm={searchTerm} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
