import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./componets/Header";
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <CartProvider></CartProvider>
  );
}

export default App;
