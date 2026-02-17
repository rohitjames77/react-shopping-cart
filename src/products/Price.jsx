import React from "react";

function Price({ index, individualQuantity }) {
  return (
    <div id="price-container" className="flex-1 text-center items-center py-4">
      <span id="" className="font-bold text-2xl font-poppins ">
        ${" "}
        {individualQuantity > 0
          ? individualQuantity * index.price
          : index.price}
      </span>
    </div>
  );
}

export default Price;
