import React from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { useOutletContext } from "react-router";
function ContentPage() {
  const { isActive, quantity, setQuantity } = useOutletContext();

  console.log(isActive);
  const [storeApiData, setStoreApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProductArr, setSelectedProductArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setStoreApiData(result);
        console.log(storeApiData);
        
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
      className={` ml-10 w-[90%] h-[200%] overflow-y-auto bg-gray-50`}
    >
      
      <Outlet
        context={{
          storeApiData,
          setStoreApiData,
          quantity,
          setQuantity,
          setSelectedProductArr,
          selectedProductArr,
        }}
      />
    </div>
  );
}

export default ContentPage;
