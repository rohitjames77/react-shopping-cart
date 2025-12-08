import React from "react";
import Header from "./Header/Header";
import ContentPage from "./Content/Content";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState({
    men: false,
    women: false,
    home: false,
    beauty: false,
  });
  return (
    <div className="overflow-x-hidden h-screen w-screen">
      <Header isActive={isActive} setIsActive={setIsActive} />
      <ContentPage isActive={isActive} />
    </div>
  );
}

export default App;
