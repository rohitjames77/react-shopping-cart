import React from "react";
import { IoBagCheckOutline } from "react-icons/io5";

export default function Products({
  storeApiData,
  setStoreApiData,
}) {
  return (
    <div id="products-container" className="sticky grid grid-cols-5 grid-rows-7 h-[100vh] ">

      <ProductPageHeader />
      <ProductSideBar />
      <ProductPage
        storeApiData={storeApiData}
        setStoreApiData={setStoreApiData}
      />
    </div>
  );
}

export function ProductPageHeader() {
  return (
    <div id="info-header " className="  bg-white h-[100%] w-full row-start-1 col-start-1 col-end-6 border-b-2 border-stone-200">
      <div id="route-info-container"></div>
      <span id="category-heading">Men</span>
      <span id="side-bar-heading">Filters</span>
      <div id="product-description-container"></div>
    </div>
  );
}

export function ProductSideBar() {
  return (
    <div id="side-bar" className="bg-stone-100 h-[150%] w-full col-start-1 col-end-2 row-start-2 row-end-8 flex flex-cols flex-wrap object-cover border-r-2 border-stone-200">
      <div id="categories" className=" h-[20%] w-[100%] border-b-2 border-stone-200"></div>
      <div id="brand" className=" h-[20%] w-[100%] border-b-2 border-stone-200"></div>
      <div id="price" className=" h-[20%] w-[100%] border-b-2 border-stone-200"></div>
      <div id="color" className=" h-[20%] w-[100%] border-b-2 border-stone-200"></div>
      <div id="discount-range" className=" h-[20%] w-[100%] "></div>
    </div>
  );
}

export function ProductPage({ storeApiData }) {
  return (
    <div
      id="product-card-page"
      className="max-w-screen-2xl mx-auto h-[170vh] p-6 gap-8 object-cover flex flex-rows flex-wrap row-start-2 row-end-6 col-start-2 col-end-6 "
    >
      <div
        id="card-container-1"
        className="h-[25%] gap-8 flex flex-rows flex-1"
      >
        <ProductCards storeApiData={storeApiData} productNo={0} />
        <ProductCards storeApiData={storeApiData} productNo={1} />
        <ProductCards storeApiData={storeApiData} productNo={2} />
        <ProductCards storeApiData={storeApiData} productNo={3} />
        <ProductCards storeApiData={storeApiData} productNo={4} />
      </div>
      <div
        id="card-container-2"
        className="h-[25%] gap-8 flex flex-rows flex-1"
      >
        <ProductCards storeApiData={storeApiData} productNo={5} />
        <ProductCards storeApiData={storeApiData} productNo={6} />
        <ProductCards storeApiData={storeApiData} productNo={7} />
        <ProductCards storeApiData={storeApiData} productNo={8} />
        <ProductCards storeApiData={storeApiData} productNo={9} />
      </div>
      <div
        id="card-container-3"
        className="h-[25%] gap-8 flex flex-rows flex-1"
      >
        <ProductCards storeApiData={storeApiData} productNo={10} />
        <ProductCards storeApiData={storeApiData} productNo={11} />
        <ProductCards storeApiData={storeApiData} productNo={12} />
        <ProductCards storeApiData={storeApiData} productNo={13} />
        <ProductCards storeApiData={storeApiData} productNo={14} />
      </div>
      <div
        id="card-container-4"
        className="h-[25%] gap-8 flex flex-rows flex-1"
      >
        <ProductCards storeApiData={storeApiData} productNo={15} />
        <ProductCards storeApiData={storeApiData} productNo={16} />
        <ProductCards storeApiData={storeApiData} productNo={17} />
        <ProductCards storeApiData={storeApiData} productNo={18} />
        <ProductCards storeApiData={storeApiData} productNo={19} />
      </div>
    </div>
  );
}

function ProductCards({ storeApiData, productNo }) {
  const productId = storeApiData[productNo]?.id;
  console.log(productId);
  const productImage = storeApiData[productNo]?.image;
  console.log(productImage);
  const productTitle = storeApiData[productNo]?.title;
  const productPrice = storeApiData[productNo]?.price;
  const productRating = storeApiData[productNo]?.rating.rate;
  return (
    <div
      id={`product-card-${productId}`}
      className="w-full h-[100%] p-8 flex flex-wrap gap-x-8 mb-4 mt-4 bg-stone-100 rounded-xl shadow-md hover:-translate-2 hover:shadow-xl"
    >
      <div className="w-full h-[50%] flex-wrap">
        <img
          src={productImage}
          alt="product-image"
          className="w-[100%] h-full  flex-wrap"
        />
      </div>
      <div className="w-full h-fit flex flex-col justify-center ">
        <span
          id="card-title"
          className="w-full h-fit object-cover text-sm mb-2 justify-center"
        >
          {productTitle}
        </span>
        <span
          id="card-price"
          className="font-poppins text-sm w-full h-fit object-cover pl-4"
        >
          Price :{productPrice}
        </span>
        <span
          id="card-rating"
          className=" text-sm w-full h-fit object-cover pl-4"
        >
          Ratings: {productRating}
        </span>
      </div>
      <div className="bg-stone-200 w-full h-[12%] flex flex-row rounded-2xl gap-2 hover:bg-stone-400 shadow-[0_5px_0_#999] active:translate-y-[4px]  ">
        <IoBagCheckOutline className="h-[1.2rem] w-[1.2rem] mt-2 ml-2" />
        <button className="justify-center text-lg-bold mr-4">
          {" "}
          ADD TO BAG
        </button>
      </div>
    </div>
  );
}
