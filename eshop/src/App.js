import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./componets/Header";
/* import { fetchProducts } from "../utils/Functions"; */

function App() {
  return (
    <div className="App">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
