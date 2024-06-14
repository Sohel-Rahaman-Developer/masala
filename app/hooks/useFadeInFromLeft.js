/* eslint-disable react-hooks/exhaustive-deps */
// hooks/useFadeInFromLeft.js
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useFadeInFromLeft = (ref) => {
  useEffect(() => {
    if (ref.current) {
      const tl = gsap.fromTo(
        ref.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            end: "bottom 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cleanup function to kill the timeline and ScrollTrigger instance
      return () => {
        tl.kill();  // This ensures the gsap timeline is properly disposed of
        ScrollTrigger.getById(ref.current)?.kill(); // This ensures the ScrollTrigger instance is properly disposed of
      };
    }
  }, [ref]);
};

export default useFadeInFromLeft;
