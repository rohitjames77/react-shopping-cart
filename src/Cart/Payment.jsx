import React from 'react';
import visa from "./assets/visa.svg";
import masterCard from "./assets/mastercard.svg";
import paypal from "./assets/paypal.svg";
import VisaForm from "./VisaForm";
import PaypalForm from "./PaypalForm";

function Payment({isVisaSelected,isPaypalSelected,setIsVisaSelected,setIsPaypalSelected,setLogInSuccess,}) {

    const handleVisaclick = () =>{
  setIsVisaSelected(true);
  setIsPaypalSelected(false);
}
 const handlePaypalClick = () =>{
    setIsVisaSelected(false);
  setIsPaypalSelected(true);
}
  return (
      <div
              id="shipping-info-container"
              className="flex flex-wrap row-start-1 row-end-6 col-start-1 col-end-5 w-[100%] h-[100vh] ml-10 bg-gray-100"
            >
              <div
                id="delivery-address-info-container"
                className=" w-full h-[95%] p-8 bg-gray-100"
              >
                <form
                  action="/"
                  id="delivery-payment-info-form"
                  className=" w-[80%] h-[100%] p-8 ml-18 mt-2 bg-white rounded-xl grid grid-rows-16 grid-cols-10 "
                  name="delivery-payment-info-form"
                >
                  <span className="text-stone-600 text-xl font-poppins font-bold text-red-400 row-start-1 col-start-1 col-end-4">
                    Payment Method
                  </span>
                  <div
                    id="visa-payment-button-container"
                    className=" row-start-2 row-end-5 col-start-1 col-end-6 flex flex-col flex-wrap hover:shadow-2xl hover:translate-x-[-2px] active:translate-y-[4px] active:shadow-2xl"
                 onClick={handleVisaclick}
                 >
                    <img
                      src={visa}
                      alt="visa_img"
                      id="visa-img"
                      className="flex-1 h-full w-[50%]"
                    />
                    <img
                      src={masterCard}
                      alt="masterCard_img"
                      id="masterCard-img"
                      className=" flex-1 h-full w-[50%]"
                  
                    />
                  </div>
                  <div
                    id="paypal-payment-button-container"
                    className="row-start-2 row-end-5 col-start-6 col-end-11 hover:shadow-2xl hover:translate-x-[-2px] active:translate-y-[4px] active:shadow-2xl "
                  onClick={handlePaypalClick}
                  >
                    <img
                      src={paypal}
                      alt="visa_img"
                      id="visa-img"
                      className="flex-1 h-full w-full"
                    />
                  </div>
                 <VisaForm isVisaSelected={isVisaSelected}/>
    
                  <PaypalForm setLogInSuccess={setLogInSuccess} isPaypalSelected={isPaypalSelected}/>
    {/* <div id="expiration-date-container" className="border-4 border-gray-300 text-gray-500 rounded-xl row-start-10 row-end-12 col-start-1 col-end-8 ml-6 flex flex-wrap active:translate-y-[2px] active:shadow-xl active:bg-gray-300 active:text-white">
      <button type="button" id="expiration-date-btn" className=" w-[80%] h-full text-lg " onClick={handleOnclick}>Expiration Date</button>
      <div id="arrow-container">{isOpen?<MdKeyboardDoubleArrowUp className="justify-self-end h-8 w-8 mt-2" />:<MdOutlineKeyboardDoubleArrowDown className="justify-self-end h-8 w-8 mt-2" />}</div>
      </div>        
    <div id="expiration-date-container" className="border-4 border-gray-300 text-gray-500 rounded-xl row-start-10 row-end-12 col-start-8 col-end-15 flex ml-8  flex-wrap active:translate-y-[2px] active:shadow-xl active:bg-gray-300 active:text-white">
      <button type="button" id="expiration-date-btn" className=" w-[80%] h-full text-lg " onClick={handleOnclick}>Expiration Year</button>
      <div id="arrow-container">{isOpen?<MdKeyboardDoubleArrowUp className="justify-self-end h-8 w-8 mt-2" />:<MdOutlineKeyboardDoubleArrowDown className="justify-self-end h-8 w-8 mt-2" />}</div>
      </div>         */}            
                
                
                
                
                  <button
                    type="button"
                    id="payment-confirmation-button"
                    className="row-start-16 col-start-6 h-[5vh] w-[22vw] bg-blue-500 text-white font-bold font-poppins rounded-lg p-2 active:translate-y-[4px] active:shadow-lg active:bg-blue-800"
                  >
                    Pay 
                  </button>
                </form>
              </div>
            </div>
    
  )
}

export default Payment