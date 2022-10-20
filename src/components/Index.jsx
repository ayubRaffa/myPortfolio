import React, { useRef, useState, useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ctx } from './GsapAnimation'
import perso2 from '../assets/perso2.png'
import Main from './Main';
import Info from './Info';
import Skills from './Skills';



const Index = ({ canLoadMainContent }) => {
  useEffect(() => {
    if (canLoadMainContent) {
      const tl = gsap.timeline()
      tl.to(".Main", {
        scale: 1,
        duration: 1,
        ease: "power3.out",
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

  // const toCopy = useRef()

  const animate = useRef()
  useEffect(() => {
    ctx(animate)
    gsap.to(".skills_section", {
      // yPercent: -100 * (sections.length - 1),
      ease: "power.in",
      scrollTrigger: {
        trigger: ".skills_section",
        start: "400px bottom",
        end: "bottom top",
        scrub: 1,
        snap: {
          snapTo: 1 / 2,
          directional: false
        }
        // end: () => "+=" + document.querySelector('.container').offsetWidth

      }
    })
    gsap.to(".objectife_section", {
      // yPercent: -100 * (sections.length - 1),
      scrollTrigger: {
        trigger: ".objectife_section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        snap: {
          duration: { min: 0.2, max: 2 },
          ease: "power.in",
          snapTo: 1 / 2,
          directional: false
        }
        // end: () => "+=" + document.querySelector('.container').offsetWidth

      }
    })

  }, [])
  return (
    <>
      {/* hero */}
      <Main />

      {/* Info */}
      <Info />

      {/*  objectife  */}
      <section className="objectife_section relative  overflow-visible h-screen bg-background2  bg-[url('../src/assets/bbb.png')] bg-cover bg-top   bg-no-repeat bg-blend-overlay flex items-center justify-center">
        {/* second personal image */}
        {/* <img src={perso2} alt="personal-image-2" className='absolute -bottom-[calc(8rem-5%)] md:-bottom-[8rem]  -left-[12rem]  w-[calc(35rem+5vw)] z-20 saturate-80' />
        <div className="flex justify-around items-start h-full">
          <h1 className='flex-1'> <strong></strong></h1>
          <h1 className='flex-1 py-10 text-5xl lg:text-5xl xl:text-6xl font-extrabold capitalize stroke-yellow'>i maybe just a beginner but i may become the
            <strong className='text-4xl lg:text-6xl font-extrabold uppercase text-[#e0f400] font-header py-2 block'>best</strong>
          </h1>
        </div> */}
        <div className='absolute -bottom-36 left-0 z-40 right-0 h-36 bg-blue-900' />
        <div className="relative  px-[calc(1rem+5vw)] max-w-[1000Px] my-24">
          <p className='absolute top-0 left-0 right-0 bottom-0  text-white blur-sm  px-[calc(1rem+5vw)] text-2xl up text-center'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam atque omnis ex in explicabo expedita soluta sit officiis doloribus cumque, pariatur aperiam error quam, dolore inventore magni eius dignissimos amet!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam atque omnis ex in explicabo expedita soluta sit officiis doloribus cumque, pariatur aperiam error quam, dolore inventore magni eius dignissimos amet!
          </p>
          <p className='  text-2xl up text-center text-red-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam atque omnis ex in explicabo expedita soluta sit officiis doloribus cumque, pariatur aperiam error quam, dolore inventore magni eius dignissimos amet!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam atque omnis ex in explicabo expedita soluta sit officiis doloribus cumque, pariatur aperiam error quam, dolore inventore magni eius dignissimos amet!

          </p>
        </div>
      </section>



      <section className="relative h-[60vh] md:h-[90vh]  bg-background2 ">
        {/* <div className="absolute top-0  left-0 right-0 z-60">
          <img src={wave2} alt="wave" className='rotate-180'/>
        </div>
         <div className="absolute top-0  left-0 right-0 z-10">
       <img src={wave1} alt="wave" className='rotate-180'/>
        </div>  */}
        <div className="flex justify-center items-center h-full">
          <div className="relative  px-[calc(1rem+5vw)] max-w-[1000Px]">
            <p className='absolute top-0 left-0 right-0 bottom-0  text-black blur-sm  px-[calc(1rem+5vw)] text-2xl up text-center'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam atque omnis ex in explicabo expedita soluta sit officiis doloribus cumque, pariatur aperiam error quam, dolore inventore magni eius dignissimos amet!
            </p>
            <p className='  text-2xl up text-center text-red-4'>
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







