import React from 'react'
import ReactDOM from "react-dom";
import { icons } from '../utils/icons';

const OnLoadPopUp = ({setPopup,popup}) => {
  return ReactDOM.createPortal( 
  <div  className={`fixed w-full left-0 h-screen bg-black bg-opacity-50 z-[1000] flex justify-center items-center duration-300 ${popup?`top-0`:`-top-full`}`}>
  <div className='flex justify-center items-center w-full h-full overflow-auto overscroll-y-none box-pack'>
    <div onClick={(e) => e.stopPropagation()} className='max-w-[800px] w-full bg-white  my-10 mx-4 grid grid-cols-1 lg:grid-cols-2 relative '>
        <div className='lg:max-h-max max-h-[300px]'>
            <img src="/img/d4.jpg" alt="ashish" />
        </div>
        <div className='flex-1 bg-theme-lightblue dark:bg-theme-main p-6 px-8 flex flex-col justify-end lg:relative'>
            <button onClick={()=>setPopup(false)} className='absolute top-3 right-3 text-black border-2 border-black w-7 h-7 center rounded-full text-xl'>{icons.close}</button>
            <h4 className='lg:text-stroke font-auxbold text-white text-2xl lg:text-4xl'>Ashish Patel</h4>
            <h6 className='text-black  text-lg lg:text-3xl font-semibold my-2 lg:my-3 font-dmsans '>Join me and witness a new era of Website Designs.</h6>
            <p className='text-black leading-6 lg:leading-8 font-dmsans text-lg mb-2'>It is not just a Website Design, it is the showcase of my skills and learning.</p>
            <button className='btn btn-primary w-full'>Coming Soon</button>
           
        </div>
     

    </div>
  </div>

</div>,document.getElementById("modal")
    
  )
}

export default OnLoadPopUp