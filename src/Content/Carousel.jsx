import React from 'react'
import { useState,useEffect } from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useOutletContext } from 'react-router';


function Carousel() {
  const [current, setCurrent] = useState(0);
  const { storeApiData } = useOutletContext();

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? storeApiData.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrent((prev) =>
      prev === storeApiData.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(next, 3500);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="m-8 relative w-full overflow-hidden rounded-xl shadow-lg">
      <div className="relative h-[65vh]">
        {storeApiData.map((item, index) => (
          <img
            key={item.id}
            src={item.image}
            alt={item.title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out
              ${index === current
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
              }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <button
          onClick={prev}
          className="absolute left-6 top-1/2 -translate-y-1/2 
          bg-white/30 backdrop-blur-md hover:bg-white/50 
          p-3 rounded-full shadow-md transition"
        >
          <FaChevronLeft className="text-white w-5 h-5" />
        </button>

        <button
          onClick={next}
          className="absolute right-6 top-1/2 -translate-y-1/2 
          bg-white/30 backdrop-blur-md hover:bg-white/50 
          p-3 rounded-full shadow-md transition"
        >
          <FaChevronRight className="text-white w-5 h-5" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {storeApiData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-300
                ${index === current
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


export default Carousel;