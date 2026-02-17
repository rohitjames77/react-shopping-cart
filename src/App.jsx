import React from "react";
import Header from "./Header/Header";
import { useState } from "react";
import { Outlet } from "react-router";

function App() {
  const [isActive, setIsActive] = useState({
    men: false,
    women: false,
    home: false,
    beauty: false,
  });
  const [quantity, setQuantity] = useState(0);
  return (
    <div className=" min-h-screen overflow-x-hidden h-screen w-screen">
      <Header
        isActive={isActive}
        setIsActive={setIsActive}
        quantity={quantity}
      />
      <Outlet context={{ isActive, quantity, setQuantity }} />
    </div>
  );
}

export default App;
