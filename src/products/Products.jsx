import { useState } from "react";
import { IoBagCheckOutline } from "react-icons/io5";
import { useOutletContext } from "react-router";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export default function Products() {
  const {
    storeApiData,
    setStoreApiData,
    quantity,
    setQuantity,
    setSelectedProductArr,
  } = useOutletContext();
  return (
    <div
      id="products-container"
      className="sticky grid grid-cols-5 grid-rows-7 h-[100vh] "
    >
      <ProductPageHeader />
      <ProductSideBar />
      <ProductPage
        storeApiData={storeApiData}
        setStoreApiData={setStoreApiData}
        quantity={quantity}
        setQuantity={setQuantity}
        setSelectedProductArr={setSelectedProductArr}
      />
    </div>
  );
}

export function ProductPageHeader() {
  return (
    <div
      id="info-header "
      className="  bg-white h-[100%] w-full row-start-1 col-start-1 col-end-6 border-b-2 border-stone-200 grid grid-rows-20 grid-cols-20"
    >
      <span className="font-bold row-start-2 text-xl row-end-4 col-start-1 col-end-5">
        home/products
      </span>
      <span
        id="category-heading"
        className="row-start-8 row-end-10 col-start-1 col-end-5"
      >
        <b className="text-xl">Products</b>-{" "}
        <i className="text-gray-500">20-items</i>
      </span>
      <span id="side-bar-heading" className="font-bold row-start-16 text-lg ">
        Filters
      </span>
      <div id="product-description-container"></div>

      <SortDropdown />
    </div>
  );
}

export function ProductSideBar() {
  const [maxprice, setMaxPrice] = useState(10000);

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  return (
    <div
      id="side-bar"
      className="bg-stone-100 h-[100%] w-full col-start-1 col-end-2 row-start-2 row-end-8 flex flex-cols flex-wrap object-cover border-r-2 border-stone-200"
    >
      <div
        id="brand-categories"
        className=" h-[20%] w-[100%] border-stone-200 font-poppins text-gray-600 hover:text-black flex flex-col "
      >
        BRAND
        <ul
          className="text-sm flex-cols flex-1 m-2 pb-2 flex-1 border-b-2 border-gray-200"
          id="brand-categories-list"
        >
          <li className="text-sm flex-1 text-gray-500 hover:text-black ">
            <input type="checkbox" name="T-shirt" className="  mr-2" id="" />
            Virelle{" "}
          </li>
          <li className="text-sm flex-1 text-gray-500 hover:text-black ">
            <input type="checkbox" name="" id="" className="  mr-2" /> Noir &
            Thread
          </li>
          <li className="text-sm flex-1 text-gray-500 hover:text-black ">
            <input type="checkbox" name="" id="" className="  mr-2" /> Aurex
            Studio
          </li>
          <li className="text-sm flex-1 text-gray-500 hover:text-black ">
            <input type="checkbox" name="" id="" className="  mr-2" />
            Velmora
          </li>
          <li className="text-sm flex-1 text-gray-500 hover:text-black ">
            <input type="checkbox" name="" id="" className="  mr-2" />
            Rue Atlas
          </li>
          <li className="text-sm flex-1 text-gray-500 hover:text-black ">
            <input type="checkbox" name="" id="" className="  mr-2" />
            Silque
          </li>

          <li className="text-sm flex-1 text-gray-500 hover:text-black ">
            <input type="checkbox" name="" id="" className="  mr-2" />
            Kairo Collective
          </li>
          <li className="text-sm flex-1 text-gray-500 hover:text-black ">
            <input type="checkbox" name="" id="" className="  mr-2" />
            Lunair
          </li>
          <li className="text-sm flex-1 text-gray-500 hover:text-black ">
            <input type="checkbox" name="" id="" className="  mr-2" />
            Threadhaven
          </li>
          <li className="text-sm flex-1 text-gray-500 hover:text-black ">
            <input type="checkbox" name="" id="" className="  mr-2" />
            Élan District
          </li>
        </ul>
      </div>
      <div
        id="price"
        className=" h-[10%] w-[100%] border-stone-200 text-gray-600 font-poppins flex flex-col ml-2"
      >
        <div className="flex-1 pt-2 mt-10 ">
          <label
            htmlFor="price-range-selector"
            className="text-gray-800 font-poppins hover:text-black"
          >
            Price
          </label>
          <input
            type="range"
            name=""
            id="price-range-selector"
            className=" flex-2 h-full w-[90%] ml-2"
            min="100"
            max="10000"
            step="100"
            onChange={handleMaxPriceChange}
          />
        </div>
        <div className="flex-1 font-bold p-2 text-lg flex place-content-between">
          <span className=" h-[25%] ">₹100</span>-
          <span className=" h-[25%] ">₹{maxprice}+</span>
        </div>
      </div>
      <div
        id="color"
        className=" h-[20%] w-[100%] border-b-2 border-stone-200"
      ></div>
      <div id="discount-range" className=" h-[20%] w-[100%] "></div>
    </div>
  );
}

