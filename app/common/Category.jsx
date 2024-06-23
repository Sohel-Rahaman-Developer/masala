"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

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
  const headingRef = useRef(null);
  const productsRef = useRef([]);

  useGSAP(() => {
    // Animate product categories
    gsapRefs.current.forEach(ref => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      tl.to(ref, { rotate: 720, duration: 8, delay: 1 })
        .to(ref, { rotate: 600, duration: 5, ease: 'power1.inOut' }) // rotate back smoothly
        .to(ref, { rotate: 920, duration: 8.5, ease: 'power1.inOut' })
        .to(ref, { rotate: 800, duration: 5, ease: 'power1.inOut' })
        .to(ref, { rotate: 1080, duration: 10, ease: 'power1.inOut' }) // complete the full cycle smoothly
        .to(ref, { rotate: 0, duration: 5, ease: 'power1.inOut' }); // return to the original position smoothly
    });

    // Animate products and heading on load
    gsap.from(headingRef.current, { x: 1000, duration: 1, ease: 'power2.out' });
    gsap.from(productsRef.current, { x: -1000, duration: 1, ease: 'power2.out', stagger: 0.2 });

    // Scroll-triggered irregular bounce animation for images
    productsRef.current.forEach((el) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 90%', // when the top of the element is 90% from the top of the viewport
          end: 'bottom 10%', // when the bottom of the element is 10% from the top of the viewport
          toggleActions: 'play pause resume pause',
          scrub: 1,
        }
      });

      const randomBounce = () => {
        const height = Math.random() * 40 - 20; // Random height between -20 and 20
        const duration = Math.random() * 0.5 + 0.3; // Random duration between 0.3 and 0.8 seconds
        return { y: height, duration, ease: 'power1.inOut' };
      };

      for (let i = 0; i < 10; i++) {
        tl.to(el, randomBounce());
      }
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !gsapRefs.current.includes(el)) {
      gsapRefs.current.push(el);
    }
  };

  const addToProductsRefs = (el) => {
    if (el && !productsRef.current.includes(el)) {
      productsRef.current.push(el);
    }
  };

  return (
    <div className="px-4 py-8 category-area">
      <h2 ref={headingRef} className="mb-2 text-3xl font-bold text-center">Products Category</h2>
      <div className='underline-container'>
        <div className='mx-auto mb-6 underline'></div>
      </div>
      <div className="flex flex-wrap justify-center">
        {categories.map((category) => (
          <div key={category.name} className="w-1/2 p-4 sm:w-1/2 lg:w-1/4" ref={addToProductsRefs}>
            <Link href={category.link}>
              <div className="relative overflow-hidden rounded-lg cursor-pointer group" >
                <div ref={addToRefs} className='mx-auto overflow-hidden ease-in-out rounded-full w-[80px] h-[80px] md:w-48 md:h-48 '>
                  <div className="transition transition-transform duration-500 ease-in-out transform rounded-full shadow-2xl w-[80px] h-[80px] md:w-48 md:h-48 image-container group-hover:scale-125">
                    <Image 
                      src={category.imageUrl} 
                      alt={category.name} 
                      layout="fill" 
                      objectFit="cover" 
                    />
                  </div>
                </div>
                <strong className="block py-2 text-center">{category.name}</strong>
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
