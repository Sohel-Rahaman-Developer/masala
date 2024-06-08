import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faStar as solidStar, faStar as regularStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [images, setImages] = useState([]);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleImageChange = (e) => {
    const fileList = e.target.files;
    const imageArray = Array.from(fileList).map((file) => URL.createObjectURL(file));
    setImages([...images, ...imageArray]);
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 rounded-lg">
      <h2 className="mb-4 text-2xl font-bold">Write a Review</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">Your Message</label>
          <textarea id="message" name="message" className="w-full h-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <label className="block text-gray-700 mr-2">Rating:</label>
            {/* Star rating */}
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={(index <= rating) ? solidStar : farStar}
                  className={`w-5 h-5 text-yellow-500 cursor-pointer`}
                  onClick={() => handleStarClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex flex-wrap gap-4 mb-3">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Review Image ${index}`} className="w-24 h-24 object-cover rounded-lg" />
            ))}
          </div>
          <input type="file" id="photos" name="photos" accept="image/*" multiple onChange={handleImageChange} className="hidden" />
          <label htmlFor="photos" className="px-4 py-2 mt-3 bg-gray-600 text-white rounded-full cursor-pointer hover:bg-gray-500">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Add Image
          </label>
        </div>
        <div className="text-end">
          <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500">Submit Review</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
