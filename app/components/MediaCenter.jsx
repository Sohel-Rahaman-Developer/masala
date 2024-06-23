// components/MediaCenter.js
/* eslint-disable @next/next/no-img-element */
"use client"
import Link from 'next/link';
import React, { useRef } from 'react';
import useScaleAnimation from '../hooks/useScaleAnimation'; // Adjust the import path as necessary
import useFadeInFromTop from '../hooks/useFadeInFromTop'; // Adjust the import path as necessary
import useFadeInFromLeft from '../hooks/useFadeInFromLeft'; // Adjust the import path as necessary
import useFadeInFromBottom from '../hooks/useFadeInFromBottom'; // Adjust the import path as necessary

function MediaCenter() {
  const imageRefs = useRef([]);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  // Use the custom hooks for animations
  useScaleAnimation(imageRefs);
  useFadeInFromTop(titleRef);
  useFadeInFromLeft(descriptionRef);
  useFadeInFromBottom(buttonRef);

  return (
    <div className="container flex items-center justify-center px-4 py-12 mx-auto sm:px-6 2xl:px-6">
      <div className="flex flex-col items-center justify-center space-y-6 lg:flex-row lg:space-y-0">
        <div className="flex flex-col items-start justify-start w-80 sm:w-auto">
          <div>
            <p ref={titleRef} className="text-3xl font-semibold leading-9 text-gray-800 xl:text-4xl dark:text-white">Media Center</p>
          </div>
          <div ref={descriptionRef} className="mt-4 lg:w-4/5 xl:w-3/5">
            <p className="text-base leading-6 text-gray-600 dark:text-white">Discover Milmapure&apos;s journey in our gallery, showcasing the essence of Indian masalas and our spice-making heritage.</p>
          </div>
          <div className="w-full mt-16" ref={buttonRef}>
            <Link href="/gallery">
              <button className="flex items-center justify-between w-full px-4 text-white bg-gray-900 outline-none dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 lg:w-72 h-14 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 dark:hover:bg-gray-100">
                <p className="text-xl font-medium leading-5">See More</p>
                <svg className="dark:text-gray-900" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66663 16H25.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 21.3333L25.3333 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 10.6667L25.3333 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-5 xl:space-x-8 sm:space-y-0">
          <div className="">
            <img 
              className="hidden lg:block max-h-[420px]" 
              src="/products-list-images/sambar2.png" 
              alt="sofa"
              ref={el => imageRefs.current[0] = el} 
            />
            <img 
              className="w-80 sm:w-auto lg:hidden" 
              src="/products-list-images/sambar.png" 
              alt="sofa"
              ref={el => imageRefs.current[1] = el} 
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
            <div>
              <img 
                className="hidden lg:block max-h-[220px]" 
                src="/products-list-images/rajma2.png" 
                alt="chairs"
                ref={el => imageRefs.current[2] = el} 
              />
              <img 
                className="w-80 sm:w-auto lg:hidden" 
                src="/products-list-images/rajma.png" 
                alt="chairs"
                ref={el => imageRefs.current[3] = el} 
              />
            </div>
            <div>
              <img 
                className="hidden lg:block max-h-[220px]" 
                src="/products-list-images/pulao.png" 
                alt="chairs"
                ref={el => imageRefs.current[4] = el} 
              />
              <img 
                className="w-80 sm:w-auto lg:hidden" 
                src="/products-list-images/pulao2.png" 
                alt="chairs"
                ref={el => imageRefs.current[5] = el} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaCenter;