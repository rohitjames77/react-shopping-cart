import React from "react";
import { useState } from "react";
import Price from "./Price";
import OrderSummary from "./OrderSummary";

function QuantitySelector({
  index,
  setSelectedProductArr,
  selectedProductArr,
  setQuantity,
}) {
  const [individualQuantity, setIndividualQuantity] = useState(1);
  console.log(individualQuantity);
  const handleQuantityIncrease = () => {
    if (individualQuantity > 0) {
      setSelectedProductArr((prev) =>
        prev.map((item) =>
          item.id === index.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    }
  };

  const handleQuantityDecrease = () => {
    if (individualQuantity > 0) {
      setSelectedProductArr((prev) =>
        prev.map((item) =>
          item.id === index.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      );
    }
  };

  const handleNegQuantityClick = () => {
    if (individualQuantity > 0) {
      setIndividualQuantity((prev) => (prev -= 1));
      handleQuantityDecrease();
    }
  };

  const handlePosQuantityClick = () => {
    if (individualQuantity <= 4) {
      setIndividualQuantity((prev) => (prev += 1));
      handleQuantityIncrease();
      console.log(selectedProductArr);
    }
  };

  return (
    <div className="flex flex-2 " id="parent-container">
      <div
        id="quantity-selection-container"
        className=" flex flex-1 border-4 border-gray-200 mt-4 h-[30%] rounded-2xl"
      >
        <span
          id="negative-quantity-selector"
          onClick={handleNegQuantityClick}
          className=" flex-1 text-center text-lg"
        >
          -
        </span>
        <span id="quantity" className="flex-1 text-center text-xl">
          {individualQuantity}{" "}
        </span>
        <span
          id="positive-quantity"
          onClick={handlePosQuantityClick}
          className="text-center flex-1 text-lg"
        >
          +
        </span>
      </div>
      <Price index={index} individualQuantity={individualQuantity} />
    </div>
  );
}

export default QuantitySelector;
