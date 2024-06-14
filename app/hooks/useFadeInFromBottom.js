// hooks/useFadeInFromBottom.js
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useFadeInFromBottom = (ref) => {
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { y: 10, opacity: 0.5 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          scrollTrigger: {
            trigger: ref.current ,
            start: "top 90%",
            end: "bottom 50%",
            markers: false,
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [ref]);
};

export default useFadeInFromBottom;
