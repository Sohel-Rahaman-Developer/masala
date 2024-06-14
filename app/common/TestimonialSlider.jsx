/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

"use client";
import React , { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import {
  faStar,
  faUser,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import useFadeInFromTop from "../hooks/useFadeInFromTop";
import useFadeInFromBottom from "../hooks/useFadeInFromBottom";

const generateStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        className="star-yellow text-yellow-400"
      />
    );
  }

  // Add half star if needed
  if (hasHalfStar) {
    stars.push(
      <FontAwesomeIcon
        key="half"
        icon={faStarHalfAlt}
        className="star-yellow"
      />
    );
  }

  return stars;
};
const CustomPrevArrow = ({ currentSlide, slideCount, ...props }) => (
  <div {...props} className="slick-prev" style={{ left: "16px", zIndex: 1  }}>
     <FontAwesomeIcon icon={faChevronLeft}  />
  </div>
);

const CustomNextArrow = ({ currentSlide, slideCount, ...props }) => (
  <div {...props} className="slick-next" style={{ right: "30px", zIndex: 1 }}>
     <FontAwesomeIcon icon={faChevronRight} />
  </div>
);

const TestimonialSlider = ({ reviewsData }) => {
  const allReviews = Object.values(reviewsData).flatMap(
    (product) => product.reviews
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show three slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 900, // Adjust according to tablet view
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Adjust according to phone view
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const heading = useRef(null);
  const testimonialRef = useRef(null);
  useFadeInFromTop(heading);
  useFadeInFromBottom(testimonialRef);
  return (
    <div className="relative overflow-hidden">
      <div className="text-center">
      <h1 class="text-3xl lg:text-4xl font-bold" ref={heading}>A word from our Customers</h1>
      <p class="text-md">We've been helping businesses do their best since 2018</p>
      </div>
      <div ref={testimonialRef}>
         <Slider {...settings} >
        {allReviews.map((slide) => (
          <div key={slide.id}  className="flex items-center justify-center">
            <div className="p-4 w-full">
              <div className="h-full min-h-[301px] bg-gray-100 p-8 rounded"  >
                <div className="flex justify-between">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className="block w-8 h-8 text-[45px] text-gray-400 mb-4"
                  />
                  <div className="rating-stars">
                    {generateStars(slide.rating)}
                  </div>
                </div>

                <p className="leading-relaxed mb-6">
                  {slide.message}{" "}
                  <span className="underline underline-offset-2">
                    {slide.date}
                  </span>
                </p>
                <a className=" items-center">
                  <div className="flex gap-2 flex-wrap mb-3">
                     {slide.photos.map((photo, index) => (
                    <img
                      key={index}
                      alt={`testimonial-${index}`}
                      src={photo}
                      className="w-12 h-12 rounded-sm flex-shrink-0 object-cover object-center mr-2"
                    />
                  ))}
                  </div>
                 
                  <div className="flex-grow flex items-center">
                    <div className="border-2 border-gray-300 rounded-full p-1 h-10 w-10 shadow-md flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="text-gray-500 h-6 w-6"
                      />
                    </div>
                    <div className="flex flex-col ml-2">
                      <span className="title-font font-medium text-gray-900">
                        {slide.author}
                      </span>
                      {/* Add additional content here if needed */}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
     
    </div>
  );
};

export default TestimonialSlider;
