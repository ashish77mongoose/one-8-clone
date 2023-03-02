import React, { useContext, useLayoutEffect, useState } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { NavLink } from 'react-router-dom';
import { navLinks } from './../utils/constants';
import DarkLightMode from './DarkLightMode/DarkLightMode';
gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
  useLayoutEffect(() => {
    const mmNav = gsap.matchMedia();
    let ctxNav;
    mmNav.add("(min-width: 800px)", () => {
      ctxNav = gsap.context((self) => {
        let navTl = gsap.timeline();
        ScrollTrigger.create({
          start: '10px start',
          end: 99999,
          onEnter: () => {
            navTl.to('nav .logo', { fontSize: 40, duration: 1, ease: 'power2.in' });
          },
          onLeaveBack: () => {
            navTl.to('nav .logo', { fontSize: 60, duration: 1, ease: 'power2.in' });
          }

        });
      });
    });
    mmNav.add("(max-width: 480px)", () => {
      ctxNav = gsap.context((self) => {
        let navTl = gsap.timeline().reverse();
        let lines=gsap.utils.toArray('.menu-btn div');

        navTl
        .to(lines[0],{opacity:0,y:8},'opaque')
        .to(lines[1],{opacity:0},0)
        .to(lines[2],{opacity:0,y:-8},'opaque')
        .to(lines[0],{rotate:45,opacity:1},'line')
        .to(lines[2],{rotate:-45,opacity:1},'line')
      
        self.add("menuButtonClick", (e) => {
          if (navTl.reversed()) {
            navTl.timeScale(4); 
            navTl.play();
          }
          else{
            navTl.reverse();

          }
         
        });
      });
      document.querySelector('.menu-btn').addEventListener("click", (e) => ctxNav.menuButtonClick(e));
     

    });
    return () => {
      ctxNav.revert();
      mmNav.revert();
    };

  }, []);

  return (
    <nav className='flex items-center justify-center py-2 fixed top-0 left-0 w-full z-50 dark:bg-black bg-theme-lightblue shadow-sm shadow-black/10 dark:shadow-white/20'>
      <div className="container flex justify-between items-center gap-8">
        <NavLink to='/' className={'font-auxbold logo  text-2xl lg:text-6xl leading-[1] font-bold text-theme-red dark:text-white/90 dark:hover:text-white duration-200 '}>Ashish</NavLink>
        <ul className='lg:flex hidden gap-8 flex-1 justify-end items-center'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.path} className='uppercase font-dmsans font-semibold dark:text-white text-black'>{link.title}</NavLink>
            </li>
          ))}
        </ul>
       <div className='flex items-center gap-2'>
       <DarkLightMode />
        <button className='w-6 h-8  items-center justify-center relative menu-btn lg:hidden flex'>
          <div className='w-6 translate-y-0 h-[2px] bg-theme-red dark:bg-theme-main absolute top-2'></div>
          <div className='w-6 translate-y-0 h-[2px] bg-theme-red dark:bg-theme-main absolute top-4'></div>
          <div className='w-6 translate-y-0 h-[2px] bg-theme-red dark:bg-theme-main absolute top-6'></div>
        </button>

       </div>
      </div>

    </nav>
  )
}

export default Navbar