import React from 'react';
import ReviewForm from './ReviewForm';

const CustomerReviews = ({ reviewsData }) => {
  return (
    <div className="p-4 md:p-8">
      {/* Heading with red underline */}
      <h2 className="mb-4 text-2xl font-bold relative text-center">
        Reviews
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[100px] h-1 bg-red-500"></span>
      </h2>
      <hr className='mb-1'/>
      <hr className='mb-2' />

      {/* Reviews */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="col-span-1">
          {reviewsData && reviewsData.length > 0 ? (
            reviewsData.map((productReviews, productIndex) => (
              productReviews.reviews.map((review, reviewIndex) => (
                <div key={`${productIndex}-${reviewIndex}`} className="mb-4">
                  <div className="flex items-center mb-2">
                    {/* Star rating */}
                    <div className="flex items-center">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 1l2.42 5.574L18 7.5l-4.327 4.05L15.66 19 10 15.667 4.34 19l1.985-7.45L2 7.5l5.58-.926L10 1z"
                            clipRule="evenodd"
                            strokeLinejoin="round" // Ensure correct property name
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="font-semibold ml-2">{review.author}</p>
                  </div>
                  <p className="text-gray-600">{review.message}</p>
                  <div className="mb-0 text-end text-sm text-gray-400">{new Date(review.date).toLocaleDateString()}</div>
                  <div className="my-0 ml-auto w-[80px] h-[2px] bg-yellow-500"></div>
                  {review.photos && review.photos.length > 0 && (
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {review.photos.map((photo, index) => (
                        <img key={index} src={photo} alt={`Review Photo ${index}`} className="w-full h-24 object-cover rounded-lg" />
                      ))}
                    </div>
                  )}
                </div>
              ))
            ))
          ) : (
            <div className="text-center text-gray-600">No reviews yet for this product</div>
          )}
        </div>
        <div className="col-span-1">
          <ReviewForm />
        </div>
      </div>

      {/* Line divider */}
      <hr className="my-8 border-t border-gray-300" />
    </div>
  );
};

export default CustomerReviews;
