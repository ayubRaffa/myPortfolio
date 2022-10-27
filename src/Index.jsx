import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ctx } from './components/GsapAnimation'
import Main from './components/Main';
import Info from './components/Info';
import Skills from './components/Skills';
import abstractionk from './assets/0000-0500c.webm';
import abstraction from './assets/0000-0500.webm';



const Index = ({ CanLoadMainContent }) => {
  useEffect(() => {
    if (CanLoadMainContent) {
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
  }, [CanLoadMainContent])

  gsap.registerPlugin(ScrollTrigger)

  const animate = useRef()
  useEffect(() => {
    ctx(animate)
  }, [])
  return (
    <>
      {/* //* hero section */}
      <Main />

      {/* //* Info section */}
      <Info />


      {/* //* the quote section  */}
      <section className="the quote_section relative  overflow-visible min-h-screen bg-background-500  bg-no-repeat bg-cover bg-blend-screen  flex items-center justify-center">
        <div className="absolute top-0 right-0 left-0 bottom-0  flex justify-center items-center pointer-events-none">
          <video src={abstraction} playsInline autoPlay muted loop type="video/webm" className='mix-blend-color-dodge'></video>
        </div>
        <div className="relative  px-[calc(1rem+5vw)] max-w-[1000Px] my-24 ">
          <blockquote className=' capitalize font-extrabold  text-center font-PlayfairDisplayediumItalic'>
            <span className='block whitespace-pre  pr-20 text-4xl text-gray-400 tracking-wider'>progression...</span>
            <span className='block whitespace-pre pl-20 text-4xl text-gray-400 tracking-wider '>not perfection !</span>
          </blockquote>
        </div>
      </section>


      {/* //* my goals section */}
      <section className="relative min-h-screen   w-full">
        <div className=" flex justify-center items-center flex-col gap-20 ">
          <div className="relative   md:px-[calc(1rem+5vw)] max-w-[1000Px] w-full">
            <div className='  h-[65px] md:h-[120px]'>
              <div className="font-header text-[88px] md:text-[158px] text-transparent stroke-blue-1 blur-lg text-center"><pre>my objectife</pre></div>
            </div>
            <div className='-translate-y-[100%]  h-[65px] md:h-[120px]'>
              <div className="font-header text-[88px] md:text-[158px] text-transparent  stroke-blue-1  text-center"><pre>my objectife</pre></div>
            </div>
            <p className=' text-2xl text-center  '>
              seeking a job opportunity that will allow me to use, my skills i have learned so far, personality and organizational skills in an entry-level position as a front-end, back-end, or fullstack web developer where i can contribute my skills and obtain mentorship
            </p>
          </div>
          <div className="scale-95 hover:scale-x-105 hover:scale-y-110 transition-scale  duration-700 rounded-3xl shadow-lg shadow-background2-600 border-background2-300 m-3 bg-background2-500 py-4 relative text-gray-200 px-[calc(1rem+5vw)] max-w-[1000Px] flex flex-col gap-4 items-center">
            <p className=' text-sm md:text-md  font-light'>
              fueled by high energy levels and boundless enthusiasm, i'm easily inspired and mire then willing to follow my fascinations wherever they take me. i'm passionate, expressive multi-talented spirit with a natural ability to entertain and inspire. i never satisfied with what i have of knowledge, instead i have an almost impulsive need to learn more .
              i enjoy always learning technologies and staying up-to-date on current trends in web design.
            </p>
            <p className=' text-sm md:text-md  font-light'>
              with a strong emphasis on "progressive enhancement", i look for creative ways to push the boundaries of website front-end code without compromising on browser support and performance by combining the
            </p>
          </div>
        </div>
      </section>

      {/* //* the quote section  */}
      <section className=" quote_section relative   min-h-screen   bg-no-repeat bg-cover bg-blend-screen  flex items-center justify-center">
        <div className="absolute top-0 right-0 left-0 bottom-0  flex justify-center items-center pointer-events-none">
          <video src={abstraction} playsInline autoPlay muted loop type="video/webm" className='mix-blend-color-dodge'></video>
        </div>
        <div className="relative  px-[calc(1rem+5vw)] max-w-[1000Px] my-24 ">
          <p className='  text-2xl up text-center text-red-4'>
            i may be only a beginner with litter experience, <br /> but i may become the <strong className='block uppercase text-[#1d369b] text-3xl '>best</strong>
          </p>
        </div>
      </section>



      {/* //* my  section */}
      <section className="relative min-h-screen bg-background-500">
        <div className="flex justify-center items-center h-full">
          <div className="relative  px-[calc(1rem+5vw)] max-w-[1000Px] flex flex-col gap-6 items-center">
            <p className=' text-lg md:text-2xl up text-center  '>
              fueled by high energy levels and boundless enthusiasm, i'm easily inspired and mire then willing to follow my fascinations wherever they take me. i'm passionate, expressive multi-talented spirit with a natural ability to entertain and inspire. i never satisfied with what i have of knowledge, instead i have an almost impulsive need to learn more .
              i enjoy always learning technologies and staying up-to-date on current trends in web design.
            </p>
            <p className='  text-2xl up text-center  '>
              with a strong emphasis on "progressive enhancement", i look for creative ways to push the boundaries of website front-end code without compromising on browser support and performance by combining the
            </p>
          </div>
        </div>
      </section>

      {/* //* the quote section  */}
      <section className="the quote_section relative  overflow-visible h-screen bg-background-500  bg-no-repeat bg-cover bg-blend-screen  flex items-center justify-center">
        <div className="absolute top-0 right-0 left-0 bottom-0  flex justify-center items-center pointer-events-none">
          <video src={abstractionk} playsInline autoPlay muted loop type="video/webm" className='mix-blend-color-dodge'></video>
        </div>
        <div className="relative  px-[calc(1rem+5vw)] max-w-[1000Px] my-24 ">
          <p className='  text-3xl up text-center font-PlayfairDisplayediumItalic font-extralight text-gray-400 tracking-wide'>
            combining the art of 3D design with my programming skills <br />is what interest me in web development
          </p>
        </div>
      </section>









      {/* skills */}
      <Skills refer={animate} />


      <section className='h-96'></section>
    </ >
  )
}

export default Index







