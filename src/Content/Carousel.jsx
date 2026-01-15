import React from 'react'
import { useState,useEffect } from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useOutletContext } from 'react-router';


function Carousel (){
  return(
  <div className='max-w-[90vw] max-h-[100vh]'>
<CarouselCard/>
<CarouselCard/>
<CarouselCard/>
<CarouselCard/>
</div>
  )
}




 function CarouselCard() {
const [current, setCurrent] = useState(0);
const {storeApiData} = useOutletContext();
  const prev = () => {
    setCurrent(current === 0 ? storeApiData.length - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current === storeApiData.length - 1 ? 0 : current + 1);
  };

   useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 2000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative max-w-[90vw] mx-auto bg-gray-800">
      <div className="relative h-96 mt-10 rounded-lg overflow-hidden">
        {storeApiData.map((item, index) => (
          <img
            key={item.id}
            src={item.image}
            alt={item.title || `Slide ${index + 1}`}
            className={`absolute w-full h-full object-fit transition-opacity duration-500 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
        >
          <FaChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {storeApiData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}




export default Carousel;