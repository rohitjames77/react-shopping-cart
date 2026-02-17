import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function OrderSummary({ selectedProductArr, setPaymentProceeded, setTotal }) {
  const orderTotal = selectedProductArr.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const netOrderTotal = Math.round(orderTotal - (orderTotal * 5) / 100);
  const grossTotal = netOrderTotal + 25;

  const handleProceedToPayment = () => {
    setTotal(grossTotal);
    setPaymentProceeded(true);
  };

  return (
    <div
      id="order-summary"
      className="shadow-2xl row-start-3 row-end-7 w-[80%] h-[100%] col-start-5 col-end-7 p-6 mt-8 mr-8  bg-white rounded-xl"
    >
      <div
        id="summary-header-container"
        className="border-b-4 w-[90%]  ml-4 p-2 flex flex-col order-1"
      >
        <h1
          id="order-summary-title"
          className="text-3xl font-poppins font-bold self-center "
        >
          Order Summary
        </h1>
      </div>
      <div
        id="total-price-discount-container"
        className="flex flex-col order-2 "
      >
        <div
          id="cart-quantity-heading-container"
          className="grid grid-rows-1 grid-cols-6"
        >
          <AiOutlineShoppingCart className=" row-start-1 col-start-1 h-1/2 justify-self-end place-self-center mr-8" />
          <span
            id="item-quantity-heading"
            className=" row-start-1 col-start-1 col-end-5 text-lg ml-10"
          >
            Item(s) in a cart
          </span>
          <span
            id="details-title"
            className="font-poppins text-xl text-blue-500 font-bold row-start-1 col-start-5 mr-2"
          >
            Details
          </span>
        </div>
        <div
          id="price-tax-container"
          className="border-b-4 border-gray-400 border-t-4 grid grid-rows-5 grid-cols-3 w-[90%] ml-4 p-2 font-poppins"
        >
          <label id="sub-total-heading" className="row-start-1 ">
            Order Subtotal
          </label>
          <span
            id="sub-total-quantity"
            className="row-start-1 text-red-500 col-start-3 ml-4"
          >
            $ {Math.round(orderTotal)}.00
          </span>
          <span id="discount-heading" className="row-start-2 col-start-1">
            Sale Discount
          </span>
          <span
            id="discount-quantity"
            className="row-start-2 col-start-3 text-green-500 ml-4"
          >
             {orderTotal > 0 ? "$ 5 %" : "0"}
          </span>
          <span
            id="net-subtotal-heading"
            className="row-start-3 col-start-1 col-end-3 font-bold"
          >
            Net Order Subtotal
          </span>
          <span
            id="net-subtotal-quantity"
            className="row-start-3 col-start-3 text-red-500 ml-4"
          >
            $ {netOrderTotal}.00
          </span>
          <span id="shipping-heading" className="row-start-4 col-start-1">
            Shipping
          </span>
          <span
            id="shipping-price"
            className="row-start-4 col-start-3 text-red-500 ml-4"
          >
            $ {orderTotal > 0 ? "25.00" : "00.00"}
          </span>
        </div>
      </div>
      <div
        id="total-saving-container"
        className="grid grid-rows-1 grid-cols-3 border-b-4 w-[90%] ml-4  "
      >
        <span
          id="grand-total-heading"
          className="row-start-1 col-start-1 ml-2 mb-2 justify-self-start text-xl font-bold "
        >
          Grand Total
        </span>
        <span
          id="grand-total"
          className="row-start-1 col-start-3 mb-2 justify-self-start text-lg text-red-600 font-bold  "
        >
          $ {orderTotal > 0 ? grossTotal : "00.00"}.00
        </span>
      </div>

      <button
        type="button"
        onClick={handleProceedToPayment}
        className="relative top-[30%] flex text-center font-bold justify-center text-white bg-blue-500 rounded-xl h-[10%] w-full text-xl active:bg-white active:text-blue-500 active:translate-y-[4px] p-2 "
        id="proceed-payment"
      >
        Proceed to Payment
      </button>
    </div>
  );
}

export default OrderSummary;
