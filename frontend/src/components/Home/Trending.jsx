import ProductCard from "./ProductCard";
import { products } from "../../data/products";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const LatestProducts = () => {
  return (
    <section className="max-w-7xl mx-auto mt-4 pt-4 ">
      <div className="flex justify-between items-center mb-3 px-4">
        <h2 className="text-2xl font-bold">LATEST PRODUCTS</h2>
        <button className="text-red-600 font-semibold">View All</button>
      </div>

        <Swiper  
          spaceBetween={20}
          slidesPerView={5}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 }, 
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
    <section className="max-w-7xl mx-auto pt-4 ">
      <div className="flex justify-between items-center mb-3 px-4">
        <h2 className="text-2xl font-bold">TRENDING PRODUCTS</h2>
        <button className="text-red-600 font-semibold">View All</button>
      </div>

        <Swiper  
          spaceBetween={20}
          slidesPerView={5}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
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


export {LatestProducts, TrendingProducts };
