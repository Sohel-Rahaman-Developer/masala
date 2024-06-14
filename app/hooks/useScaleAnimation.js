import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScaleAnimation = (refs) => {
  useEffect(() => {
    if (refs.current) {
      refs.current.forEach((el) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, scale: 0 },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }
  }, [refs]);
};

export default useScaleAnimation;
