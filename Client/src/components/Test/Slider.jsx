import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import the images
import image1 from "../../assets/image2.jpg";
import image2 from "../../assets/image3.jpg";
import image3 from "../../assets/image4.jpg";
import image4 from "../../assets/img (1).jpg";
import image5 from "../../assets/img (2).jpg";

const cards = [
  {
    id: 1,
    img: image1,
    badge: "Designer",
    badgeColor: "bg-pink-200 text-pink-700",
  },
  {
    id: 2,
    img: image2,
    badge: "Developer",
    badgeColor: "bg-blue-200 text-blue-700",
  },
  {
    id: 3,
    img: image3,
    badge: "Marketer",
    badgeColor: "bg-orange-200 text-orange-700",
  },
  {
    id: 4,
    img: image4,
    badge: "Gamer",
    badgeColor: "bg-green-200 text-green-700",
  },
  {
    id: 5,
    img: image5,
    badge: "Editor",
    badgeColor: "bg-yellow-200 text-yellow-700",
  },
];

const CardSlider = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-10">
      {/* Swiper Container with Proper Positioning */}
      <div className="relative max-w-6xl w-full px-12">
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            el: ".custom-pagination",
          }}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="p-5"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="relative group">
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={card.img}
                    alt={card.badge}
                    className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold shadow-md ${card.badgeColor}`}
                  >
                    {card.badge}
                  </span>
                </div>
                {/* Content */}
                <div className="mt-4 text-center">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Lorem ipsum dolor sit amet elit.
                  </h2>
                  {/* Arrow Button */}
                  <div className="mt-4 flex justify-center">
                    <button className="p-2 w-9 h-9 border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 group-hover:rotate-45 transition-all duration-300 hover:bg-blue-500 hover:text-white">
                      →
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Buttons - Completely Outside */}
      <button className="custom-prev absolute left-5 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white shadow-lg rounded-full border border-gray-300 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 z-10">
        ❮
      </button>
      <button className="custom-next absolute right-5 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white shadow-lg rounded-full border border-gray-300 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 z-10">
        ❯
      </button>

      {/* Pagination Dots - Fully Below */}
      <div className="custom-pagination mt-6 flex justify-center"></div>
    </div>
  );
};

export default CardSlider;
