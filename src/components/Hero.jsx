import React, { useEffect } from 'react'
import Cta from './Cta'
import gsap from 'gsap'
import personalPic from '../assets/personalPic.png'
import Info from './Info'
import mainbg from '../assets/mainbg2.png'
import pexels from '../assets/pexels6.jpg'


const Hero = ({ CanLoadMainContent }) => {
  useEffect(() => {
    if (CanLoadMainContent) {
      const tl = gsap.timeline()
      tl.to(".Main", {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power.in",
      }).to('.title', {
        opacity: 1,
        scale: 1,
        duration: 1,
      }).to(".personalPic", {
        translateX: "=2.5rem",
        opacity: 1,
        duration: 2,
        ease: "power.in"
      }, 1.4)/* .to(".pinkBlur", {
        opacity: .3,
        duration: 2,
        ease: "power.in",
      }).to(".blueBlur", {
        opacity: .4,
        duration: 2,
        ease: "power.in",
      }, 2) */
    }
  }, [CanLoadMainContent])


  return (
    <>
      <header className=" Main opacity-0 scale-125 relative bg-[color:var(--color-bg)] bg-no-repeat bg-cover z-40 " style={{ backgroundImage: `url(${mainbg})` }}>
        <div className="hidden md:block absolute rotate-180 lg:rotate-0 bottom-0 lg:top-0 right-0 w-full h-full md:h-2/3  lg:w-1/2 lg:h-[50rem] md:bg-contain bg-cover bg-no-repeat bg-[color:var(--color-bg)] bg-blend-lighten -z-20" style={{ backgroundImage: `url(${pexels})` }} />
        <div className='pinkBlur absolute -bottom-0 -right-0 h-2/3 w-[90vw] lg:w-[60vw] blur-[60px]  rounded-tl-full bg-pink mix-blend-color opacity-30 ' />
        <div className='blueBlur absolute -top-0 -left-0 h-2/3 right-1/3 blur-[60px] rounded-br-full bg-blue-500 mix-blend-color opacity-40 -z-10' />
        <div className="relative flex flex-col items-start justify-center min-h-screen px-4 mt-4 scale-110 opacity-0 title md:w-2/3 lg:w-1/2 md:ml-6">
          <div className="flex flex-col justify-center gap-5 text-right md:text-left pb-28">

            <h1 className='text-5xl font-extrabold capitalize lg:text-7xl stroke-blue-2 font-alcantera '>this is a UX/UI designer
						<br />
						& front/back-end web developer.
					</h1>
            <h2 className='text-2xl font-bold stroke-blue-1 lg:text-2xl font-alcantera'>
              by the way, i am not a programmer !
              im just someone who
              loves
              <strong className='block py-2 text-3xl font-extrabold text-blue-500 uppercase stroke-blue-2 font-header '  > coding ! </strong>
            </h2>
            <Cta />
          </div>
        </div>
        <img src={personalPic} alt='personal' className='personalPic absolute bottom-[-3rem] right-[40%] md:right-[10%] h-[calc(25rem+15vw)] lg:h-[100%]  scale-105 z-50  opacity-0 translate-x-10' />

      </header >
      {/* //* Info section */}
      <Info />
    </>
  )
}

export default Hero