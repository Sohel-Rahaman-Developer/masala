/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    id: 1,
    image: '/banner-images/hero1.jpg',
    title: 'Slide 1 Title',
    description: 'Slide 1 Description',
  },
  {
    id: 2,
    image: '/banner-images/hero2.jpg',
    title: 'Slide 2 Title',
    description: 'Slide 2 Description',
  },
  {
    id: 3,
    image: '/banner-images/hero4.jpg',
    title: 'Slide 3 Title',
    description: 'Slide 3 Description',
  },
  {
    id: 4,
    image: '/banner-images/hero6.jpg',
    title: 'Slide 3 Title',
    description: 'Slide 3 Description',
  },
];

const CustomPrevArrow = ({ currentSlide, slideCount, ...props }) => (
  <div
    {...props}
    className="slick-prev"
    style={{ left: '10px', zIndex: 1 }}
  >
    Previous
  </div>
);

const CustomNextArrow = ({ currentSlide, slideCount, ...props }) => (
  <div
    {...props}
    className="slick-next"
    style={{ right: '25px', zIndex: 1 }}
  >
    Next
  </div>
);

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="flex items-center justify-center">
            <div
              className="flex flex-col items-center justify-center w-full"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} >
              <div className="flex flex-col items-center justify-center w-full text-white">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="object-cover w-full h-auto"
                />
                {/* <div className="absolute top-0 w-full p-4 text-center bg-opacity-50 left-50">
                  <h2 className="mb-2 text-2xl">{slide.title}</h2>
                  <p className="text-lg">{slide.description}</p>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
