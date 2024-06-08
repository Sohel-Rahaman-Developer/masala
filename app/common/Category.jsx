"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

const Category = () => {
  const categories = [
    {
      name: 'Basic Ground Spices',
      imageUrl: '/products-list-images/panjabi2.png',
      link: '/products/basic-ground-spices',
    },
    {
      name: 'Blended Spices',
      imageUrl: '/products-list-images/rajma2.png',
      link: '/products/blended-spices',
    },
    {
      name: 'Whole Spices',
      imageUrl: '/products-list-images/sambar2.png',
      link: '/products/whole-spices',
    },
    {
      name: 'Combo Pack',
      imageUrl: '/products-list-images/category3.png',
      link: '/products/combopack',
    },
  ];

  const gsapRefs = useRef([]);
  gsapRefs.current = [];

  useGSAP(() => {
    gsapRefs.current.forEach(ref => {
      gsap.from(ref, {
        // x: 1000,
        duration: 20,
        delay: 1,
        rotate: 720,
      });
    });
  });

  const addToRefs = (el) => {
    if (el && !gsapRefs.current.includes(el)) {
      gsapRefs.current.push(el);
    }
  };

  return (
    <div className="category-area px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-2">Products Category</h2>
      <div className='underline-container'>
        <div className='underline mx-auto mb-6'></div>
      </div>
      <div className="flex flex-wrap justify-center">
        {categories.map((category) => (
          <div key={category.name} className="w-1/2 sm:w-1/4 lg:w-1/4 p-4">
            <Link href={category.link}>
              <div className="relative rounded-lg overflow-hidden group cursor-pointer" >
                <div className='rounded-full w-48 mx-auto h-48 overflow-hidden'>
                  <div ref={addToRefs} className="image-container transition w-48 h-48  rounded-full transform transition-transform duration-500 ease-in-out group-hover:scale-125">
                    <Image 
                      src={category.imageUrl} 
                      alt={category.name} 
                      layout="fill" 
                      objectFit="cover" 
                    />
                  </div>
                </div>
                <strong className="block text-center py-2">{category.name}</strong>
              </div>
            </Link>
          </div>
        ))}
      </div>
  
      <style jsx>{`
        .image-container {
          position: relative;
        }

        .underline-container {
          display: flex;
          justify-content: center;
        }

        .underline {
          width: 200px;
          border-bottom: 3px solid #1cff1c;
        }
      `}</style>
    </div>
  );
};

export default Category;
