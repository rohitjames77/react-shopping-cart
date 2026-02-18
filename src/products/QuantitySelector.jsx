import React from "react";
import Price from "./Price";

function QuantitySelector({
  index,
  setSelectedProductArr,
  selectedProductArr,
}) {
  const currentProduct = selectedProductArr.find(
    (item) => item.id === index.id
  );

  const quantity = currentProduct.quantity;

  const increaseQuantity = () => {
    setSelectedProductArr((prev) =>
      prev.map((item) =>
        item.id === index.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = () => {
    setSelectedProductArr((prev) =>
      prev
        .map((item) =>
          item.id === index.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // remove if 0
    );
  };

  return (
    <div className="flex flex-2 " id="parent-container">
      <div
        id="quantity-selection-container"
        className=" flex flex-1 border-4 border-gray-200 mt-4 h-[30%] rounded-2xl"
      >
        <span
          id="negative-quantity-selector"
          onClick={decreaseQuantity}
          className=" flex-1 text-center text-lg"
        >
          -
        </span>
        <span id="quantity" className="flex-1 text-center text-xl">
          {quantity}
        </span>
        <span
          id="positive-quantity"
          onClick={increaseQuantity}
          className="text-center flex-1 text-lg"
        >
          +
        </span>
      </div>
      <Price index={index} quantity={quantity}  />
    </div>
  );
}

export default QuantitySelector;