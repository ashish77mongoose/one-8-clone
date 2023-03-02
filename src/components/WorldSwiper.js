import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import {socialLinks} from '../utils/constants'
// import required modules
import { Pagination } from "swiper";
const WorldSwiper = () => {
  return (
    <Swiper
    slidesPerView={1.2}
   
        pagination={{
          type: "progressbar",
        }}
        // spaceBetween={0}
        grabCursor={true}
        navigation={true}
        modules={[Pagination]}
        className="world-swiper"
      >
         {
              Array(5).fill('2').map((item, index) => (
                <SwiperSlide className="!h-[75vh] transition-all cursor-pointer  world-cards duration-300  bg-[url('../public/img/virat-world.jpg')]   relative  ease-in">
                  <div className='absolute top-0 left-0 bg-black opacity-50 w-full h-full'></div>
                  <div className='flex justify-between py-4 lg:py-5 px-3 lg:px-4 items-center relative z-10'>
                    <span className='font-bold font-dmsans text-lg lg:text-xl'>Athleisure</span>
                    <span className='font-bold  uppercase font-dmsans text-[12px] lg:text-sm  duration-200 underline underline-offset-8 cursor-pointer'>Know More</span>
                  </div>
                  <div className='flex lg:flex-row flex-col z-10 justify-center items-center gap-2 lg:gap-4 py-5 px-3 lg:px-4  ease-out  bottom-4 ax-center w-full'>
                    <span className='font-semibold text-[12px] lg:text-sm uppercase font-dmsans'>Follow On</span>
                    <div className="flex gap-2">
                      {socialLinks.map((social, index) => (
                        <a key={index} className='center h-7 w-7 lg:w-8 lg:h-8 rounded-full text-white bg-theme-red/80 dark:bg-theme-main/80 hover:bg-theme-red duration-100 dark:hover:bg-theme-main' href={social.path} target="_blank" rel="noopener noreferrer">
                          <span>{social.icon}</span>
                        </a>
                      ))}

                    </div>

                  </div>

                </SwiperSlide>
              ))
            }
        
      </Swiper>
  )
}

export default WorldSwiper