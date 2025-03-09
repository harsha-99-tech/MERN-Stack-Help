import React, { useState, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import the images
import image1 from "../../assets/image2.jpg";
import image2 from "../../assets/image3.jpg";
import image3 from "../../assets/image4.jpg";
import image5 from "../../assets/image.jpg";

const images = [
  {
    id: 1,
    src: image1,
    name: "Switzerland",
    desc: "Renowned for its breathtaking Alpine scenery and precision in craftsmanship",
  },
  {
    id: 2,
    src: image2,
    name: "Finland",
    desc: "Known for its saunas, lakes, and a deep connection to nature",
  },
  {
    id: 3,
    src: image3,
    name: "India",
    desc: "Famous for its rich culture, historical landmarks, natural beauty, and diverse cuisine",
  },
  {
    id: 4,
    src: image2,
    name: "Australia",
    desc: "Distinguished by its diverse ecosystems, ranging from beaches to bushland",
  },
  {
    id: 5,
    src: image5,
    name: "Netherland",
    desc: "Characterized by its iconic canals, tulip fields, and windmills",
  },
  {
    id: 6,
    src: image3,
    name: "Ireland",
    desc: "Known for its lush green landscapes and rich cultural heritage",
  },
];

const ImageSlider = () => {
  const [slideItems, setSlideItems] = useState(images);

  const nextSlide = useCallback(() => {
    setSlideItems((prev) => [...prev.slice(1), prev[0]]);
  }, []);

  const prevSlide = useCallback(() => {
    setSlideItems((prev) => [
      prev[prev.length - 1],
      ...prev.slice(0, prev.length - 1),
    ]);
  }, []);

  const getSlideClassName = (index) => {
    const baseClasses =
      "absolute rounded-xl bg-cover bg-center transition-all duration-500 shadow-lg";
    if (index === 0) return `${baseClasses} w-full h-full rounded-xl`;
    if (index === 1)
      return `${baseClasses} w-48 h-72 top-1/2 left-[calc(50%+100px)] transform -translate-x-1/2 -translate-y-1/2`;
    if (index === 2)
      return `${baseClasses} w-48 h-72 top-1/2 left-[calc(50%+220px)] transform -translate-y-1/2`;
    if (index === 3)
      return `${baseClasses} w-48 h-72 top-1/2 left-[calc(50%+440px)] transform -translate-y-1/2`;
    return `${baseClasses} w-48 h-72 top-1/2 left-[calc(50%+440px)] transform -translate-y-1/2 opacity-0`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="relative w-[100%] h-[100vh] bg-gray-100 rounded-xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {slideItems.map((item, index) => (
            <div
              key={item.id}
              className={getSlideClassName(index)}
              style={{ backgroundImage: `url(${item.src})` }}
            >
              {index === 0 && (
                <div className="absolute top-1/2 left-24 text-white w-72 transform -translate-y-1/2">
                  <h2 className="text-4xl font-bold opacity-0 animate-fade-in">
                    {item.name}
                  </h2>
                  <p className="mt-2 text-lg opacity-0 animate-fade-in delay-200">
                    {item.desc}
                  </p>
                  <button className="mt-4 px-4 py-2 bg-white text-black rounded-lg opacity-0 animate-fade-in delay-300 hover:bg-gray-100 transition-colors">
                    See More
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button
            onClick={prevSlide}
            className="p-3 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors"
            aria-label="Previous slide"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors"
            aria-label="Next slide"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
