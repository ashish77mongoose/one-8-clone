import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
const WorldSwiper = () => {
  return (
    <Swiper
        slidesPerView={5}
        spaceBetween={0}
        grabCursor={true}
        className="mySwiper"
      >
        {Array(6).fill('2').map((slide,index)=>(
            <SwiperSlide className="group !h-[60vh] transition-[width] !duration-300 hover:!w-[500px] relative bg-[url('../public/img/virat-world.jpg')]"></SwiperSlide>
        ))}
        
      </Swiper>
  )
}

export default WorldSwiper