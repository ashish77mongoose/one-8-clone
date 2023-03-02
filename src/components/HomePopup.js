import React from 'react'
import ReactDOM from "react-dom";
import { icons } from './../utils/icons';

const HomePopup = ({setPopup,popup}) => {
  return ReactDOM.createPortal( 
  <div  className={`fixed w-full left-0 h-screen bg-black bg-opacity-50 z-[1000] flex justify-center items-center duration-300 ${popup?`top-0`:`-top-full`}`}>
  <div className='flex justify-center items-center w-full h-full overflow-auto overscroll-y-none box-pack'>
    <div onClick={(e) => e.stopPropagation()} className='max-w-[800px] w-full bg-white  my-10 grid grid-cols-2 '>
        <div className=''>
            <img src="/img/virat-popup.jpg" alt="virat" />
        </div>
        <div className='flex-1 bg-theme-lightblue dark:bg-theme-main p-6 px-8 flex flex-col justify-end relative'>
            <button onClick={()=>setPopup(false)} className='absolute top-3 right-3 text-black border-2 border-black w-7 h-7 center rounded-full text-xl'>{icons.close}</button>
            <h4 className='text-stroke font-auxbold text-white text-4xl'>Ashish Patel</h4>
            <h6 className='text-black  text-3xl font-semibold my-3 font-dmsans '>Join me and witness a new era of running.</h6>
            <p className='text-black  leading-8 font-dmsans text-lg mb-2'>Register today for the one8 Run Bengaluru and embark upon your running journey!</p>
            <button className='btn btn-primary w-full'>Register Now</button>
           
        </div>
     

    </div>
  </div>

</div>,document.getElementById("modal")
    
  )
}

export default HomePopup