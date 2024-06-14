// hooks/useFadeInFromTop.js
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useFadeInFromTop = (ref) => {
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { y: -70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [ref]);
};

export default useFadeInFromTop;
