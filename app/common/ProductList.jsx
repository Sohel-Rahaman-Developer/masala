// components/ProductList.js
"use client"
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from 'next/image';
import useGsapAnimation from '../hooks/useGsapAnimation'; // Adjust the import path as necessary

const ProductList = ({ products }) => {
  const [sortBy, setSortBy] = useState(""); // State to track sorting option
  const productRefs = useRef([]);

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };

  // Sort products based on the selected sorting option
  let sortedProducts = [...products];
  if (sortBy === "name") {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "price") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  // Use the custom hook for GSAP animation
  useGsapAnimation(productRefs);

  return (
    <div className="container mx-auto py-8 px-3 lg:px-3">
      {/* Sorting options */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => handleSortChange("name")}
          className={`px-3 py-1 mr-2 border border-gray-300 rounded ${sortBy === "name" ? "bg-gray-300" : ""}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => handleSortChange("price")}
          className={`px-3 py-1 border border-gray-300 rounded ${sortBy === "price" ? "bg-gray-300" : ""}`}
        >
          Sort by Price
        </button>
      </div>

      {/* Product cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-0 lg:gap-4 px-2 lg:px-4">
        {sortedProducts.map((product, index) => (
          <div 
            key={product.id} 
            className="inline-flex px-2 pb-4"
            ref={(el) => (productRefs.current[index] = el)}
          >
            <Link href={`/product-details/${product.id}`} legacyBehavior>
              <a className="relative bg-white inline-flex items-stretch w-full h-full p-0 box-border">
                <div className="absolute top-[4px] right-[4px] w-[28px] h-[28px] text-center z-6 rounded-full">
                  <span className="absolute top-[4px] right-[4px] w-[24px] h-[24px] text-center z-10 rounded-full bg-gray-200">
                    <i className="fa-regular fa-circle-dot" style={{ color: "#39bb09" }} />
                  </span>
                </div>
                <div className="relative shadow-md rounded-lg flex flex-col w-full group">
                  <div className="relative">
                    <div className="relative h-0 rounded-t-lg pb-[100%] w-full bg-white text-ellipsis overflow-hidden">
                      <div className="bg-no-repeat bg-cover inline-block my-0 mx-auto text-center w-full h-full absolute">
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-t-lg transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                        />
                        {product.images[1] && (
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="absolute top-0 rounded-t-lg transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="relative p-2 box-border overflow-hidden grow">
                    <span className="text-gray-800 max-h-[38px] text-sm font-semibold leading-5 overflow-hidden whitespace-normal break-words">
                      <h1 className="text-[16px] font-semibold hover:underline">{product.name}</h1>
                    </span>
                    <div>
                      <div className="block w-full text-sm font-bold text-amber-700">₹ {product.price} / kg</div>
                      {product.oldPrice && <div className="block w-full text-sm font-semibold text-gray-500 line-through">₹ {product.oldPrice} / kg</div>}
                    </div>
                    <div className="flex align-items-center text-xs leading-6 mx-0 my-1 text-gray-600">{product.brand}</div>
                    <div className="min-h-[14px] text-xs">
                      <div className="align-items-center my-1 mx-0">
                        <i className="fa-solid fa-star" style={{ color: "#7a7600" }} />
                        <i className="fa-solid fa-star" style={{ color: "#7a7600" }} />
                        <i className="fa-solid fa-star" style={{ color: "#7a7600" }} />
                        <i className="fa-solid fa-star" style={{ color: "#7a7600" }} />
                        <i className="fa-solid fa-star" style={{ color: "#7a7600" }} />
                        <span className="align-middle ml-1 text-gray-600">(1400)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
