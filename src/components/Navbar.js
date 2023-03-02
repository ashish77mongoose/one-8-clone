import React, { useContext, useLayoutEffect, useState } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { NavLink } from 'react-router-dom';
import { navLinks } from './../utils/constants';
import DarkLightMode from './DarkLightMode/DarkLightMode';
gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context((self) => {
  let navTl=gsap.timeline();
  // navTl.to('nav .logo', { fontSize:36, duration: 0.5, ease: 'power2.in',paused:true});
  ScrollTrigger.create({
    start: '10px start',
    end: 99999,
    onEnter:()=>{
      navTl.to('nav .logo', { fontSize:40, duration: 1, ease: 'power2.in'}); 
    },
    onLeaveBack:()=>{
      navTl.to('nav .logo', { fontSize:60, duration: 1, ease: 'power2.in'}); 
    }
    
  });
});
  return () => ctx.revert();

}, []);
  
  return (
    <nav className='flex items-center justify-center py-2 fixed top-0 left-0 w-full z-50 dark:bg-black bg-theme-lightblue shadow-sm shadow-black/10 dark:shadow-white/20'>
      <div className="container flex justify-between items-center gap-8">
        <NavLink to='/' className={'font-auxbold logo text-6xl leading-[1] font-bold text-theme-red dark:text-white/90 dark:hover:text-white duration-200 '}>Ashish</NavLink>
        <ul className='flex gap-8 flex-1 justify-end items-center'>
         {navLinks.map((link,index)=>(
           <li key={index}>
           <NavLink to={link.path} className='uppercase font-dmsans font-semibold dark:text-white text-black'>{link.title}</NavLink>
         </li>
         ))}
        </ul>
        <DarkLightMode/>

      </div>

    </nav>
  )
}

export default Navbar