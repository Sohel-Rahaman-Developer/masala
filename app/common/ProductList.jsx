// components/ProductList.js
"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import useGsapAnimation from "../hooks/useGsapAnimation"; // Adjust the import path as necessary
import AddToCart from "./AddToCart";

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
  // useGsapAnimation(productRefs);

  return (
    <div className="container px-3 py-8 mx-auto lg:px-3">
      {/* Sorting options */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => handleSortChange("name")}
          className={`px-3 py-1 mr-2 border border-gray-300 rounded ${
            sortBy === "name" ? "bg-gray-300" : ""
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => handleSortChange("price")}
          className={`px-3 py-1 border border-gray-300 rounded ${
            sortBy === "price" ? "bg-gray-300" : ""
          }`}
        >
          Sort by Price
        </button>
      </div>

      {/* Product cards */}
      <div className="grid grid-cols-2 gap-0 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-4 lg:px-4">
        {sortedProducts.map((product, index) => (
          <div
            key={product.id}
            className="inline-flex px-2 pb-4"
            // ref={(el) => (productRefs.current[index] = el)}
          >
            <a className="box-border relative inline-flex items-stretch w-full h-full p-0 bg-white">
              <div className="absolute top-[4px] right-[4px] w-[28px] h-[28px] text-center z-6 rounded-full">
                <span className="absolute top-[4px] right-[4px] w-[24px] h-[24px] text-center z-10 rounded-full bg-gray-200">
                  <i
                    className="fa-regular fa-circle-dot"
                    style={{ color: "#39bb09" }}
                  />
                </span>
              </div>
              <div className="relative flex flex-col w-full rounded-lg shadow-md group">
                <Link href={`/product-details/${product.id}`} legacyBehavior>
                  <div className="relative">
                    <div className="relative h-0 rounded-t-lg pb-[100%] w-full bg-white text-ellipsis overflow-hidden">
                      <div className="absolute inline-block w-full h-full mx-auto my-0 text-center bg-no-repeat bg-cover">
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          fill
                          style={{ objectFit: "cover" }}
                          className="transition-opacity duration-300 ease-in-out rounded-t-lg group-hover:opacity-0"
                        />
                        {product.images[1] && (
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            style={{ objectFit: "cover" }}
                            className="absolute top-0 transition-opacity duration-300 ease-in-out rounded-t-lg opacity-0 group-hover:opacity-100"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="box-border relative flex flex-col p-2 overflow-hidden grow">
                  <Link href={`/product-details/${product.id}`} legacyBehavior>
                    <span className="text-gray-800 max-h-[38px] text-sm font-semibold leading-5 overflow-hidden whitespace-normal break-words">
                      <h1 className="text-[16px] font-semibold hover:underline">
                        {product.name}
                      </h1>
                    </span>
                  </Link>
                  <div>
                    <div className="block w-full text-sm font-bold text-amber-700">
                      ₹ {product.price} / kg
                    </div>
                    {product.oldPrice && (
                      <div className="block w-full text-sm font-semibold text-gray-500 line-through">
                        ₹ {product.oldPrice} / kg
                      </div>
                    )}
                  </div>
                  <div className="flex mx-0 my-1 text-xs leading-6 text-gray-600 align-items-center">
                    {product.brand}
                  </div>
                  <div className="min-h-[14px] text-xs">
                    <div className="mx-0 my-1 align-items-center">
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#7a7600" }}
                      />
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#7a7600" }}
                      />
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#7a7600" }}
                      />
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#7a7600" }}
                      />
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#7a7600" }}
                      />
                      <span className="ml-1 text-gray-600 align-middle">
                        (1400)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-end justify-end mt-2 grow">
                    <AddToCart />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;
