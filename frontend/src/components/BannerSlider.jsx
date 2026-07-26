import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const banners = [
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=500&fit=crop",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=500&fit=crop",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=500&fit=crop",
];

export default function BannerSlider() {
  return (
    <div className="p-3">

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
      >
        {banners.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              className="rounded-3xl h-56 sm:h-64 md:h-72 w-full object-cover"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}