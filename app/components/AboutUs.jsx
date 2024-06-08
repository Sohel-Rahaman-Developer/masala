"use client"
import React, { useEffect, useState } from 'react';
import aboutUsData from '../data/aboutUs.json';

const AboutUs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(aboutUsData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-12">
        {data.sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:pl-8' : 'lg:pr-8'}`}>
              <h3 className="text-red-600 text-2xl font-bold mb-4">{section.title}</h3>
              {section.content.map((paragraph, i) => (
                <p key={i} className="mt-4 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
