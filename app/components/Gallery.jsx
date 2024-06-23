/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect , useRef } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import useFadeInFromTop from '../hooks/useFadeInFromTop';
import useFadeInFromBottom from '../hooks/useFadeInFromBottom';
import useFadeInFromLeft from '../hooks/useFadeInFromLeft';
import useFadeInFromRight from '../hooks/useFadeInFromRight';


const galleryData = {
  images: [
    "/masala-gallery/rec1.webp",
    "/masala-gallery/sq1.jpeg",
    "/masala-gallery/sq2.jpeg",
    "/masala-gallery/sq3.jpg",
    "/masala-gallery/sq4.jpg",
    "/masala-gallery/rec3.webp",
    "/masala-gallery/rec4.webp",
    "/masala-gallery/rec5.jpg",
  ],
  videos: [
    "https://www.youtube.com/embed/YMjmBF6UEyQ",
    "https://www.youtube.com/embed/VAyXoGSTTks",
    "https://www.youtube.com/embed/0pgf6Hlzbpw"
  ]
};

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [imageError, setImageError] = useState(Array(galleryData.images.length).fill(false));
  const [videoError, setVideoError] = useState(Array(galleryData.videos.length).fill(false));

  const handleImageError = (index) => {
    setImageError(prevState => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const handleVideoError = (index) => {
    setVideoError(prevState => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  useEffect(() => {
    // This will run once when the component mounts
    const handleReload = () => {
      setImageError(Array(galleryData.images.length).fill(false));
      setVideoError(Array(galleryData.videos.length).fill(false));
    };

    window.addEventListener('beforeunload', handleReload);
    return () => {
      window.removeEventListener('beforeunload', handleReload);
    };
  }, []);
  const imageRefTop = useRef(null);
  const imageRefTopb = useRef(null);
  const imageRefLeft = useRef(null);
  const imageRefBottom = useRef(null);
  const imageRefBottomb = useRef(null);

  const imageRefRight = useRef(null);
  const imageRefScale = useRef(null);
  useFadeInFromTop(imageRefTop);
  useFadeInFromTop(imageRefTopb);
  useFadeInFromLeft(imageRefLeft);
  useFadeInFromBottom(imageRefBottom);
  useFadeInFromBottom(imageRefBottomb);
  useFadeInFromRight(imageRefRight);




  return (
    <div>
      {/* Image Section */}
      <div className="relative px-4 py-8 mx-auto max-w-screen-2xl lg:py-16 bg-gray-50">
        <h2 className="mb-4 text-2xl font-semibold">Photos</h2>
        <div className="w-16 h-1 mb-8 bg-red-500"></div>
        <div className="flex flex-col gap-2 overflow-hidden md:flex-row">
          <div className="flex flex-col flex-1 gap-2">
            <div className="flex flex-col flex-1">
              {imageError[0] && <div>Error loading image</div>}
              <img
                className={`object-cover h-full cursor-pointer ${imageError[0] ? 'hidden' : ''}`}
                src={galleryData.images[0]}
                alt="img_01"
                onError={() => handleImageError(0)}
                onClick={() => openLightbox(0)}
                ref={imageRefLeft}
              />
            </div>
            <div className="flex-row flex-1 hidden gap-2 md:flex">
              <div className="flex flex-col flex-1">
                {imageError[1] && <div>Error loading image</div>}
                <img
                  className={`object-cover h-full cursor-pointer ${imageError[1] ? 'hidden' : ''}`}
                  src={galleryData.images[1]}
                  alt="img_02"
                  onError={() => handleImageError(1)}
                  onClick={() => openLightbox(1)}
                ref={imageRefBottom}

                />
              </div>
              <div className="flex-col flex-1 hidden md:flex">
                {imageError[2] && <div>Error loading image</div>}
                <img
                  className={`object-cover h-full cursor-pointer ${imageError[2] ? 'hidden' : ''}`}
                  src={galleryData.images[2]}
                  alt="img_03"
                  onError={() => handleImageError(2)}
                  onClick={() => openLightbox(2)}
                ref={imageRefBottomb}

                />
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <div className="flex-row flex-1 hidden gap-2 md:flex">
              <div className="flex flex-col flex-1">
                {imageError[3] && <div>Error loading image</div>}
                <img
                  className={`object-cover h-full cursor-pointer ${imageError[3] ? 'hidden' : ''}`}
                  src={galleryData.images[3]}
                  alt="img_04"
                  onError={() => handleImageError(3)}
                  onClick={() => openLightbox(3)}
                ref={imageRefTop}

                />
              </div>
              <div className="flex-col flex-1 hidden md:flex">
                {imageError[4] && <div>Error loading image</div>}
                <img
                  className={`object-cover h-full cursor-pointer ${imageError[4] ? 'hidden' : ''}`}
                  src={galleryData.images[4]}
                  alt="img_05"
                  onError={() => handleImageError(4)}
                  onClick={() => openLightbox(4)}
                ref={imageRefTopb}

                />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              {imageError[5] && <div>Error loading image</div>}
              <img
                className={`object-cover h-full cursor-pointer ${imageError[5] ? 'hidden' : ''}`}
                src={galleryData.images[5]}
                alt="img_06"
                onError={() => handleImageError(5)}
                onClick={() => openLightbox(5)}
                ref={imageRefRight}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Embedding Section */}
      <div className="relative px-4 py-8 mx-auto max-w-screen-2xl lg:py-16 bg-gray-50">
        <h2 className="mb-4 text-2xl font-semibold">Videos</h2>
        <div className="w-16 h-1 mb-8 bg-red-500"></div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          {galleryData.videos.map((video, index) => (
            <div key={index} className="relative pb-[56.25%] h-0">
              {videoError[index] && <div>Error loading video</div>}
              <iframe
                className={`absolute top-0 left-0 w-full h-full ${videoError[index] ? 'hidden' : ''}`}
                src={video}
                title={`video_${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onError={() => handleVideoError(index)}
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          slides={galleryData.images.map((src) => ({ src }))}
          open={isOpen}
          index={photoIndex}
          close={() => setIsOpen(false)}
          moveNext={() => setPhotoIndex((photoIndex + 1) % galleryData.images.length)}
          movePrev={() => setPhotoIndex((photoIndex + galleryData.images.length - 1) % galleryData.images.length)}
        />
      )}
    </div>
  );
};

export default Gallery;
