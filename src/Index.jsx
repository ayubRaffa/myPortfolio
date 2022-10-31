import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ctx } from './components/GsapAnimation'
import Main from './components/Main';
import Skills from './components/Skills';
import sphereAnime from './assets/sphereAnime.webm';
import sphereAnimeCycle from './assets/sphereAnimeCycle.webm';
import blueWaves from './assets/blueWaves.jpg';
import { FaFigma, FaHtml5, FaCss3, FaJs, FaGit, FaPhp, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiBlender } from 'react-icons/si';
import { DiPhotoshop } from 'react-icons/di';
import iconsAnimation from './assets/iconsAnime.webm';
import iconsAnimationMobile from './assets/iconsAnimeMobile.webm';

const Index = ({ CanLoadMainContent }) => {



  const iconsAnimationRef = useRef()
  const animate = useRef()
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ctx(animate, iconsAnimationRef)
  }, [])
  return (
    <>
      {/* //* hero section */}
      <Main CanLoadMainContent={CanLoadMainContent} />

      {/* //* the quote section  */}
      <section className="  relative  overflow-visible min-h-screen   bg-no-repeat bg-cover bg-blend-screen  flex items-center justify-center">
        <div className="absolute top-0 right-0 left-0 bottom-0  flex justify-center items-center pointer-events-none">
          <video src={sphereAnime} playsInline autoPlay muted loop type="video/webm" className='mix-blend-color-dodge'></video>
        </div>
        <div className="relative  px-[calc(1rem+5vw)] max-w-[1000Px] my-24 ">
          <blockquote className=' capitalize font-extrabold  text-center font-PlayfairDisplayediumItalic'>
            <span className='block whitespace-pre  pr-20 text-4xl text-gray-400 tracking-wider'>progression...</span>
            <span className='block whitespace-pre pl-20 text-4xl text-gray-400 tracking-wider '>not perfection !</span>
          </blockquote>
        </div>
      </section>


      {/* //* my goals section */}
      <section className="snapTogoalsection  relative min-h-screen   w-full">
        <div className=" flex justify-center items-center flex-col ">
          <div className="md:px-[calc(1rem+5vw)] max-w-[1000Px] w-full">
            <h1 className="whitespace-pre translate-y-5 relative font-header text-[4.5rem] md:text-[calc(4.5rem+3vw)]  text-transparent  stroke-blue-1  text-center">
              my objective
              <h1 className="whitespace-pre absolute top-0 left-0 right-0 bottom-0 font-header text-[4.5rem] md:text-[calc(4.5rem+3vw)]  text-transparent stroke-blue-1 blur-lg text-center">
                my objective
              </h1>
            </h1>
          </div>
          <div className="border py-20 relative rounded-3xl  m-3 text-blue-100 px-6 md:px-[calc(1rem+2vw)] max-w-[1000Px] grid grid-cols-2 gap-y-6 gap-x-4 items-start">
            <p className='col-span-2 text-xl md:text-2xl text-left  text-blue-100'>
              seeking a job opportunity that will allow me to use, my skills i have learned so far, personality and organizational skills in an entry-level position as a front/back-end web developer where i can contribute my skills and obtain mentorship
            </p>
            <p className=' text-base md:text-lg text-blue-200 font-light break-words'>
              The opportunity to constantly learn, share knowledge, and be challenged is why I am drawn to web development as a career choice.  </p>
            <p className=' text-base md:text-lg text-blue-200 font-light'>
              create the best user interface on the market is something i have in my TO-DO list
            </p>
          </div>
        </div>
      </section>

      {/* //* the quote section  */}
      <section className="aaaa  relative min-h-screen bg-no-repeat bg-cover flex items-center justify-center">
        <div className="absolute mix-blend-screen translate-x-0 z-50 top-0 right-0 left-0 bottom-0 flex justify-center items-center pointer-events-none">
          <img src={blueWaves} alt="sphere" className='max-w-md ' />
        </div>
        <div className="absolute mix-blend-color-dodge translate-x-0 scale-125  top-0 right-0 left-0 bottom-0 flex justify-center items-center pointer-events-none">
          <img src={blueWaves} alt="sphere" className='max-w-md ' />
        </div>
        <div className=" relative  px-[calc(1rem+5vw)] max-w-[1000Px] my-24 ">
          <div className='z-10 mix-blend-darken -translate-x-16 rotate-[38deg] absolute top-0 bottom-0 left-0 right-0 bg-red-900' />
          <p className='  text-3xl  text-center  font-PlayfairDisplayediumItalic '>
            i may be only a beginner with litter experience, <br /> but i may become the <strong className='block uppercase text-white text-4xl font-PlayfairDisplayediumItalic '>best</strong>
          </p>
        </div>
      </section>



      {/* //* my  section */}
      <section className="relative  flex justify-center items-center  min-h-screen ">
        <div className="">
          <div className="mx-2 border  rounded-2xl py-10 px-[calc(1rem+5vw)] max-w-[1000Px] flex flex-col gap-6 items-center">
            <p className=' text-lg md:text-2xl text-blue-100 text-left   first-line:text-3xl'>
              fueled by high energy levels and boundless enthusiasm, i'm easily inspired and mire then willing to follow my fascinations wherever they take me. i'm passionate, expressive multi-talented spirit with a natural ability to entertain and inspire. i never satisfied with what i have of knowledge, instead i have an almost impulsive need to learn more .
              i enjoy always learning technologies and staying up-to-date on current trends in web design.
            </p>
            <p className='  text-2xl text-blue-100 text-left  '>
              with a strong emphasis on "progressive enhancement", i look for creative ways to push the boundaries of website front-end code without compromising on browser support and performance by combining the
            </p>
          </div>
        </div>
        <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[calc(80vw+80vh)]  w-[calc(15rem+5vw)] origin-center  rotate-45 lg:rotate-[77deg] bg-[#2f4d7a] opacity-100 rounded-full  mix-blend-darken blur-3xl ' />
      </section>


      {/* //* the quote section  */}
      <section className=" relative   h-screen   bg-no-repeat bg-cover bg-blend-screen  flex items-center justify-center">
        <div className="absolute top-0 right-0 left-0 bottom-0  flex justify-center items-center pointer-events-none">
          <video src={sphereAnimeCycle} playsInline autoPlay muted loop type="video/webm" className='mix-blend-color-dodge'></video>
        </div>
        <div className="relative  px-[calc(1rem+5vw)] max-w-[1000Px] my-24 ">
          <p className='  text-3xl up text-center font-PlayfairDisplayediumItalic font-extralight  tracking-wide '>
            combining the art of design with my programming skills is what interest me in front-end development
          </p>
        </div>
      </section>



      {/* skills */}
      {/*  <Skills refer={animate} /> */}


      <section className="snapToskillssection h-fit min-h-screen  ">
        <div className=" px-[calc(1rem+5vw)] flex flex-col justify-center items-center ">
          <div className=" flex justify-center ">
            <video ref={iconsAnimationRef} src={iconsAnimation} muted playsInline className='translate-y-11 mix-blend-lighten'></video>
          </div>
          <h1 className='skillsh1 opacity-0 translate-y-0 text-xl max-w-[16rem] text-center'>this is some of the techniques i learned so far </h1>
          <div className=" flex flex-col md:m-[calc(2rem+3vw)] gap-3">
            <p className=' text-'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, perferendis optio rem incidunt deleniti, pariatur voluptatem delectus ex consequatur sequi eaque, cumque adipisci commodi est ipsam maxime amet ipsum repudiandae.</p>
            <p className=''>allow me to perform a numerous tasks as such:</p>
            <ul className=' pl-[calc(1rem+2vw)] list-disc flex flex-col gap-3 text-gray-300'>
              <li >build mock designs and wireframes for landing pages using <FaFigma color='#F55' /> FIGMA, <DiPhotoshop color='#F55' /> PHOTOSHOP, and <SiBlender color='#F55' /> <a href="https://www.blender.org/" rel='noreferrer' target='_blank' className='underline'>BLENDER</a> </li>
              <li >Utilizing all of <FaHtml5 color='#F55' /> HTML, <FaCss3 color='#F55' /> CSS and <FaJs color='#F55' /> JAVASCRIPT to create accessible,functional user interfaces.  and a Mobile responsive user experience with flexbox an grid that allow Cross-platform accessibility to the Website on any device with primary use on mobile </li>
              <li >Developing applications usign <FaReact color='#F55' /> REACTJS while while managing the state through REACT-QUERY</li>
              <li >Using <FaGit color='#F55' /> locally to track, regulate, and revise the code changes. </li>
              <li >Interact with public APIs to supply the app with the needed data for more user interaction, or scrap the data from a web using RegEx, if no dedicated apis is available</li>
              <li >Create a server side application with <FaPhp color='#F55' /> PHP or <FaNodeJs color='#F55' /> NODEJS to interact with databases and apis by performing the CRUD functions</li>
              <li >design an integrated sql database using MYSQL or postgresSQL from scratch for storing and managing the data,   </li>
              <li>...</li>
            </ul>
          </div>
        </div>
      </section>



      {/* //* my  section */}
      <section className=" min-h-screen flex justify-center items-center">
        <div className="  h-full">
          <div className="relative w-full px-[calc(1rem+5vw)] max-w-[1000Px] flex flex-col gap-6 items-center">
            <div className='  h-[65px] md:h-[120px]'>
              <h1 className="whitespace-pre font-header text-[4.5rem] md:text-[calc(4.5rem+3vw)] text-transparent stroke-blue-1 blur-lg text-center">so why me?</h1>
            </div>
            <div className='-translate-y-[100%]  h-[65px] md:h-[120px]'>
              <h1 className="whitespace-pre font-header text-[4.5rem] md:text-[calc(4.5rem+3vw)] text-transparent  stroke-blue-1  text-center">so why me?</h1>
            </div>
            <h1 className="uppercase text-center font-PlayfairDisplayediumItalic">because i am a team player by nature .</h1>
            <ol className='list-disc px-[calc(1rem+5vw)] flex flex-col gap-4 '>
              <li>
                <p className="">i enjoy working with a team that share me the same enthusiasm and join me in the journey of creativity and invention!</p>
              </li>
              <li>
                <p className="">i am a dynamic web developer seeking new challenges to put my skills under the test, and grow as a professional. <br />
                  iam such a person who can deliver creative solutions to complex project in a fast pace environment</p>
              </li>
              <li>
                <p className="">with my creative problem solving and ability to work under pressure, i know i can contribute to the team in the best may possible</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

    </ >
  )
}

export default Index







