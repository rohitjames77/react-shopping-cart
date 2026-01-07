import React from "react";
function QuantitySelector({
  quantity,
  setQuantity,
  selectedProduct,
  setSelectedProduct,
  individualProductQuantity,
  setIndividualQuantity,
}) {
  console.log(individualProductQuantity);
  const handleNegQuantityClick = () => {
    if (quantity != 0) {
     setQuantity((quantity)=>(quantity-=1));
      console.log(selectedProduct);
    }
  };

  const handlePosQuantityClick = () => {
    if (quantity <= 4) {
      setQuantity((quantity)=>(quantity+=1));
    }
  };

  return (
    <div
      id="quantity-selection-container"
      className="flex flex-cols justify-center text-lg-bold mr-4 w-[100%] h-[100%] items-center text-bold text-2xl "
    >
      <span
        id="negative-quantity-selector"
        onClick={handleNegQuantityClick}
        className="flex-1 active:translate-y-[4px] "
      >
        -
      </span>
      <span id="quantity" className="flex-1 ml-2">
        {quantity}</span>
      <span
        id="positive-quantity"
        onClick={handlePosQuantityClick}
        className="flex-1 active:translate-y-[4px] "
      >
        +
      </span>
    </div>
  );
}

export default QuantitySelector;
