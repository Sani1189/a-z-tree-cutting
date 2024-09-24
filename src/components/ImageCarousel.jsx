// src/components/ImageCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required Swiper modules from 'swiper/modules'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const ImageCarousel = () => {
  const images = [
    '/images/tree1.jpg',
    '/images/tree2.jpg',
    '/images/tree3.jpg',
  ];

  return (
    <div className="my-8 mt-20 px-4 sm:px-6 lg:px-0">
      <div className="max-w-full mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          loop={true}
          className="w-full"
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[60vh] lg:h-[50vh] overflow-hidden"> {/* Height adjusted for better appearance */}
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-cover transition duration-300 ease-in-out transform scale-105 hover:scale-110" // Hover effect for scaling
                  loading="lazy"
                />
                                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageCarousel;
