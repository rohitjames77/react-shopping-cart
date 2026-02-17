import React from "react";
import { useState } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

function VisaForm({ isVisaSelected }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnclick = () => {
    setIsOpen(true);
  };

  return (
    <div
      id="card-payment-visa-form-container"
      className={`shadow-xl row-start-6 row-end-15 col-start-1 col-end-11 grid grid-rows-15 grid-cols-15 p-2 ${!isVisaSelected ? "hidden" : "block"}`}
    >
      <input
        type="text"
        id="cardholder-name"
        placeholder="Name on card"
        className=" h-full w-full border-4 border-gray-200 rounded-xl row-start-1 row-end-3 col-start-1 p-2 col-end-15 ml-4 mr-2"
      />
      <input
        type="tel"
        id="card-number"
        placeholder="Card number"
        className=" h-full w-full border-4 border-gray-200 rounded-xl row-start-4 row-end-6 col-start-1 p-2 col-end-15 ml-4 "
      />
      <input
        type="tel"
        id="card-cvv"
        placeholder="CVV code "
        className=" h-full w-full border-4 border-gray-200 rounded-xl row-start-7 row-end-9 col-start-1 p-2 col-end-15 ml-4 "
      />
      <div
        id="expiration-date-container"
        className="border-4 border-gray-300 text-gray-500 rounded-xl row-start-10 row-end-12 col-start-1 col-end-8 ml-6 flex flex-wrap active:translate-y-[2px] active:shadow-xl active:bg-gray-300 active:text-white"
      >
        <label htmlFor="expiration-date-btn"></label>
        <input
          placeholder="Expiration Date"
          type="date"
          id="expiration-date-btn"
          className=" w-[80%] h-full text-lg "
          onClick={handleOnclick}
          onKeyDown={(e) => {
            const input = e.target;
            const currentValue = input.value;
            if (e.key.match(/[0-9/-]/)) {
              const parts = currentValue.split("-");
              if (parts.length === 3 && parts[0].length >= 4) {
                e.preventDefault();
                return;
              }
              e.stopPropagation();
            }
          }}
        />

        <div id="arrow-container">
          {isOpen ? (
            <MdKeyboardDoubleArrowUp className="justify-self-end h-8 w-8 mt-2" />
          ) : (
            <MdOutlineKeyboardDoubleArrowDown className="justify-self-end h-8 w-8 mt-2" />
          )}
        </div>
      </div>
      <div
        id="expiration-date-container"
        className="border-4 border-gray-300 text-gray-500 rounded-xl row-start-10 row-end-12 col-start-8 col-end-15 flex ml-8  flex-wrap active:translate-y-[2px] active:shadow-xl active:bg-gray-300 active:text-white"
      >
        <label htmlFor="expiration-year-btn"></label>
        <input
          placeholder="Expiration year"
          type="date"
          id="expiration-year-btn"
          className=" w-[80%] h-full text-lg "
          onClick={handleOnclick}
          onKeyDown={(e) => {
            const input = e.target;
            const currentValue = input.value;
            if (e.key.match(/[0-9/-]/)) {
              const parts = currentValue.split("-");
              if (parts.length === 3 && parts[0].length >= 4) {
                e.preventDefault();
                return;
              }
              e.stopPropagation();
            }
          }}
        />
        <div id="arrow-container">
          {isOpen ? (
            <MdKeyboardDoubleArrowUp className="justify-self-end h-8 w-8 mt-2" />
          ) : (
            <MdOutlineKeyboardDoubleArrowDown className="justify-self-end h-8 w-8 mt-2" />
          )}
        </div>
      </div>
    </div>
  );
}

export default VisaForm;
