'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';  // Import the Image component

const ProductList = ({ products }) => {
  const [sortDirection, setSortDirection] = useState("asc"); // Initial sort direction
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const itemsPerPage = 8; // Number of items per row

  // Function to handle sorting direction change
  const handleSortDirectionChange = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  // Function to handle pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Sorting products based on the selected criteria and direction
  const sortedProducts = [...products].sort((a, b) => {
    return sortDirection === "asc" ? a.price - b.price : b.price - a.price;
  });

  // Calculate total number of pages
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  // Get current items to display based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container mx-auto py-8 px-3 lg:px-3">
      {/* Total items and sorting dropdown */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="mb-2 md:mb-0">{`Showing ${
          indexOfFirstItem + 1
        } to ${Math.min(indexOfLastItem, sortedProducts.length)} of ${
          sortedProducts.length
        } items`}</div>
        <div>
          <button
            className="border border-gray-300 rounded px-3 py-1 bg-gray-200 hover:bg-gray-300"
            onClick={handleSortDirectionChange}
          >
            {sortDirection === "asc" ? "Sort Low to High" : "Sort High to Low"}
          </button>
        </div>
      </div>
      {/* Product cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  px-2 lg:px-4">
        {currentItems.map((product) => (
          <div key={product.id} className="inline-flex px-2 pb-4">
            <Link href={`/product-details/${product.id}`} legacyBehavior>
              <a className="relative bg-white inline-flex items-stretch w-full h-full p-0 box-border">
                {/* heart */}
                <div className="absolute top-[4px] right-[4px] w-[28px] h-[28px] text-center z-6 rounded-full">
                  <span className="absolute top-[4px] right-[4px] w-[24px] h-[24px] text-center z-10 rounded-full bg-gray-200">
                    <i
                      className="fa-regular fa-circle-dot"
                      style={{ color: "#39bb09" }}
                    />
                  </span>
                </div>
                {/* end heart */}
                <div className="relative shadow-md rounded-lg flex flex-col w-full group">
                  {/* img product */}
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
                  {/* end img product */}
                  <div className="relative p-2 box-border overflow-hidden grow">
                    {/* product name */}
                    <span className="text-gray-800 max-h-[38px] text-sm font-semibold leading-5 overflow-hidden whitespace-normal break-words">
                      <h1 className="text-[16px] font-semibold hover:underline">
                        {product.name}
                      </h1>
                    </span>
                    {/* end product name */}
                    {/* price */}
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
                    {/* end price */}
                    {/* store name */}
                    <div className="flex align-items-center text-xs leading-6 mx-0 my-1 text-gray-600">
                      {product.brand}
                    </div>
                    {/* end store name */}
                    {/* rating */}
                    <div className="min-h-[14px] text-xs">
                      <div className="align-items-center my-1 mx-0">
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
                        <span className="align-middle ml-1 text-gray-600">
                          (1400)
                        </span>
                      </div>
                    </div>
                    {/* end rating */}
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-3 py-1 mr-2 border border-gray-300 rounded ${
              currentPage === index + 1 ? "bg-gray-300" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
