import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ctx } from './components/GsapAnimation'
import Main from './components/Main';
import Info from './components/Info';
import Skills from './components/Skills';
import abstraction from './assets/0000-0500k.webm';



const Index = ({ canLoadMainContent }) => {
  useEffect(() => {
    if (canLoadMainContent) {
      const tl = gsap.timeline()
      tl.to(".Main", {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power.out",
      }).to(".personalPic", {
        translateX: "=2.5rem",
        opacity: 1,
        duration: 2,
        ease: "power.out"
      }).to(".pinkBlur", {
        opacity: .2,
        duration: 2,
        ease: "power.in",
      }).to(".blueBlur", {
        opacity: .2,
        duration: 2,
        ease: "power.in",
      }, 3)
    }
  }, [canLoadMainContent])

  gsap.registerPlugin(ScrollTrigger)

  const animate = useRef()
  useEffect(() => {
    ctx(animate)
  }, [])
  return (
    <>
      {/* hero */}
      <Main />

      {/* Info */}
      <Info />

      {/*  the goal section  */}
      <section className="the goal_section relative  overflow-visible h-screen bg-background2  bg-no-repeat bg-cover bg-blend-screen  flex items-center justify-center">
        <div className="absolute top-0 right-0 left-0 bottom-0  flex justify-center items-center pointer-events-none">
          <video src={abstraction} playsinline autoPlay muted loop type="video/webm" className='mix-blend-color-dodge'></video>
        </div>
        {/* second personalPic image */}
        {/* <img src={personalPic2} alt="personalPic-image-2" className='absolute -bottom-[calc(8rem-5%)] md:-bottom-[8rem]  -left-[12rem]  w-[calc(35rem+5vw)] z-20 saturate-80' />
        <div className="flex justify-around items-start h-full">
          <h1 className='flex-1'> <strong></strong></h1>
          <h1 className='flex-1 py-10 text-5xl lg:text-5xl xl:text-6xl font-extrabold capitalize stroke-yellow'>i maybe just a beginner but i may become the
            <strong className='text-4xl lg:text-6xl font-extrabold uppercase text-[#e0f400] font-header py-2 block'>best</strong>
          </h1>
        </div> 
        <div className='absolute -bottom-36 left-0 z-40 right-0 h-36 bg-blue-900' />
      */}  <div className="relative  px-[calc(1rem+5vw)] max-w-[1000Px] my-24 ">
          {/*   <p className='absolute top-0 left-0 right-0 bottom-0  text-white blur-sm  px-[calc(1rem+5vw)] text-2xl up text-center'>
            </p> */}
          <p className='  text-2xl up text-center text-red-4'>
            i may be only a beginner with litter experience, <br /> but i may become the <strong className='block uppercase text-pink-500 text-3xl '>best</strong>
          </p>
        </div>
      </section>



      <section className="relative h-screen bg-background2 ">
        {/* <div className="absolute top-0  left-0 right-0 z-60">
          <img src={wave2} alt="wave" className='rotate-180'/>
        </div>
         <div className="absolute top-0  left-0 right-0 z-10">
       <img src={wave1} alt="wave" className='rotate-180'/>
        </div>  */}

        <div className="flex justify-center items-center h-full">
          <div className="relative  px-[calc(1rem+5vw)] max-w-[1000Px]">
            {/* <p className='absolute top-0 left-0 right-0 bottom-0  text-black blur-sm  px-[calc(1rem+5vw)] text-2xl up text-center'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam atque omnis ex in explicabo expedita soluta sit officiis doloribus cumque, pariatur aperiam error quam, dolore inventore magni eius dignissimos amet!
            </p> */}
            <p className='  text-2xl up text-center  text-red-4'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam atque omnis ex in explicabo expedita soluta sit officiis doloribus cumque, pariatur aperiam error quam, dolore inventore magni eius dignissimos amet!
            </p>
          </div>

        </div>
      </section>

      {/* skills */}
      <Skills refer={animate} />


      <section className='h-96'></section>
    </ >
  )
}

export default Index







