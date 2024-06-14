'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    id: 1,
    image: '/banner-images/banneru1.png',
    title: 'Slide 1 Title',
    description: 'Slide 1 Description',
  },
  {
    id: 2,
    image: '/banner-images/banner2.png',
    title: 'Slide 2 Title',
    description: 'Slide 2 Description',
  },
  {
    id: 3,
    image: '/banner-images/banner3.png',
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
    arrows: true,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="flex items-center justify-center">
            <div
              className="w-full flex flex-col justify-center items-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="w-full flex flex-col justify-center items-center text-white">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-auto object-cover"
                />
                {/* <div className="absolute top-0 left-50 bg-opacity-50 w-full p-4 text-center">
                  <h2 className="text-2xl mb-2">{slide.title}</h2>
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
