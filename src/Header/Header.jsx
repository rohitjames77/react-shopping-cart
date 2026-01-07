import React from "react";
import logo from "../assets/logo.svg";
import { FaRegUser } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import {
  DropDownMenuMen,
  DropDownWomen,
  DropDownHome,
  DropDownBeauty,
} from "./DropDownMenu";

export default function Header({ isActive, setIsActive,quantity,setQuantity}) {
  const handleMenMouseEnter = () => {
    setIsActive({ ...isActive, men: true });
  };
  const handleMenMouseleave = () => {
    setIsActive({ ...isActive, men: false });
  };

  const handleWomenMouseEnter = () => {
    setIsActive({ ...isActive, women: true });
    console.log(isActive);
  };
  const handleWomenMouseLeave = () => {
    setIsActive({ ...isActive, women: false });
    console.log(isActive);
  };

  const handleHomeMouseEnter = () => {
    setIsActive({ ...isActive, home: true });
    console.log(isActive);
  };
  const handleHomeMouseLeave = () => {
    setIsActive({ ...isActive, home: false });
    console.log(isActive);
  };
  const handleBeautyMouseEnter = () => {
    setIsActive({ ...isActive, beauty: true });
    console.log(isActive);
  };
  const handleBeautyMouseLeave = () => {
    setIsActive({ ...isActive, beauty: false });
    console.log(isActive);
  };

  return (
    <nav
      className="sticky top-0 z-50 flex flex-row w-screen h-[10vh] shadow-[0_0_16px_0_rgba(0,0,0,0.15)] gap-10 bg-stone-50 "
      id="header-container"
    >
      <img
        src={logo}
        className="relative h-[8vh] m-2"
        id="company-logo"
        alt="vyntra-logo"
      />
      <div
        id="categories-link-container z-20"
        className=" relative mt-10 font-poppins font-bold flex flex-row  gap-8 w-[30%] h-[50%] text-[1.1em] text-stone-400 ml-8 "
      >
        <div
          onMouseEnter={handleMenMouseEnter}
          onMouseLeave={handleMenMouseleave}
          id="men-category-container"
          className="relative h-[10vh] w-[5vw]"
        >
          <h2
            id="men-category"
            className="hover:border-b-4 border-red-400 w-fit hover:cursor-pointer "
          >
            MEN
          </h2>
          <DropDownMenuMen isActive={isActive} />
        </div>

        <div
          onMouseEnter={handleWomenMouseEnter}
          onMouseLeave={handleWomenMouseLeave}
          id="women-category-container"
          className="relative h-[10vh] w-[5vw] "
        >
          <h2
            id="women-category"
            className="hover:border-b-4 hover:border-fuchsia-500 w-fit hover:cursor-pointer"
          >
            WOMEN
          </h2>
          <DropDownWomen isActive={isActive} />
        </div>

        <div
          onMouseEnter={handleHomeMouseEnter}
          onMouseLeave={handleHomeMouseLeave}
          id="home-category-container"
          className="relative h-[10vh] w-[5vw] "
        >
          <h2
            id="home-category"
            className="hover:border-b-4 border-orange-500 w-fit hover:cursor-pointer"
          >
            HOME
          </h2>
          <DropDownHome isActive={isActive} />
        </div>

        <div
          onMouseEnter={handleBeautyMouseEnter}
          onMouseLeave={handleBeautyMouseLeave}
          id="beauty-category-container"
          className="relative h-[10vh] w-[5vw]"
        >
          <h2 id="beauty-category" className="hover:border-b-4 border-green-500 w-fit hover:cursor-pointer">
            BEAUTY
          </h2>
          <DropDownBeauty isActive={isActive} />
        </div>
      </div>

      <div
        id="bag-profile-container"
        className="absolute left-[93%] flex flex-rows text-[1.2em] w-[10%] font-poppins font-bold mt-8 text-stone-600  "
      >
        <div id="profile-container" className="flex flex-col gap-1 flex-wrap w-[30%] ">
          <FaRegUser className="h-[40%] w-[40%] ml-4 " />
          <span className="text-sm font-poppins font-bold ">
            Profile
          </span>
        </div>
        <div id="bag-container" className="grid grid-cols-5 grid-rows-2 w-[50%] ">
          <RiShoppingBag4Line className=" h-[80%] w-[80%] ml-2 row-start-1 col-start-1 col-end-3 " />
          <span className=" text-sm font-poppins font-bold ml-3 self-start row-start-2 col-start-1 ">
            Bag
          </span>
          <div id="cart-items-quantity" className="bg-red-400 rounded-[100%] w-[100%] h-[80%] row-start-1 col-start-3"><span id="quantity">{quantity}</span></div>
        </div>
      </div>
    </nav>
  );
}
