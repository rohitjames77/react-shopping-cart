import React from "react";
import logo from "./assets/logo.svg";
import { FaGift } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function CartCheckOut() {
  const [logInSuccess, setLogInSuccess] = useState(false);
  const [isVisaSelected, setIsVisaSelected] = useState(false);
  const [isPaypalSelected, setIsPaypalSelected] = useState(false);

  const handleVisaClick = () => {
    setIsVisaSelected(true);
    setIsPaypalSelected(false);
  };
  const handlePaypalClick = () => {
    setIsVisaSelected(false);
    setIsPaypalSelected(true);
  };

  const handleBtnOnClick = () => {
    setLogInSuccess(true);
  };
  return (
    <div
      id="Cart-container"
      className="h-screen w-screen overflow-x-hidden bg-gray-100"
    >
      <div
        id="cart-header"
        className="h-[20%] w-full border-4 border-gray-100 bg-white flex justify-center"
      >
        <img
          src={logo}
          className="relative h-[18vh] w-[25%]"
          id="company-logo"
          alt="vyntra-logo"
        />
      </div>
      <div
        id="cart-content"
        className="h-[80%] w-full grid grid-cols-6 grid-rows-6 bg-gray-100 gap-4"
      >
        <div
          class={`row-start-2 col-start-2 col-end-4 h-[35%] w-[70%] rounded-xl flex items-center gap-2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded animate-pulse delay-3 ${logInSuccess ? "block" : "hidden"} `}
        >
          <span class="text-xl">✔</span>
          <span class="font-medium">Successfully logged in</span>
        </div>
        <div
          id="nav-header"
          className="row-start-1 col-start-1 col-end-5"
        ></div>
        <div
          id="shipping-info-container"
          className="flex flex-wrap row-start-2 row-end-6 col-start-1 col-end-5 w-[100%] h-[100vh] ml-10 bg-gray-100"
        >
          <div
            id="delivery-address-info-container"
            className=" w-full h-[95%] p-8 bg-gray-100"
          >
            <form
              action="/"
              id="delivery-payment-info-form"
              className=" w-[80%] h-[100%] p-8 ml-18 mt-2 bg-white rounded-xl "
              name="delivery-payment-info-form"
            >
              <span className="text-stone-600 text-xl font-poppins font-bold text-red-400">
                Delivery Address
              </span>
              <div
                id="delivery-info-container "
                className="shadow-2xl font-poppins grid grid-rows-5 grid-cols-5 gap-8 p-8 h-[60%] w-full "
              >
                <input
                  type="text"
                  id="delivery-first-name"
                  className="border-4 border-stone-300 row-start-1 col-start-1 font-bold col-end-3 rounded-lg"
                  placeholder="First name"
                />

                <input
                  type="text"
                  id="delivery-last-name"
                  className="border-4 border-stone-300 row-start-1 col-start-3 col-end-6 font-bold rounded-lg"
                  placeholder="Last name"
                />

                <input
                  type="tel"
                  id="delivery-mobile-no"
                  className="border-4 border-stone-300 row-start-2 col-start-1 col-end-3 font-bold rounded-lg"
                  placeholder="Mobile no"
                />

                <input
                  type="tel"
                  id="delivery-pincode"
                  className="border-4 border-stone-300 row-start-2 col-start-3 col-end-6 font-bold rounded-lg"
                  placeholder="Pin Code"
                />

                <input
                  type="text"
                  id="delivery-first-name"
                  className="border-4 border-stone-300 font-bold row-start-3 col-start-1 col-end-6 rounded-lg"
                  placeholder="House/Building/Tower/Block"
                />

                <input
                  type="text"
                  id="state-info"
                  placeholder="State"
                  className="border-4 border-stone-300 font-bold row-start-4 col-start-1 col-end-3 rounded-lg"
                />
                <input
                  type="text"
                  id="delivery-first-name"
                  placeholder="City"
                  className="border-4 border-stone-300 font-bold row-start-4 col-start-3 col-end-6 rounded-lg"
                />
                <label
                  htmlFor="checkbox-billing-address"
                  className=" row-start-5 col-start-1 col-end-4 ml-22 font-poppin font-bold text-gray-600 rounded-lg"
                >
                  Use for future delivery
                </label>
                <input
                  type="checkbox"
                  id="checkbox-billing-address"
                  className="row-start-5 col-start-1 h-2/4 font-bold rounded-lg "
                />
              </div>
              <div
                id="contact-info"
                className="shadow-2xl grid grid-rows-4 grid-cols-6 h-[20%] w-[78%] mt-4 p-4 bg-white rounded-lg "
              >
                <span className=" row-start-1 col-start-1 col-end-3 font-bold text-xl text-gray-600 ml-2">
                  Contact Info
                </span>

                <input
                  type="email"
                  className=" row-start-2 col-start-1 col-end-3 border-4 border-stone-300 w-[90%] ml-4 text-sm rounded-lg"
                  placeholder="Email for Order Tracking"
                />
                <input
                  type="tel"
                  className=" row-start-2 col-start-3 col-end-7 border-4 border-stone-300 w-[90%] ml-4 text-sm,.</ rounded-lg"
                  placeholder="Mobile number for alerts"
                />

                <input
                  type="checkbox"
                  id="text-alert-checkbox"
                  className="row-start-3 col-start-1 h-2/4 justify-items-end w-auto mt-4 ml-[75%] "
                />
                <span className="row-start-3 col-start-2 col-end-7 text-poppins text-lg text-gray-600 mt-4 ">
                  Get text alerts for your order on this number
                </span>
              </div>

              <div
                id="gift-options"
                className=" h-[10%] w-[48%] bg-white grid grid-cols-6 mt-4 grid-rows-6 shadow-2xl rounded-lg "
              >
                <input
                  type="checkbox"
                  name="gift-options"
                  id="gift-options"
                  className="row-start-3 h-[150%] "
                />
                <label
                  htmlFor="gift-options"
                  id="gift-options"
                  className="row-start-3 col-start-2 col-end-7 ml-8 text-lg "
                >
                  Order includes gift(s).
                </label>
                <FaGift
                  id="gift-option-icon"
                  className="row-start-3 col-start-2 h-[150%] ml-2 "
                />
              </div>
              <button
                type=""
                className=" relative left-[55%] bottom-[8%] h-[5vh] w-[20vw] row-start-3 row-end-6 col-start-4 col-end-8 bg-blue-500 text-white font-bold font-poppins rounded-lg p-2 active:translate-y-[4px] active:shadow-lg active:bg-blue-800 "
              >
                Proceed to Payments
              </button>
            </form>
          </div>
        </div>

        <div
          id="order-summary"
          className="shadow-2xl row-start-2 row-end-7 w-[80%] h-[50%] col-start-5 col-end-7 p-6 mt-8 mr-8  bg-white rounded-xl"
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
              <AiOutlineShoppingCart className=" row-start-1 col-start-1 h-1/2 justify-self-end place-self-center" />
              <span
                id="item-quantity-heading"
                className=" row-start-1 col-start-2 col-end-5 text-lg"
              >
                Item(s) in a cart
              </span>
              <span
                id="details-title"
                className="font-poppins text-xl text-blue-500 font-bold row-start-1 col-start-5"
              >
                Details
              </span>
            </div>
            <div
              id="price-tax-container"
              className="border-b-4 border-gray-400 border-t-4 grid grid-rows-5 grid-cols-3 w-[90%] ml-4 p-2 font-poppins"
            >
              <span id="sub-total-heading" className="row-start-1">
                Order Subtotal
              </span>
              <span id="sub-total-quantity" className="row-start-1 col-start-3">
                $SubTotal
              </span>
              <span id="discount-heading" className="row-start-2 col-start-1">
                Sale Discount
              </span>
              <span id="discount-quantity" className="row-start-2 col-start-3">
                $ Sale discount
              </span>
              <span
                id="net-subtotal-heading"
                className="row-start-3 col-start-1 col-end-3 font-bold"
              >
                Net Order Subtotal
              </span>
              <span
                id="net-subtotal-quantity"
                className="row-start-3 col-start-3"
              >
                $
              </span>
              <span id="shipping-heading" className="row-start-4 col-start-1">
                Shipping
              </span>
              <span id="shipping-price" className="row-start-4 col-start-3">
                $shipping price
              </span>
              <span
                id="pre-tax-total-heading"
                className="row-start-5 col-start-1 font-bold"
              >
                Pre-Tax Total
              </span>
              <span
                id="pre-tax-total-quantity"
                className="row-start-5 col-start-3"
              >
                $
              </span>
            </div>
          </div>
          <div
            id="total-saving-container"
            className="grid grid-rows-1 grid-cols-3  "
          >
            <span
              id="total-saving-heading"
              className="row-start-1 col-start-2 justify-self-start text-xl font-bold "
            >
              Total Savings
            </span>
            <span
              id="total-saving-quantity"
              className="row-start-1 col-start-3 justify-self-start text-lg text-red-600 font-bold  "
            >
              $
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
