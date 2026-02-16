import React from "react";
import { useState } from "react";
import CartNavHeader from "./CartNavHeader";
import CartInventories from "./CartInventories";
import Payment from "./Payment";
import Coupon from "./Coupon";
import OrderSummary from "../products/OrderSummary";
import { useOutletContext } from "react-router";
import PaymentSuccessNotification from "./PaymentSuccessNotification";
export default function CartCheckoutDelivery() {
const [logInSuccess,setLogInSuccess] = useState(false);
const[isVisaSelected,setIsVisaSelected]= useState(true);
const [isPaypalSelected,setIsPaypalSelected] = useState(false);
const[couponNotification,setCouponNotification]= useState(false);
const [isPaymentProceeded,setPaymentProceeded] = useState(false);
const [isPaymentSuccess,setPaymentSuccess]= useState(false);
const {selectedProductArr,quantity,setQuantity,setSelectedProductArr} = useOutletContext();
const [displayTotal,setTotal] =useState('')
 return (
     <div
      id="Cart-container"
      className="h-screen w-screen overflow-x-hidden bg-gray-100"
    >

      <div
        id="cart-content"
        className="h-[80%] w-[90%] grid grid-cols-6 grid-rows-6 bg-gray-100 gap-4"
      >
    <div className={`row-start-1 col-start-2 col-end-5 h-[35%] w-[70%] rounded-xl flex items-center gap-2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded animate-pulse delay-3 ${logInSuccess?'block':'hidden'} `} >
  <span className="text-xl">✔</span>
  <span className="font-medium">Successfully logged in</span>
</div>
       <CartNavHeader/>
{couponNotification?<div className=" bg-green-100 text-green-700 pl-6 rounded border border-green-300 row-start-1 col-start-5 col-end-7 w-[75%] h-[30%] m-2 ">
          ✅ Coupon submitted successfully
        </div>:<div className=" hidden  bg-green-100 text-green-700 pl-6 rounded border border-green-300 col-start-5 col-end-7 w-[75%] h-[30%] m-2">
          ✅ Coupon submitted successfully
        </div>}
        {isPaymentProceeded? <Payment isPaypalSelected={isPaypalSelected} isVisaSelected={isVisaSelected} setLogInSuccess={setLogInSuccess} setPaymentSuccess={setPaymentSuccess} setIsPaypalSelected={setIsPaypalSelected} setIsVisaSelected={setIsVisaSelected} />:<CartInventories selectedProductArr={selectedProductArr}  setPaymentSuccess={setPaymentSuccess} setSelectedProductArr={setSelectedProductArr} quantity={quantity} setQuantity={setQuantity} />}
    <PaymentSuccessNotification isPaymentSuccess={isPaymentSuccess} displayTotal={displayTotal}/>

<Coupon setCouponNotification={setCouponNotification}   />

<OrderSummary selectedProductArr={selectedProductArr} setPaymentProceeded={setPaymentProceeded} setTotal={setTotal}/>

      </div>
    </div>
  );


 }





 
