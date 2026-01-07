import React from "react";
import { useState, useEffect } from "react";
import Products from "../products/Products";
import CartCheckoutDelivery from "../Cart/CartCheckoutDelivery";

function ContentPage({ isActive,quantity,setQuantity }) {
  console.log(isActive);
  const [storeApiData, setStoreApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setStoreApiData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center h-64 text-red-600 font-semibold">
        Error: {error}
      </div>
    );
  }

  return (
    <div
      id="content-page"
      className={` ml-10 w-[90%] h-[200%] overflow-y-auto ${isActive.men || isActive.women || isActive.home || isActive.beauty === true ? "bg-gray-400/25" : "bg-gray-50"}`}>
        <CartCheckoutDelivery/>

      {/* <Products storeApiData={storeApiData} setStoreApiData={setStoreApiData} quantity={quantity} setQuantity={setQuantity} /> */}
    </div>
  );
}

export default ContentPage;
