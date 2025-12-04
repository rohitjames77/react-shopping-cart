import React from "react";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <div
      className="fixed flex flex-row w-full h-[10%] shadow-[0_0_16px_0_rgba(0,0,0,0.15)] gap-10"
      id="header-container"
    >
      <img
        src={logo}
        className="relative h-[8vh] m-2"
        id="company-logo"
        alt="vyntra-logo"
      />
      <div
        id="categories-link-container"
        className=" relative mt-10 font-poppins font-bold flex gap-8 w-fit h-[50%] text-[1.8em] text-stone-400 align-end"
      >
        <h2 id="men-category" className="">
          MEN
        </h2>
        <h2 id="women-category" className="">
          WOMEN
        </h2>
        <h2 id="electronics-category" className="">
          ELECTRONICS
        </h2>
        <h2 id="home-category" className="">
          HOME
        </h2>
        <h2 id="furniture-category" className="">
          FURNITURE
        </h2>
        <h2 id="beauty-category" className="">
          BEAUTY
        </h2>
      </div>
    </div>
  );
}
