import React, { useEffect, useRef } from "react";
import image1 from "../../assets/image.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image.jpg";
import image6 from "../../assets/image2.jpg";
import image7 from "../../assets/image3.jpg";
import image8 from "../../assets/image4.jpg";

// Images for each line
const imagesLine1 = [image1, image2, image3, image4];
const imagesLine2 = [image5, image6, image7, image8];
const imagesLine3 = [image1, image2, image3, image4];

const PhotoCollage = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  // Function to start infinite scroll animation
  const startScrollAnimation = (lineRef, direction = "left", speed = 1) => {
    let position = 0;
    const scrollDirection = direction === "left" ? -1 : 1;

    const animate = () => {
      if (!lineRef.current) return; // Ensure ref is not null before accessing it

      position += scrollDirection * speed;

      // Apply the translation
      lineRef.current.style.transform = `translateX(${position}px)`;

      // Reset position for infinite loop
      const totalWidth = lineRef.current.scrollWidth;
      const viewWidth = lineRef.current.clientWidth;

      if (scrollDirection === -1 && position <= -totalWidth / 2) {
        position = 0;
      } else if (scrollDirection === 1 && position >= 0) {
        position = -totalWidth / 2;
      }

      requestAnimationFrame(animate);
    };

    animate();
  };

  useEffect(() => {
    if (line1Ref.current && line2Ref.current && line3Ref.current) {
      startScrollAnimation(line1Ref, "left", 1); // Line 1: sliding left
      startScrollAnimation(line2Ref, "right", 1.2); // Line 2: sliding right
      startScrollAnimation(line3Ref, "left", 1.5); // Line 3: sliding left
    }
  }, []);

  return (
    <div className="space-y-8 text-center">
      <div>
        <h1 className="text-white text-2xl font-semibold">
          Infinity Scrolling Photo Collage
        </h1>
      </div>

      {/* Line 1 - Sliding Left */}
      <div className="relative w-full h-64 overflow-hidden">
        <div ref={line1Ref} className="flex whitespace-nowrap">
          {imagesLine1.concat(imagesLine1).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Line 1 - ${index + 1}`}
              className="w-64 h-64 object-cover rounded-lg shadow-lg mx-2"
            />
          ))}
        </div>
      </div>

      {/* Line 2 - Sliding Right */}
      <div className="relative w-full h-64 overflow-hidden">
        <div ref={line2Ref} className="flex whitespace-nowrap">
          {imagesLine2.concat(imagesLine2).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Line 2 - ${index + 1}`}
              className="w-64 h-64 object-cover rounded-lg shadow-lg mx-2"
            />
          ))}
        </div>
      </div>

      {/* Line 3 - Sliding Left */}
      <div className="relative w-full h-64 overflow-hidden">
        <div ref={line3Ref} className="flex whitespace-nowrap">
          {imagesLine3.concat(imagesLine3).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Line 3 - ${index + 1}`}
              className="w-64 h-64 object-cover rounded-lg shadow-lg mx-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoCollage;
