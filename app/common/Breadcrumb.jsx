"use client"
import React, { useEffect, useState ,useRef} from "react";
import useFadeInFromTop from "../hooks/useFadeInFromTop";

const Breadcrumb = ({ pageTitle, items }) => {
  const [height, setHeight] = useState(200); // Initial height set to 200px

  useEffect(() => {
    // Function to update height based on screen width
    const updateHeight = () => {
      const screenWidth = window.innerWidth;
      const newHeight = screenWidth <= 640 ? 120 : 200; // If screen width is less than or equal to 640px, set height to 120px, otherwise set it to 200px
      setHeight(newHeight);
    };

    // Update height when component mounts and on window resize
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const backgroundStyle = {
    backgroundImage: "url(/images/breadcrumb2.jpg)",
    backgroundSize: "contain",
    backgroundPosition: "top",
    backgroundColor: "rgba(0, 0, 0, 1)",
    color: "white",
    textAlign: "center",
    backgroundAttachment: "fixed",
    height: `${height}px`, // Set height dynamically
  };

  const backgroundStyle2 = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "20px",
    textAlign: "center",
  };
    const textTop = useRef(null);
  useFadeInFromTop(textTop);
  return (
    <div style={backgroundStyle} className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full gap-3 text-center" style={backgroundStyle2}>
        <h1 className="text-2xl lg:text-6xl" ref={textTop}>{pageTitle}</h1>
        <div className="flex items-center justify-center">
          <span className="text-gray-300">Home</span>
          {items.map((item, index) => (
            <span key={index} className="mx-2 text-gray-300">
              {" "}
              &gt; {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
