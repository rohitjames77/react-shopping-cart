import React from "react";
import QuantitySelector from "../products/QuantitySelector";
function CartInventories({
  selectedProductArr,
  setQuantity,
  setSelectedProductArr,
}) {
  console.log(selectedProductArr[0]?.price);

  return (
    <div
      id="cart-inventories-container"
      className="row-start-1 row-end-8 col-start-1 col-end-5 bg-white h-[100%] overflow-y-auto w-[80%] ml-10 mt-10"
    >
      <div className="border-b-2 border-gray-300 w-[90%] ml-8 mt-4">
        <h1 className="font-bold font-poppins text-4xl p-2">Shopping Bag</h1>
      </div>
      <div id="cart-items-container" className="flex ml-10 mt-4">
        <span className="flex-2 font-poppins">Product</span>
        <span className=" flex-1 font-poppins">Quantity</span>
        <span className="flex-1 font-poppins ">Price</span>
      </div>
      <div
        id="selected-product-card-container"
        className="flex flex-cols flex-wrap flex-1 w-[90%] ml-8"
      >
        {selectedProductArr.length === 0 ? (
          <span className="text-bold text-2xl mt-8 ml-8 text-center justify-center text-red-500">
            Your shopping bag is empty...
          </span>
        ) : (
          selectedProductArr.map((index) => (
            <div
              id="selected-product"
              className="border-2 border-gray-300 rounded-xl w-[100%] h-[20%] mt-2 flex "
              key={index.id}
            >
              <div
                id="product-description"
                className="flex-2 flex flex-wrap items-center"
              >
                <div
                  id="img-container"
                  className="bg-gray-200 flex flex-wrap flex-1 w-28 h-28"
                >
                  <img
                    src={index.image}
                    alt="selectedProductImg"
                    className="h-[80%] w-[80%] bg-white rounded-xl relative top-[10%] left-[10%]"
                    id="selected-product-Img"
                  />
                </div>
                <div
                  id="span-container"
                  className="flex flex-wrap flex-col flex-2 h-[100%] w-[100%]"
                >
                  <span
                    className="flex-1 text-sm text-center h-[50%] w-[100%]"
                    id="selected-product-title"
                  >
                    {index.title}
                  </span>
                  <span
                    className="flex-1 text-xs text-center h-[50%] w-[100%]"
                    id="selected-product-rating"
                  >
                    Ratings:{index.rating}
                  </span>
                </div>
              </div>

              <QuantitySelector
                selectedProductArr={selectedProductArr}
                setQuantity={setQuantity}
                setSelectedProductArr={setSelectedProductArr}
                index={index}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CartInventories;
