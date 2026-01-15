import React from "react";
import logo from "../assets/logo.svg";
import { FaRegUser } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { Link } from "react-router";
import {
  DropDownMenuMen,
  DropDownWomen,
  DropDownHome,
  DropDownBeauty,
} from "./DropDownMenu";

export default function Header({ isActive, setIsActive,quantity}) {
  const handleMenMouseEnter = () => {
    setIsActive({ ...isActive, men: true,women:false,home:false,beauty:false });
  };
  const handleMenMouseleave = () => {
    setIsActive({ ...isActive, men: false });
  };

  const handleWomenMouseEnter = () => {
    setIsActive({ ...isActive, women: true,men:false,home:false,beauty:false });
  };
  const handleWomenMouseLeave = () => {
    setIsActive({ ...isActive, women: false });
  };

  const handleHomeMouseEnter = () => {
    setIsActive({ ...isActive, home: true,women:false,men:false,beauty:false });
  };
  const handleHomeMouseLeave = () => {
    setIsActive({ ...isActive, home: false });
  };
  const handleBeautyMouseEnter = () => {
    setIsActive({ ...isActive, beauty: true,women:false,home:false,men:false });
  };
  const handleBeautyMouseLeave = () => {
    setIsActive({ ...isActive, beauty: false });
  };


  return (
    <nav
      className="sticky top-0 z-50 flex flex-row w-screen h-[10vh] shadow-[0_0_16px_0_rgba(0,0,0,0.15)] gap-10 bg-stone-50 "
      id="header-container"
    >
      <Link to="/content/home">
      <img
        src={logo}
        className="relative h-[8vh] m-2"
        id="company-logo"
        alt="vyntra-logo"
      />
      </Link>
      <div
        id="categories-link-container z-20"
        className=" relative mt-10 font-poppins font-bold flex flex-row gap-8 w-[40%] h-[50%] text-[1.1em] text-stone-400 ml-8 "
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
          className="relative h-[5vh] w-[5vw] "
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
          className="h-[5vh] w-[5vw] "
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
          className="h-[5vh] w-[5vw]"
        >
          <h2 id="beauty-category" className="hover:border-b-4 border-green-500 w-fit hover:cursor-pointer">
            BEAUTY
          </h2>
          <DropDownBeauty isActive={isActive} />
        </div>
      </div>

      <div
        id="routes-container"
        className=" flex flex-rows text-[1.5em] w-[35%] h-[50%] font-poppins font-bold mt-10 ml-8 text-stone-500 text-lg"
      >
<Link className=" flex-2 hover:text-gray-300 " to="/content/home" >Home</Link>
 <Link className="  flex-2 hover:text-gray-300" to="/content/products">Product</Link>
        <Link className=" flex flex-2 hover:text-gray-300" to="/content/cart" >Shopping Bag<RiShoppingBag4Line className="h-[30px]" />
 <span className={` h-[60%] flex-1 mr-4 ${quantity> 0 ? 'block' :'hidden'}`}><span id="cart-items-quantity" className="bg-red-400 rounded-[100%] w-[100%] h-[100% ] text-white">{quantity}</span> 
        
      </span>

</Link>          

</div>
    </nav>
  );
}