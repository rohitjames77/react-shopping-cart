import React from "react";

function ContentPage({ isActive }) {
  console.log(isActive);
  
  
    return (
    <div
      id="content-page"
      className={`relative right-0 left-0 w-screen h-screen overflow-y-auto bg-gray-50 ${isActive.men ||isActive.women ||isActive.home ||isActive.beauty === true ? "bg-gray-400/25" : "bg-gray-50"}`}
    ></div>
  );
}

export default ContentPage;
