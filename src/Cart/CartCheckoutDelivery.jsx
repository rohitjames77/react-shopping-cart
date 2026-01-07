import React from "react";
import { useState } from "react";
import logo from "../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import visa from "../assets/visa.svg";
import masterCard from "../assets/mastercard.svg";
import paypal from "../assets/paypal.svg";
import VisaForm from "./VisaForm";
import PaypalForm from "./PaypalForm";
import CartNavHeader from "./CartNavHeader";
import CartInventories from "./CartInventories";
import Payment from "./Payment";
import Coupon from "./Coupon";

export default function CartCheckoutDelivery() {
const [logInSuccess,setLogInSuccess] = useState(false);
const[isVisaSelected,setIsVisaSelected]= useState(false);
const [isPaypalSelected,setIsPaypalSelected] = useState(false);
const[couponNotification,setCouponNotification]= useState(false);


 return (
     <div
      id="Cart-container"
      className="h-screen w-screen overflow-x-hidden bg-gray-100"
    >

      <div
        id="cart-content"
        className="h-[80%] w-[90%] grid grid-cols-6 grid-rows-6 bg-gray-100 gap-4"
      >
    <div className={`row-start-2 col-start-2 col-end-4 h-[35%] w-[70%] rounded-xl flex items-center gap-2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded animate-pulse delay-3 ${logInSuccess?'block':'hidden'} `} >
  <span className="text-xl">✔</span>
  <span className="font-medium">Successfully logged in</span>
</div>
       <CartNavHeader/>
{couponNotification?<div className=" bg-green-100 text-green-700 pl-6 rounded border border-green-300 row-start-1 col-start-5 col-end-7 w-[75%] h-[30%] m-2 ">
          ✅ Coupon submitted successfully
        </div>:<div className=" hidden  bg-green-100 text-green-700 pl-6 rounded border border-green-300 col-start-5 col-end-7 w-[75%] h-[30%] m-2">
          ✅ Coupon submitted successfully
        </div>}
<CartInventories/>
{/* <Payment isPaypalSelected={isPaypalSelected} isVisaSelected={isVisaSelected} setLogInSuccess={setLogInSuccess} setIsPaypalSelected={setIsPaypalSelected} setIsVisaSelected={setIsVisaSelected} /> */}
<Coupon setCouponNotification={setCouponNotification}   />








      
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





 
