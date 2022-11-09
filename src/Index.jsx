import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Main from './components/Main';
import sphereAnime from './assets/sphereAnime.webm';
import sphereAnimeCycle from './assets/sphereAnimeCycle.webm';
import blueWaves from './assets/blueWaves.png';
import { FaFigma, FaHtml5, FaCss3, FaJs, FaGit, FaPhp, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiBlender } from 'react-icons/si';
import { DiPhotoshop } from 'react-icons/di';
import iconsAnimation from './assets/iconsAnime.webm';
import iconsAnimationMobile from './assets/iconsAnimeMobile.webm';

gsap.registerPlugin(ScrollTrigger)

const Index = ({ CanLoadMainContent }) => {


  const iconsAnimationRef = useRef()
  const animate = useRef()

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".snapToskillssection",
      start: "top bottom ",
      onEnter: () => {
        gsap.to('.skillsh1', { opacity: 1, y: '-1rem', delay: 6, duration: 2 })
        iconsAnimationRef.current.currentTime = 1.5
        iconsAnimationRef.current.play()
      }
    });


    gsap.utils.toArray('.revealSection').forEach(section => {
      const move = gsap.timeline({ paused: true })
        .to(section, { y: 0, duration: 1, opacity: 1, ease: "power2.in", /* stagger: 0.3  */ })
      const textMove = gsap.timeline({ paused: true })
        .to(section, { y: '-20px', duration: 1, opacity: 0, ease: "power2.out", /* stagger: 0.3  */ })

      ScrollTrigger.create({
        trigger: section,
        start: "top 60%",
        end: 'bottom 40%',
        onEnter: () => move.play(),
        onLeave: () => textMove.play(),
        onEnterBack: () => textMove.reverse(),
        onLeaveBack: () => move.reverse(),
      })
    })
    ScrollTrigger.create({
      trigger: '.quote',
      start: "top 60%",
      end: 'bottom 40%',
      onEnter: () => {
        gsap.to('.foregroundCircle', {
          opacity: .3,
          delay: .4,
          duration: 3,
          ease: 'power4.in'
        })
      }
    })



  }, [])




  return (
    <>
      {/* //* hero section */}
      <Main CanLoadMainContent={CanLoadMainContent} />

      {/* //* the quote section  */}
      <section className=" relative overflow-visible bg-no-repeat bg-cover bg-blend-screen  flex items-center justify-center h-[75vh]">
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


      {/* //* my  objective section */}
      <section className=" revealSection opacity-0 translate-y-6 relative w-full">
        <div className=" flex justify-center items-center flex-col ">

          <fieldset className='border rounded-3xl'>
            <legend className=''>
              <h1 className="whitespace-pre  relative font-header text-[4rem] md:text-[calc(1.5rem+2vw)]  text-transparent  stroke-blue-1  text-center">
                my objective
                <div className="whitespace-pre absolute top-0 left-0 right-0 bottom-0 font-header text-[4.5rem] md:text-[calc(3.5rem+3vw)]  text-transparent stroke-blue-1 blur-sm ">
                  my objective
                </div>
              </h1>
            </legend>
            <div className="pb-20 relative rounded-3xl  m-3 text-blue-100 px-6 md:px-[calc(1rem+2vw)] max-w-[1000Px] grid grid-cols-2 gap-y-6 gap-x-4 items-start">
              <p className='col-span-2 text-xl md:text-2xl text-left  text-blue-100'>
                seeking a job opportunity that will allow me to use, my skills i have learned so far, personality and organizational skills in an entry-level position as a front/back-end web developer where i can contribute my skills and obtain mentorship
              </p>
              <p className=' text-base md:text-lg text-blue-200 font-light break-words'>
                The opportunity to constantly learn, share knowledge, and be challenged is why I am drawn to web development as a career choice.  </p>
              <p className=' text-base md:text-lg text-blue-200 font-light'>
                create the best user interface on the market is something i have in my <b className='whitespace-pre'>TO-DO list</b>
              </p>
            </div>
          </fieldset>
        </div>
      </section>

      {/* //* the quote section  */}
      <section className="quote relative bg-no-repeat bg-cover flex items-center justify-center h-[75vh]">
        <div className="absolute mix-blend-screen translate-x-0 z-50 top-0 right-0 left-0 bottom-0 flex justify-center items-center pointer-events-none">
          <img src={blueWaves} alt="sphere" className='max-w-md opacity-0 foregroundCircle' />
        </div>
        <div className="absolute mix-blend-color-dodge translate-x-0 scale-125  top-0 right-0 left-0 bottom-0 flex justify-center items-center pointer-events-none">
          <img src={blueWaves} alt="sphere" className='max-w-lg  backgroundCircle' />
        </div>
        <div className=" relative  px-[calc(1rem+5vw)] max-w-[1000Px] my-24 ">
          <div className='z-10 mix-blend-darken -translate-x-6 rotate-[45deg] absolute bottom-0  left-0 right-0 h-[70%] bg-[#164d8a]' />
          <p className='font-extrabold capitalize text-3xl  text-center  font-PlayfairDisplayediumItalic tracking-wider text-gray-400'>
            i may be only a beginner with litter experience... <br /> but i may become the <strong className=' block uppercase text-white text-4xl font-PlayfairDisplayediumItalic '>best !</strong>
          </p>
        </div>
      </section>



      {/* //* about me  section */}
      <section className="relative flex justify-center items-center   ">
        <div className="revealSection opacity-0 translate-y-6 ">
          <fieldset className='border rounded-3xl'>
            <legend className=''>
              <h1 className="relative whitespace-pre font-header text-[4rem] md:text-[calc(1.5rem+2vw)]  text-transparent  stroke-blue-1  text-center">
                about me
                <div className="whitespace-pre absolute top-0 left-0 right-0 bottom-0 font-header text-[4.5rem] md:text-[calc(3.5rem+3vw)]  text-transparent stroke-blue-1 blur-sm ">
                  about me
                </div>
              </h1>
            </legend>
            <div className="rounded-2xl pb-10 px-[calc(1rem+5vw)] max-w-[1000Px] flex flex-col gap-6 items-center">
              <p className=' text-lg md:text-2xl text-blue-100 text-left   first-line:text-3xl'>
                powered by high energy levels and boundless excitement, I am easily inspired and ready to follow my fascinations no matter where they take me.
                I always enjoy learning new technologies and keeping up with current web design trends..
              </p>
              <p className='  text-2xl text-blue-100 text-left  '>
                with an emphasis on "gradual improvement", i look for creative ways to push the limits of website front-end code without compromising on browser support and performance,
              </p>
            </div>
          </fieldset>
        </div>
        <div className='pointer-events-none select-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[calc(80vw+80vh)]  w-[calc(15rem+5vw)] origin-center  rotate-45 lg:rotate-[77deg] bg-[#2f4d7a] opacity-100 rounded-full  mix-blend-darken blur-3xl ' />
      </section>


      {/* //* the quote section  */}
      <section className=" relative   h-screen   bg-no-repeat bg-cover bg-blend-screen  flex items-center justify-center">
        <div className="absolute top-0 right-0 left-0 bottom-0  flex justify-center items-center pointer-events-none">
          <video src={sphereAnimeCycle} playsInline autoPlay muted loop type="video/webm" className='mix-blend-color-dodge'></video>
        </div>
        <div className="relative  px-[calc(1rem+5vw)] max-w-[1000Px] my-24 ">
          <p className='font-extrabold capitalize px-10 text-3xl up text-center font-PlayfairDisplayediumItalic tracking-wider text-gray-400'>
            combining the art of design with my programming skills is what interest me in front-end development
          </p>
        </div>
      </section>



      {/* skills */}
      {/*  <Skills refer={animate} /> */}


      <section className="snapToskillssection h-fit min-h-screen  ">
        <div className=" flex justify-center ">
          <video ref={iconsAnimationRef} muted autoPlay playsInline className='translate-y-11 mix-blend-lighten '  >
            <source src={iconsAnimation} media='(min-width:799px)' type='video/webm' />
          </video>
          {/*  <video ref={iconsAnimationRef} muted playsInline className='translate-y-11 mix-blend-lighten hidden md:block'  >
            <source src={iconsAnimation} media='(min-width:799px)' type='video/webm' />
          </video> */}
        </div>
        <div className=" px-[calc(1rem+5vw)] flex flex-col justify-center items-center ">
          <h1 className='skillsh1 opacity-0 translate-y-0 text-xl max-w-[16rem] text-center'>this is some of the techniques i learned so far </h1>
          <div className=" flex flex-col md:m-[calc(2rem+3vw)] gap-3">
            <p className='text-gray-400'>
              since the last 2 years, when i start my multimedia training at the polytechnic school till now and i day after day learning and grasping more and more of technologies and techniques, starting from the basics of html and css to the logics of programing languages, to the manipulation of the DOM with jquery and requesting data with ajax, to the virtual DOM of react and the javascript runtime environment nodejs...
            </p>
            <p className=''>all of that had lead me to be able to perform at least a variety
              of tasks as such :</p>
            <ul className=' pl-[calc(1rem+2vw)] list-disc flex flex-col gap-3 text-gray-300'>
              <li >build mock designs and wireframes for landing pages using <FaFigma color='#F55' />, <DiPhotoshop color='#F55' /> and  <a href="https://www.blender.org/" rel='noreferrer' target='_blank' className=' text-gray-500 whitespace-pre flex items-center gap-2'><SiBlender color='#F55' /><span className='text-sm'>(blender.org)</span></a> </li>
              <li >Utilizing all of <FaHtml5 color='#F55' /> , <FaCss3 color='#F55' />  and <FaJs color='#F55' />  to create accessible,functional user interfaces.  and a Mobile responsive user experience with flexbox an grid that allow Cross-platform accessibility to the Website on any device with primary use on mobile </li>
              <li >Developing applications usign <FaReact color='#F55' /> REACTJS while managing the state through REACT-QUERY</li>
              <li >initiate a <FaGit color='#F55' /> repository to track, regulate, and revise the changes in my code . </li>
              <li >Interact with public APIs to supply the app with the needed data for more user interaction, or scrap the data from a web using RegEx, if no dedicated apis is available</li>
              <li >Create a server side application with <FaPhp color='#F11' />  or <FaNodeJs color='#F11' />  to interact with databases and apis by performing CRUD functions</li>
              <li >design an integrated sql database using MYSQL or postgresSQL from scratch for storing and managing the data,   </li>
              <li>...</li>
            </ul>
          </div>
        </div>
      </section>



      {/* //* my  section */}
      <section className="revealSection opacity-0 translate-y-6 min-h-screen flex justify-center items-center">
        <div className="  h-full">
          <div className="relative w-full px-[calc(1rem+5vw)] max-w-[1000Px] flex flex-col gap-6 items-center">
            <h1 className="relative whitespace-pre font-header text-[4.5rem] md:text-[calc(4rem+3vw)]  text-transparent  stroke-blue-1  text-center">
              so why me?
              <div className="whitespace-pre absolute top-0 left-0 right-0 bottom-0 font-header text-[4.5rem] md:text-[calc(3.5rem+3vw)]  text-transparent stroke-blue-1 blur-sm ">
                so why me?
              </div>
            </h1>
            <h2 className="uppercase text-center font-PlayfairDisplayediumItalic">because i am a team player by nature .</h2>
            <ol className='list-disc px-[calc(1rem+5vw)] flex flex-col gap-4 '>
              <li>
                <p className="">i enjoy working with a team that share me the same enthusiasm and join me in the journey of creativity and invention!</p>
              </li>
              <li>
                <p className="">i am a dynamic web developer seeking new challenges to put my skills under the test, and grow as a professional. <br />
                  i'am such a person who can deliver creative solutions to complex project in a fast pace environment</p>
              </li>
              <li>
                <p className="">with my creative problem solving and ability to work under pressure, i know i can contribute to the team in the best way possible</p>
              </li>
            </ol>
          </div>
        </div>
      </section>




    </ >
  )
}

export default Index







