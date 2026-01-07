import React from "react";

function CartInventories() {
  return (
    <div
      id="cart-inventories-container"
      className="row-start-1 row-end-8 col-start-1 col-end-5 bg-white h-[100%] w-[80%] ml-10 mt-10"
    >
      <div className="border-b-2 border-gray-300 w-[90%] ml-8 mt-4">
        <h1 className="font-bold font-poppins text-4xl p-2">Shopping Bag</h1>
      </div>
      <div id="cart-items-container"className="flex ml-10 mt-4">
        <span className="flex-2 font-poppins">Product</span>
        <span className=" flex-1 font-poppins">Quantity</span>
        <span className="flex-1 font-poppins ">Price</span>
      </div>
    </div>
  );
}

export default CartInventories;
