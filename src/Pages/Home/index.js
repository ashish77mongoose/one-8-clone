import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useContext, useLayoutEffect, useState } from 'react'
import { modeContext } from '../../App';
import HomePopup from '../../components/HomePopup';
import { socialLinks } from '../../utils/constants';
import { icons } from './../../utils/icons';
import { useEffect } from 'react';


gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const [popup,setPopup]=useState(false);
  const {mode,setMode}=useContext(modeContext);
  useLayoutEffect(() => {

    let ctx = gsap.context((self) => {
      let videBtnTl = gsap.timeline({}).reverse();
      const video = document.querySelector('.video video');
      let textStrokeEffect = gsap.utils.toArray('.text-stroke-effect');
      let textwithOutStroke = gsap.utils.toArray('.text-without-stroke');
      gsap.fromTo('.chevrondown', { y: -8 }, { y: 2, repeat: -1, yoyo: true, duration: 1 });
      gsap.fromTo('.video-btn img', { rotate: 0 }, { rotate: 360, repeat: -1, duration: 15 });
      videBtnTl.to(textStrokeEffect[0], { y: "-100vh" }, 'upper')
        .to(textwithOutStroke[0], { y: "-100vh" }, 'upper')
        .to(textStrokeEffect[1], { y: "100vh" }, 'upper')
        .to(textwithOutStroke[1], { y: "100vh" }, 'upper')
        .to('.video video', { opacity: 1 })
        .to('.video-btn-wrapper', { bottom: "85%", right: -120, duration: 0.5 })
        .to('.video-btn', { opacity: 0 })
        .fromTo('.close-btn', { opacity: 0, zIndex: 1 }, { opacity: 1, zIndex: 3 })

      self.add("videoButtonClick", (e) => {
        if (videBtnTl.reversed()) {
          videBtnTl.play();
          setTimeout(() => {
            video.controls = true;

          }, 500)
          if (ScrollTrigger.isTouch) {
            videBtnTl.reversed()
          }
        } else {
          videBtnTl.reverse();
          setTimeout(() => {
            gsap.to('.video video', { opacity: 0.6 });
            video.controls = false;
          }, 500)

        }

      });
      self.add("videoCloseClick", (e) => {
        if (videBtnTl.reversed()) {
          videBtnTl.play();
          setTimeout(() => {
            gsap.to('.video video', { opacity: 1 });
            video.controls = true;

          }, 500)
          ScrollTrigger.addEventListener("scrollStart", () => console.log("scrolling satrted after video btn!"));
        } else {
          videBtnTl.reverse();
          setTimeout(() => {
            gsap.to('.video video', { opacity: 0.6 });

            video.controls = false;

          }, 500)

        }
      });



      const tl = gsap.timeline();
      
      ScrollTrigger.create({
        trigger: ".home",
        start: "top top",
        end: "+=5000",
        pin: true,
        scrub: 1,
        animation: tl
      });
      tl.from('.strokes-section', {
        xPercent: 100,
        duration:2,
      }, 'label').from('.text-without-stroke', {
        scale: 0.90,
        opacity: 0.25
      })
        .from('.text-stroke-effect', {
          opacity: 0
        })
        .from('.video', {
          autoAlpha: 0
        })
        .fromTo('.strokes-section', {
          background: mode=='dark'?'#7c7c7c':'white',
        }, { backgroundColor:mode=='dark'? 'black':'#E6EFFC' }, 'label')
        .to('.strokes-section video', { opacity: 0.55 })
        .to('.world-section', {y:'-120vh', duration: 5 }, 'card')
        .to('.associations',{opacity:1,pointerEvents:'auto', duration:0},'<1')
        .to(['header','.strokes-section'],{opacity:0,pointerEvents:'none' ,duration:0},'<0.5')
        // .to('.associations',{opacity:1,duration:0},'<1.5')
        .to('.associations',{opacity:0,pointerEvents:'none',duration:2})
        .to('.media',{opacity:1,pointerEvents:'auto',duration:1})
        .from('.media .media-text',{xPercent:100,duration:1},'<')
        .from('.media .grid > div',{yPercent:60,duration:1,opacity:0,stagger:0.8})
        .to('.media', {y:'-120vh', duration: 3 })
        .to('.get-in-touch',{opacity:1,pointerEvents:'auto',duration:2},'<')

    });


    document.querySelector('.video-btn').addEventListener("click", (e) => ctx.videoButtonClick(e));
    document.querySelector('.close-btn').addEventListener("click", (e) => ctx.videoCloseClick(e));

    return () => ctx.revert();

  }, [mode]);
  useEffect(()=>{
   setTimeout(()=>{
    setPopup(true);
   },2000)

  },[])
  return (
    <>
    <div className='relative overflow-hidden home'>
     
        <header className='flex items-center flex-col gap-2 relative min-h-screen justify-center  overflow-hidden pt-20 z-[24]'>

          <div className="container flex flex-col gap-2 relative z-[3] ">
            <div className='relative flex gap-24 w-full justify-center'>
              <div className='font-auxbold text-theme-red dark:text-theme-main uppercase text-9xl '>Web</div>
              <div className='font-auxbold text-theme-red dark:text-theme-main uppercase text-9xl '>Designer</div>
              <img className='absolute z-[-1] left-[10%] -top-[100px] max-w-[500px] filter ' src="/img/banner_vk.png" alt="banner_vk" />
            </div>
            <div className='  w-full max-w-[685px] ml-auto'>
              <p className='mb-8 text-3xl leading-10 font-dmsans dark:text-white text-black/80'>
                It is not just a shirt number, it is the prelude of a legacy, a celebration, an inspiration.</p>
              <button className='btn btn-primary-outline relative z-50'>Know More</button>
            </div>
          </div>
          <div className='flex items-center gap-2  ax-center bottom-4'>
            <span className='font-dmsans uppercase font-medium text-base tracking-[3px] dark:text-theme-main text-theme-red'>Scroll Down</span>
            <span className='text-xl chevrondown dark:text-theme-main text-theme-red'>{icons.chevrondown}</span>
          </div>

        </header>
        <section className='strokes-section min-h-screen absolute   w-full left-0 top-0 flex flex-col justify-center items-center pt-20 z-[25]'>
          <div className='text-stroke text-stroke-effect text-[18vh] leading-[1.1] font-auxbold pointer-events-none'>Be Ready</div>
          <div className='text-[18vh] leading-[1.1] font-auxbold pointer-events-none text-without-stroke dark:text-white text-theme-red'>Be Ready</div>
          <div className='text-[18vh] leading-[1.1] font-auxbold pointer-events-none text-without-stroke dark:text-white text-theme-red'>Be Better</div>
          <div className='text-stroke text-stroke-effect text-[18vh] leading-[1.1] font-auxbold pointer-events-none '>Be Better</div>
          <div className="video border dark:border-theme-main border-theme-red max-w-[1000px] h-[500px] w-full a-center z-[2] ">
            <video poster='/img/video-img.jpg' muted src="/img/smoke.mp4" className='object-cover w-full h-full opacity-60'></video>
            <div className='w-24 h-24 absolute -bottom-12 right-12 video-btn-wrapper'>
              <div className="video-btn w-full h-full rounded-full  center  cursor-pointer hover:scale-125 duration-150 relative z-[2]">
                <img className='absolute-img hidden dark:block' src="/img/play-button.png" alt="play-button" />
                <img className='absolute-img dark:hidden block' src="/img/play-button-light.png" alt="play-button" />
                <span className=' z-[2] absolute text-white dark:text-black text-xl'>{icons.play}</span>

              </div>
              <div className="close-btn w-full h-full rounded-full text-8xl center dark:text-white text-black/90  cursor-pointer a-center opacity-0  z-[1]">
                {icons.close}

              </div>
            </div>
          </div>
        </section>
      
      <section className=" world-section   translate-y-full absolute top-0 left-0 w-full  bg-theme-lightblue dark:bg-black  min-h-screen z-[28] pt-24">
        <div className="container">
          <div className="uppercase text-[20vh] font-auxbold leading-[1.1] text-theme-red  dark:text-theme-main">World Of</div>
          <div className="uppercase text-[20vh] font-auxbold leading-[1.1]  text-stroke text-fill-main ">Designs</div>
        </div>
        <div className="container world-design-bottom flex shadow-[0_-19px_37px_7px_rgba(255,255,255,0.8)] dark:shadow-[0_-19px_37px_7px_rgba(0,0,0,0.8)] relative z-10 -mt-12">
          {
            Array(5).fill('2').map((item, index) => (
              <div className=" h-[60vh] transition-all cursor-pointer flex-1  world-cards duration-300  bg-[url('../public/img/virat-world.jpg')] flex flex-col justify-between  relative  group hover:flex-grow-[1.8] ease-in">
                <div className='absolute top-0 left-0 bg-black opacity-50 w-full h-full'></div>
                <div className='flex justify-between py-5 px-4 items-center relative z-10'>
                  <span className='font-bold font-dmsans text-xl'>Athleisure</span>
                  <span className='font-bold delay-300 uppercase font-dmsans text-sm opacity-0 group-hover:opacity-100 duration-200 underline underline-offset-4 cursor-pointer'>Know More</span>
                </div>
                <div className='flex relative z-10 justify-center items-center gap-4 py-5 px-4 opacity-0 group-hover:opacity-100 delay-300 ease-out'>
                  <span className='font-semibold text-sm uppercase font-dmsans'>Follow On</span>
                  <div className="flex gap-2">
                    {socialLinks.map((social, index) => (
                      <a key={index} className='center w-8 h-8 rounded-full text-white bg-theme-red/80 dark:bg-theme-main/80 hover:bg-theme-red duration-100 dark:hover:bg-theme-main' href={social.path} target="_blank" rel="noopener noreferrer">
                        <span>{social.icon}</span>
                      </a>
                    ))}

                  </div>

                </div>

              </div>
            ))
          }



        </div>
        <div className='bg-theme-red dark:bg-theme-main py-4 w-full flex justify-center gap-6 text-white dark:text-black items-center relative z-[11]'>
          <span className='font-bold text-xl uppercase font-auxbold'>Launching Soon</span>
          <span className='font-bold text-2xl'>|</span>
          <span className='font-semibold text-lg'>Eyewear</span>
          <span className='font-semibold text-lg'>|</span>
          <span className='font-semibold text-lg'>Hair Care</span>
          <span className='font-semibold text-lg'>|</span>
          <span className='font-semibold text-lg'>Fitness Equipments</span>

        </div>

      </section>
      <section className="associations opacity-0   absolute top-0 left-0 w-full  bg-theme-lightblue dark:bg-black  min-h-screen z-[23] py-24 dark:bg-[url('../public/img/association.png')]">
        <div className="container">
          <div className="uppercase text-[20vh] font-auxbold leading-[1.1]  text-stroke text-center opacity-60 ">Associations</div>
          <div className='flex gap-8 items-center mt-10'>
            <div className='text-[8vh] text-black/80 dark:text-theme-main font-auxbold drop-shadow-md'>Portfolio</div>
            <div className='h-[10vh] w-[2px] bg-black/30 dark:bg-white/80'></div>
            <div className='text-[8vh] text-red-500  font-auxbold font-bold  relative leading-[1.1]'>Animated On
              <span className='absolute top-full right-0 text-lg text-green-500 uppercase'>Gsap</span></div>


          </div>
          <div className='  w-full max-w-[525px] my-8 '>
            <p className='mb-8 text-3xl leading-10 font-dmsans dark:text-white text-black/80'>
              Shifting our gears to reach a advanced animation on full throttle.</p>
            <button className='btn btn-primary-outline'>Know More</button>
          </div>
        </div>


      </section>
      <section className="media absolute opacity-0    top-0 left-0 w-full  bg-theme-lightblue dark:bg-black  min-h-screen z-[22] py-24 ">
        <div className="container">
          <div className="uppercase text-[18vh] font-auxbold leading-[1.1] text-theme-red  dark:text-theme-main media-text">Media Vault</div>
          <div className='grid grid-cols-3 gap-10 py-6'>
            {
              Array(3).fill('2').map((media, index) => (
                <div className='w-full'>
                  <div className='h-[280px] '>
                    <img className='object-cover h-full w-full ' src="/img/media.png" alt="media" />
                  </div>
                  <div className="py-6 dark:bg-transparent bg-white dark:px-0 px-4">
                    <div className='text-zinc-500 font-bold italic font-dmsans text-base'>10th February, 2023</div>
                    <div className='text-xl leading-[1.6] font-medium font-dmsans my-2 dark:text-white text-black/80'>Virat Kohli to flag off inaugural one8 Run in Bengaluru</div>
                    <button className='font-medium cursor-pointer font-auxbold text-theme-red dark:text-theme-main mt-2 drop-shadow-md'>Explore</button>
                  </div>

                </div>
              ))
            }


          </div>
          <div className='flex justify-center my-6'>
            <button className='btn btn-primary-outline'>View All</button>
          </div>
        </div>


      </section>
      <section className="get-in-touch opacity-0    absolute top-0 left-0 w-full  bg-theme-red dark:bg-theme-main  min-h-screen z-[21] pt-28 ">
        <div className="container">
          <div className="uppercase text-[24vh] dark:get-text-stroke  font-auxbold leading-[1.1]  ">Get</div>
          <div className="uppercase text-[24vh] dark:get-text-stroke font-auxbold leading-[1.1]  ">in Touch</div>
          <div className='mt-6'>
            <div className='dark:text-black text-white font-bold text-4xl dark:text-shadow'>
              ashish77uab@gmail.com
            </div>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a key={index} className='center w-10 h-10 border-2 text-lg border-white rounded-full text-white dark:text-black  bg-theme-red/80 dark:bg-theme-main/80 duration-100 hover:bg-theme-red dark:hover:bg-theme-main' href={social.path} target="_blank" rel="noopener noreferrer">
                  <span>{social.icon}</span>
                </a>
              ))}

            </div>

          </div>


        </div>


      </section>

    </div>
  
    <HomePopup 
     setPopup={setPopup}
     popup={popup}
     />
    </>
  )
}

export default Home