export function ProductPage({
  storeApiData,
  product,
  setProduct,
  quantity,
  setQuantity,
  setSelectedProductArr,
}) {
  return (
    <div
      id="product-card-page"
      className="max-w-screen-2xl mx-auto h-[170vh] p-6 gap-8 object-cover flex flex-rows flex-wrap row-start-2 row-end-6 col-start-2 col-end-6 "
    >
      <div
        id="card-container-1"
        className="h-[25%] gap-8 flex flex-rows flex-1"
      >
        <ProductCards
          storeApiData={storeApiData}
          productNo={0}
          quantity={quantity}
          setQuantity={setQuantity}
          setSelectedProductArr={setSelectedProductArr}
        />
        <ProductCards
          storeApiData={storeApiData}
          productNo={1}
          quantity={quantity}
          setQuantity={setQuantity}
          setSelectedProductArr={setSelectedProductArr}
        />
        <ProductCards
          storeApiData={storeApiData}
          productNo={2}
          quantity={quantity}
          setQuantity={setQuantity}
          setSelectedProductArr={setSelectedProductArr}
        />
        <ProductCards
          storeApiData={storeApiData}
          productNo={3}
          quantity={quantity}
          setQuantity={setQuantity}
          setSelectedProductArr={setSelectedProductArr}
        />
        <ProductCards
          storeApiData={storeApiData}
          productNo={4}
          quantity={quantity}
          setQuantity={setQuantity}
          setSelectedProductArr={setSelectedProductArr}
        />
      </div>
      <div
        id="card-container-2"
        className="h-[25%] gap-8 flex flex-rows flex-1"
      >
        <ProductCards
          storeApiData={storeApiData}
          productNo={5}
          quantity={quantity}
          setQuantity={setQuantity}
          setSelectedProductArr={setSelectedProductArr}
        />
        <ProductCards
          storeApiData={storeApiData}
          productNo={6}
          quantity={quantity}
          setQuantity={setQuantity}
          setSelectedProductArr={setSelectedProductArr}
        />
        <ProductCards
          storeApiData={storeApiData}
          productNo={7}
          quantity={quantity}
          setQuantity={setQuantity}
          setSelectedProductArr={setSelectedProductArr}
        />
        <ProductCards
          storeApiData={storeApiData}
          productNo={8}
          quantity={quantity}
          setQuantity={setQuantity}
          setSelectedProductArr={setSelectedProductArr}
        />
        <ProductCards
          storeApiData={storeApiData}
          productNo={9}
          quantity={quantity}
          setQuantity={setQuantity}
          setSelectedProductArr={setSelectedProductArr}
        />
      </div>
      <div
        id="card-container-3"
        className="h-[25%] gap-8 flex flex-rows flex-1"
      >
        <ProductCards
          storeApiData={storeApiData}
          productNo={10}
          quantity={quantity}
          setQuantity={setQuantity}
          setSelectedProductArr={setSelectedProductArr}
        />
        <ProductCards
          storeApiData={storeApiData}
          productNo={11}
          quantity={quantity}
          setQuantity={setQuantity}
          setSelectedProductArr={setSelectedProductArr}
        />
        <ProductCards
          storeApiData={storeApiData}
          productNo={12}
          quantity={quantity}
          setQuantity={setQuantity}
          setSelectedProductArr={setSelectedProductArr}
        />
        <ProductCards
          storeApiData={storeApiData}
          productNo={13}
          quantity={quantity}
          setQuantity={setQuantity}
          setSelectedProductArr={setSelectedProductArr}
        />
        <ProductCards
          storeApiData={storeApiData}
          productNo={14}
          quantity={quantity}
          setQuantity={setQuantity}
          setSelectedProductArr={setSelectedProductArr}
        />
      </div>
      <div
        id="card-container-4"
        className="h-[25%] gap-8 flex flex-rows flex-1"
      >
        <ProductCards
          product={product}
          setProduct={setProduct}
          storeApiData={storeApiData}
          productNo={15}
          quantity={quantity}
          setQuantity={setQuantity}
          setSelectedProductArr={setSelectedProductArr}
        />
        <ProductCards
          product={product}
          setProduct={setProduct}
          storeApiData={storeApiData}
          productNo={16}
          quantity={quantity}
          setQuantity={setQuantity}
          setSelectedProductArr={setSelectedProductArr}
        />
        <ProductCards
          product={product}
          setProduct={setProduct}
          storeApiData={storeApiData}
          productNo={17}
          quantity={quantity}
          setQuantity={setQuantity}
          setSelectedProductArr={setSelectedProductArr}
        />
        <ProductCards
          product={product}
          setProduct={setProduct}
          storeApiData={storeApiData}
          productNo={18}
          quantity={quantity}
          setQuantity={setQuantity}
          setSelectedProductArr={setSelectedProductArr}
        />
        <ProductCards
          product={product}
          setProduct={setProduct}
          storeApiData={storeApiData}
          productNo={19}
          quantity={quantity}
          setQuantity={setQuantity}
          setSelectedProductArr={setSelectedProductArr}
        />
      </div>
    </div>
  );
}

