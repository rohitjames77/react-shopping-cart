import logo from "../assets/hypecart-logo2.svg";
import { RiShoppingBag4Line } from "react-icons/ri";
import { Link } from "react-router";
import {
  DropDownMenuMen,
  DropDownWomen,
  DropDownBeauty,
} from "./DropDownMenu";

export default function Header({ isActive, setIsActive, quantity }) {
  const handleMenMouseEnter = () => {
    setIsActive({
      ...isActive,
      men: true,
      women: false,
      home: false,
      beauty: false,
    });
  };
  const handleMenMouseleave = () => {
    setIsActive({ ...isActive, men: false });
  };

  const handleWomenMouseEnter = () => {
    setIsActive({
      ...isActive,
      women: true,
      men: false,
      home: false,
      beauty: false,
    });
  };
  const handleWomenMouseLeave = () => {
    setIsActive({ ...isActive, women: false });
  };

  const handleBeautyMouseEnter = () => {
    setIsActive({
      ...isActive,
      beauty: true,
      women: false,
      home: false,
      men: false,
    });
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
        id="categories-link-container"
        className=" relative mt-12 font-poppins font-bold flex flex-row  w-[20%] h-[50%] text-[1.1em] text-stone-400 ml-8 "
      >
        <div
          onMouseEnter={handleMenMouseEnter}
          onMouseLeave={handleMenMouseleave}
          id="men-category-container"
          className="relative h-[5vh] w-[5vw] flex-1"
        >
          <h2
            id="men-category"
            className="hover:border-b-4 border-red-400 w-fit hover:cursor-pointer ml-4 "
          >
            MEN
          </h2>
          <DropDownMenuMen isActive={isActive} />
        </div>

        <div
          onMouseEnter={handleWomenMouseEnter}
          onMouseLeave={handleWomenMouseLeave}
          id="women-category-container"
          className="relative h-[5vh] w-[5vw] flex-1 "
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
          onMouseEnter={handleBeautyMouseEnter}
          onMouseLeave={handleBeautyMouseLeave}
          id="beauty-category-container"
          className="h-[5vh] w-[5vw] flex-1"
        >
          <h2
            id="beauty-category"
            className="hover:border-b-4 hover:border-green-500 w-fit hover:cursor-pointer "
          >
            BEAUTY
          </h2>
          <DropDownBeauty isActive={isActive} />
        </div>
      </div>

      <div id="Search-bar-container" className="mt-10 w-[35%] h-[40%] flex ">
        <input
          type="search"
          name="product-search-bar"
          id="product-search-bar"
          placeholder="Search"
          className="flex-1 bg-gray-200 rounded-xl focus:outline-none "
        />
      </div>

      <div
        id="routes-container"
        className=" flex flex-rows text-[1.4em] w-[30%] h-[50%] font-poppins font-bold mt-10 ml-8 text-stone-500"
      >
        <Link className=" flex-1 hover:text-gray-300 " to="/content/home">
          Home
        </Link>
        <Link className="  flex-1 hover:text-gray-300" to="/content/products">
          Product
        </Link>
        <Link className=" flex flex-1 hover:text-gray-300" to="/content/cart">
          Cart
          <RiShoppingBag4Line className="h-[18px] mt-2" />
          <span
            className={`h-[50%] flex-1 mr-2 ${quantity > 0 ? "block" : "hidden"}`}
          >
            <div
              id="cart-items-quantity"
              className="bg-red-400 rounded-full h-[100%] w-[20px] h-[20px] text-white flex items-center justify-center"
            >
              <p>{quantity}</p>
            </div>
          </span>
        </Link>
      </div>
    </nav>
  );
}
