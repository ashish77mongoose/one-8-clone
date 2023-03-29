import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import {socialLinks} from '../utils/constants'
// import required modules
import { Pagination } from "swiper";
const MediaSwiper = () => {
  return (
    <Swiper
    slidesPerView={1.2}
   
        pagination={{
          type: "progressbar",
        }}
        spaceBetween={10}
        grabCursor={true}
        navigation={true}
        modules={[Pagination]}
        className="world-swiper"
      >
        {
                Array(3).fill('2').map((media, index) => (
                  <SwiperSlide className='w-full' key={index}>
                    <div className='h-[160px] '>
                      <img className='object-cover h-full w-full ' src="/img/media.jpg" alt="ashish" />
                    </div>
                    <div className="py-6 dark:bg-transparent bg-white dark:px-0 px-2">
                      <div className='text-zinc-500 font-bold italic font-dmsans text-base'>10th January, 2023</div>
                      <div className='lg:text-xl text-lg leading-[1.6] font-semibold font-dmsans my-2 dark:text-white text-black/80'>It's me at Lotus Valley Indore</div>
                      <button className='font-medium cursor-pointer lg:text-base text-sm font-auxbold text-theme-red dark:text-theme-main mt-2 drop-shadow-md'>Explore</button>
                    </div>
                  </SwiperSlide>
                ))
              }
        
      </Swiper>
  )
}

export default MediaSwiper