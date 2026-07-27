import ProductCard from "./ProductCard";
import { products } from "../../data/products";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const LatestProducts = () => {
  return (
    <section className="max-w-7xl mx-auto mt-4  px-3 sm:px-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
          LATEST PRODUCTS
        </h2>

        <button className="text-sm sm:text-base text-red-600 font-semibold hover:underline">
          View All
        </button>
      </div>

      <Swiper
        spaceBetween={16}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          480: {
            slidesPerView: 2.4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 18,
          },
        }}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const TrendingProducts = () => {
  return (
    <section className="max-w-7xl mx-auto py-4 px-3 sm:px-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
          TRENDING PRODUCTS
        </h2>

        <button className="text-sm sm:text-base text-red-600 font-semibold hover:underline">
          View All
        </button>
      </div>

      <Swiper
        spaceBetween={16}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          480: {
            slidesPerView: 2.4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 18,
          },
        }}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export { LatestProducts, TrendingProducts };