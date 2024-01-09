import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./component/Products";
import Cart from "./component/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;