function ProductCards({
  storeApiData,
  productNo,
  quantity,
  setQuantity,
  setSelectedProductArr,
}) {
 const [selectedQuantity,setSelectedQuantity] = useState(1)

  const product = {
    id: storeApiData[productNo]?.id,
    image: storeApiData[productNo]?.image,
    title: storeApiData[productNo]?.title.slice(0, 45),
    price: storeApiData[productNo]?.price,
    rating: storeApiData[productNo]?.rating.rate,
    quantity: 1,
  };

  const handleOnClick = () => {
  setSelectedProductArr((prev) => {
    const existing = prev.find((item) => item.id === product.id);

    if (existing) {
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { ...product, quantity: 1 }];
  });
  setQuantity(quantity + 1);
};
  
  return (
    <div
      id={`product-card-${product.id}`}
      className="w-full h-[100%] p-8 flex flex-wrap gap-x-8 mb-4 mt-4 bg-stone-100 rounded-xl shadow-md hover:-translate-2 hover:shadow-xl"
    >
      <div className="w-full h-[50%] flex-wrap">
        <img
          src={product.image}
          alt="product-image"
          className="w-[100%] h-full flex-wrap"
        />
      </div>
      <div className="w-full h-fit flex flex-col justify-center ">
        <p
          id="card-title"
          className="w-full h-fit object-cover text-sm mb-2 justify-center text-ellipsis"
        >
          {product.title}
        </p>
        <span
          id="card-price"
          className="font-poppins text-sm w-full h-fit object-cover pl-4"
        >
          Price :{product.price}
        </span>
        <span
          id="card-rating"
          className=" text-sm w-full h-fit object-cover pl-4"
        >
          Ratings: {product.rating}
        </span>
      </div>
      <div className="bg-stone-200 w-full h-[12%] flex flex-row rounded-2xl gap-2 hover:bg-stone-400 shadow-[0_5px_0_#999] active:translate-y-[4px]">
        <IoBagCheckOutline className="h-[1.2rem] w-[1.2rem] mt-2 ml-2" />
        <button
          className="justify-center text-lg-bold mr-4"
          onClick={handleOnClick}
        >
          ADD TO BAG
        </button>
      </div>
    </div>
  );
}

function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Recommended");

  const options = [
    "Recommended",
    "What's New",
    "Popularity",
    "Better Discount",
    "Price: High to Low",
    "Price: Low to High",
    "Customer Ratings",
  ];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative row-start-14 row-end-20 col-start-18 col-end-21 ">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="border-2 border-gray-300 rounded-lg flex justify-between items-center p-2 cursor-pointer active:bg-gray-500 active:text-white"
      >
        <span className="text-xs">
          Sort by: <b className="text-gray-600">{selected}</b>
        </span>

        {isOpen ? (
          <MdKeyboardDoubleArrowUp className="ml-2" />
        ) : (
          <MdOutlineKeyboardDoubleArrowDown className="ml-2" />
        )}
      </div>

      {isOpen && (
        <div className="absolute mt-2 w-full rounded-lg border border-gray-300 bg-white z-10">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="px-3 py-2 text-gray-600 hover:bg-gray-600 hover:text-white cursor-pointer font-poppins text-sm"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
