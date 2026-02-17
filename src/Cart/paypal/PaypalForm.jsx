import React from "react";
function PaypalForm({ setLogInSuccess, isPaypalSelected }) {
  const handleBtnOnClick = () => {
    setLogInSuccess(true);
    setTimeout(() => {
      setLogInSuccess(false);
    }, 3000);
  };
  return (
    <div
      id="card-payment-paypal-form-container"
      className={` shadow-xl row-start-6 row-end-15 col-start-1 col-end-11 grid grid-rows-15 grid-cols-15 p-2 ${isPaypalSelected ? "block" : "hidden"}`}
    >
      <label
        htmlFor="user-email-id"
        id="email-id"
        className="row-start-1 col-start-1 ml-6"
      >
        Email
      </label>
      <input
        type="text"
        id="user-email-id"
        placeholder="Enter your Email"
        className=" h-full w-full border-4 border-gray-200 rounded-xl row-start-2 row-end-4 col-start-1 p-2 col-end-15 ml-4 mr-2"
      />
      <label
        htmlFor="user-email-id"
        id="email-id"
        className="row-start-5 col-start-1 ml-6"
      >
        Password
      </label>
      <span
        id="forgot-password-title"
        className="row-start-5 col-start-12 col-end-16 ml-12 hover:underline"
      >
        Forgot Password?
      </span>
      <input
        type="password"
        id="user-password"
        placeholder="Enter your password"
        className=" h-full w-full border-4 border-gray-200 rounded-xl row-start-6 row-end-8 col-start-1 p-2 col-end-15 ml-4 "
      />
      <button
        type="button"
        id="paypal-login-btn"
        className="bg-blue-500 row-start-13 row-end-15 col-start-12 col-end-15 rounded-lg text-xl text-white font-bold h-[100%] active:translate-y-[4px] active:shadow-lg active:bg-blue-800"
        onClick={handleBtnOnClick}
      >
        Log In
      </button>
    </div>
  );
}

export default PaypalForm;
