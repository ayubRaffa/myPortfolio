import React, { useEffect } from 'react'
import Cta from './Cta';
import gsap from 'gsap';
import personalPic from '../assets/personalPic.png'
import Info from './Info';
import mainbg from '../assets/mainbg2.png';
import pexels from '../assets/pexels6.jpg';


const Main = ({ CanLoadMainContent }) => {
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
      }, 1.4).to(".pinkBlur", {
        opacity: .3,
        duration: 2,
        ease: "power.in",
      }).to(".blueBlur", {
        opacity: .4,
        duration: 2,
        ease: "power.in",
      }, 2)
    }
  }, [CanLoadMainContent])


  return (
    <>
      <main className="Main mt-2 opacity-0 scale-125 relative min-h-screen bg-[color:var(--color-bg)] bg-blend- bg-no-repeat bg-cover z-40 " style={{ backgroundImage: `url(${mainbg})`}}>
        {/* blured background */}
        <div className=" absolute rotate-180 lg:rotate-0 bottom-0 lg:top-0 right-0 w-full h-full md:h-2/3  lg:w-1/2 lg:h-[50rem] md:bg-contain bg-cover   bg-no-repeat  bg-[color:var(--color-bg)] bg-blend-lighten -z-20" style={{ backgroundImage: `url(${pexels})`}}/>
        <div className='pinkBlur absolute -bottom-20 -right-20 h-2/3 w-[90vw] lg:w-[60vw] blur-[100px]  rounded-full bg-pink mix-blend-color opacity-0 -z-10' />
        <div className='blueBlur absolute -top-20 -left-20 h-2/3 right-1/3 blur-[100px]  rounded-full bg-blue-500 mix-blend-color opacity-0 -z-10' />
        {/* headers */}
        <div className="relative flex flex-col items-start justify-center min-h-screen px-4 scale-110 opacity-0 title md:w-2/3 lg:w-1/2 md:ml-6">
          <div className="flex flex-col justify-center gap-5 text-right md:text-left pb-28">
            <h1 className='text-6xl font-extrabold capitalize  lg:text-5xl xl:text-6xl stroke-blue-2 font-alcantera'>HI, it me! ayoub <br />
              i make web sites, and other <pre className='font-header'>stuff &#x1F604;</pre>
            </h1>
            <h2 className='text-3xl font-bold stroke-blue-1 lg:text-3xl font-alcantera'>
              by the way, i am not a programmer !
              im just someone who
              loves
              <strong className='block py-2 text-4xl font-extrabold text-blue-500 uppercase  stroke-blue-2 font-header '  > coding</strong>
            </h2>
            {/* call to action button */}
            <Cta />
          </div>
        </div>
        {/* personalPicnal image */}
        <img src={personalPic} alt='personal' className='saturate-[.75] personalPic absolute bottom-[-3rem] right-[40%] md:right-[10%] h-[calc(25rem+15vw)] lg:h-[100%]  scale-105 z-50  opacity-0 translate-x-10' />

      </main >
      {/* //* Info section */}
      <Info />
    </>
  )
}

export default Main