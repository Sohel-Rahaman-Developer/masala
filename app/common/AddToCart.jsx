"use client"
import { useState } from 'react';

const AddToCart = () => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  return (
    <div className="flex justify-end">
      <div className="w-32 h-[33px] border border-orange-600 rounded-md select-none flex justify-between">
        <div 
          className={`pt-[2px] left-minus-icon h-[32px]  border-r border-orange-600 px-2 text-2xl leading-6 text-orange-600 cursor-pointer ${quantity === 0 ? 'hidden' : ''}`}
          onClick={decreaseQuantity}
        >
          -
        </div>
        {quantity === 0 ? 
        <div className="ms-[5px] h-[30px] w-100 flex justify-center items-center  text-sm font-semibold text-orange-600 select-none left-add-content">
          Add To Cart 
        </div>
        : ''}
        {quantity > 0 && (
          <div className="px-2 quantity w-[100%] flex justify-center items-center text-[15px]">
            {quantity}
          </div>
        )}
        <div 
          className="pt-[2px] h-[32px] px-2 text-2xl leading-6 text-orange-600 border-l border-orange-600 cursor-pointer right-plus-icon"
          onClick={increaseQuantity}
        >
          +
        </div>
        {/* <div className="clear-both"></div> */}
      </div>
    </div>
  );
};

export default AddToCart;
