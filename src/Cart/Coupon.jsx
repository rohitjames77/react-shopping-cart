import React from 'react'

function Coupon({ setCouponNotification}) {
const handleOnclick = ()=>{
setCouponNotification(true);
}

setTimeout(()=>{
setCouponNotification(false)
},3000)

  return (
    
    <div id='Coupon-parent-container' className='row-start-1 mt-10 w-[80%] h-[200%] col-start-5 col-end-7 bg-white flex flex-col gap-2 p-3 '>
     <div id='coupon-title-container' className=' flex flex-wrap h-[20%] w-[90%] justify-center ml-2 border-b-2 border-gray-300'>
     <h1 id="coupon-title " className=' font-poppins font-bold text-3xl w-[50%] h-[100%] '>Coupon Code</h1>
</div>
<input type="text" id="coupon-code-input" className='w-[90%] h-[30%] bg-gray-200 rounded-xl m-2 p-2' placeholder='Enter your coupon code' />
<button id='submit-coupon' type='text' className='w-[90%] h-[30%] font-poppins text-xl text-blue-600 border-2 border-blue-500 ml-2 rounded-xl active:bg-blue-500 active:text-white active:translate-y-[4px]'onClick={handleOnclick} >Apply Your Coupon</button>
    </div>
  
)
}

export default Coupon