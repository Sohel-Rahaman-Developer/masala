"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import reviewsData from '../data/review.json'; // Ensure this file exists and has correct data
import CustomerReviews from '../common/CustomerReviews';

const ProductDetails = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.imageUrl);
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const productReviews = reviewsData.filter((review) => review.productId === product.id);
    setReviews(productReviews);
  }, [product.id]);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <div className="p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Image and Thumbnails Section */}
        <div className="flex flex-col">
          <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center overflow-hidden">
            <Image src={mainImage} alt={product.name} width={500} height={500} className="object-contain w-full h-full" />
          </div>
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div key={index} className="w-full h-24 rounded-lg overflow-hidden cursor-pointer" onClick={() => handleThumbnailClick(image)}>
                <Image src={image} alt={`Thumbnail ${index}`} width={100} height={100} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
        </div>
        {/* Product Details Section */}
        <div>
          <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{product.name}</h2>
          <p className="text-gray-500 text-sm">
            By <a href="#" className="text-indigo-600 hover:underline">{product.brand}</a>
          </p>
          <div className="flex items-center space-x-4 my-4">
            <div>
              <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                <span className="text-indigo-400 mr-1 mt-1">$</span>
                <span className="font-bold text-indigo-600 text-3xl">{product.price}</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-green-500 text-xl font-semibold">
                Save {((1 - product.price / product.oldPrice) * 100).toFixed(2)}%
              </p>
              <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
            </div>
          </div>
          <p className="text-gray-500 mb-4">{product.description}</p>
          {/* Quantity Selector and Add to Cart Button */}
          <div className="flex flex-col sm:flex-row py-4 space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative flex-1">
              <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1"
              />
            </div>
            <button type="button" className="w-full sm:w-auto h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* Customer Reviews Section */}
      <CustomerReviews reviewsData={reviews} />
    </div>
  );
};

export default ProductDetails;
