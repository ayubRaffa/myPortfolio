import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from './components/Hero';
import sphereAnime from './assets/compressed/sphereAnime.webm';
import sphereAnimeCycle from './assets/compressed/sphereAnimeCycle.webm';
import blueWaves from './assets/blueWaves.jpg';
import { FaFigma, FaHtml5, FaCss3, FaJs, FaGit, FaPhp, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiBlender } from 'react-icons/si';
import { DiPhotoshop } from 'react-icons/di';
import iconsAnimation from './assets/compressed/iconsAnime.webm';
import iconsAnimationMobile from './assets/iconsAnimeMobile.webm';

gsap.registerPlugin(ScrollTrigger)

const Index = ({ CanLoadMainContent }) => {


  const iconsAnimationRef = useRef()
  const animate = useRef()

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".skillsSection",
      start: "top bottom ",
      onEnter: () => {
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
    /*   ScrollTrigger.create({
        trigger: '.quote',
        start: "center center",
        end: 'bottom 40%',
        onEnter: () => {
          gsap.to('.foregroundCircle', {
            opacity: 0.1,
            delay: .4,
            duration: 3,
            ease: 'power4.in'
          })
        }
      }) */
    document.querySelectorAll('video').forEach((video) => video.play())


  }, [])




  return (
    <>
      {/* //* hero section */}
      <Hero CanLoadMainContent={CanLoadMainContent} />

      <main className='px-1 pb-10'>

        {/* //* the quote section  */}
        <section className=" relative overflow-visible bg-no-repeat bg-cover bg-blend-screen flex items-center justify-center h-[75vh]">
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center pointer-events-none select-none">
            <video src={sphereAnime} autoPlay playsInline muted loop type="video/webm" className='mix-blend-lighten opacity-50'></video>
          </div>
          <div className="relative  px-[calc(1rem+5vw)] max-w-[1000Px] my-24 ">
            <blockquote className='font-extrabold text-center capitalize font-PlayfairDisplayediumItalic'>
              <span className='block pr-20 text-4xl tracking-wider text-gray-400 whitespace-pre'>progression...</span>
              <span className='block pl-20 text-4xl tracking-wider text-gray-400 whitespace-pre '>not perfection !</span>
            </blockquote>
          </div>
        </section>


        {/* //* my  objective section */}
        <section className="relative w-full translate-y-6 opacity-0 revealSection">
          <div className="flex flex-col items-center justify-center ">

            <fieldset className='border rounded-3xl'>
              <legend className=''>
                <h1 className="whitespace-pre px-3 relative text-[4rem] md:text-[calc(1.5rem+2vw)] text-transparent stroke-blue-1 text-center">
                  my objective
                  <div className="whitespace-pre absolute top-0 left-0 right-0 bottom-0 font-header text-[4.5rem] md:text-[calc(3.5rem+3vw)] text-transparent stroke-blue-1 blur-sm ">
                    my objective
                  </div>
                </h1>
              </legend>
              <div className="pb-20 relative rounded-3xl  m-3 text-blue-100 px-6 md:px-[calc(1rem+2vw)] max-w-[1000Px] grid grid-cols-2 gap-y-6 gap-x-4 items-start">
                <p className='col-span-2 text-xl text-left text-blue-100 md:text-2xl'>
                  seeking a job opportunity that will allow me to use, my skills i have learned so far, personality and organizational skills in an entry-level position as a front/back-end web developer where i can contribute my skills and obtain mentorship
                </p>
                <p className='text-base font-light text-blue-200 break-words md:text-lg'>
                  The opportunity to constantly learn, share knowledge, and be challenged is why I am drawn to web development as a career choice.  </p>
                <p className='text-base font-light text-blue-200 md:text-lg'>
                  create the best user interface on the market is something i have in my <b className='whitespace-pre'>TO-DO list</b>
                </p>
              </div>
            </fieldset>
          </div>
        </section>

        {/* //* the quote section  */}
        <section className="relative flex items-center justify-center h-screen bg-no-repeat bg-cover bg-blend-screen">
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center pointer-events-none select-none">
            <video src={sphereAnimeCycle} autoPlay playsInline muted loop type="video/webm" className='mix-blend-lighten opacity-50'>
            </video>
          </div>
          <div className="relative  px-[calc(1rem+5vw)] max-w-[1000Px] my-24 ">
            <p className='px-5 text-3xl font-extrabold tracking-wider text-center text-gray-400 capitalize up font-PlayfairDisplayediumItalic'>
              combining the art of design with my programming skills is what interest me in front-end development
            </p>
          </div>
        </section>



        {/* //* about me  section */}
        <section className="relative flex items-center justify-center ">
          <div className="translate-y-6 opacity-0 revealSection ">
            <fieldset className='border rounded-3xl'>
              <legend className=''>
                <h1 className="relative whitespace-pre px-3 text-[4rem] md:text-[calc(1.5rem+2vw)]  text-transparent  stroke-blue-1  text-center">
                  about me
                  <div className="whitespace-pre absolute top-0 left-0 right-0 bottom-0 font-header text-[4.5rem] md:text-[calc(3.5rem+3vw)]  text-transparent stroke-blue-1 blur-sm ">
                    about me
                  </div>
                </h1>
              </legend>
              <div className="rounded-2xl pb-10 px-[calc(1rem+5vw)] max-w-[1000Px] flex flex-col gap-6 items-center">
                <p className='text-lg text-left text-blue-100 md:text-2xl first-line:text-3xl'>
                  powered by high energy levels and boundless excitement, I am easily inspired and ready to follow my fascinations no matter where they take me.
                  I always enjoy learning new technologies and keeping up with current web design trends..
                </p>
                <p className='text-2xl text-left text-blue-100 '>
                  with an emphasis on <b className='text-cyan-500'>"gradual improvement"</b>, i look for creative ways to push the limits of website front-end code without compromising on browser support and performance,
                </p>
              </div>
            </fieldset>
          </div>
          <div className='pointer-events-none select-none absolute  top-1/3 left-1/2 translate-x-1/2 -translate-y-1/2 h-[calc(80vw+80vh)]  w-[calc(11rem+7vw)] origin-center  rotate-45 lg:rotate-[77deg] bg-[#2f4d7a] opacity-100 rounded-full  mix-blend-darken blur-3xl ' />
        </section>


        {/* //* the quote section  */}
        <section className="quote relative bg-no-repeat bg-cover flex items-center justify-center h-screen">
          {/*  <div className="absolute top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center translate-x-0 pointer-events-none select-none mix-blend-screen">
            <img src={blueWaves} alt="sphere" className='max-w-md opacity-0 foregroundCircle' />
          </div> */}
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center scale-125 translate-x-0 pointer-events-none select-none mix-blend-color-dodge">
            <img src={blueWaves} alt="sphere" className='max-w-lg backgroundCircle' />
          </div>
          <div className=" relative  px-[calc(1rem+5vw)] max-w-[1000Px] my-24 ">
            <div className='z-10 mix-blend-overlay -translate-x-6 rotate-[45deg] absolute bottom-0 pointer-events-none select-none left-0 right-0 h-[70%] bg-[#164d8a] blur-lg' />
            <p className='text-3xl font-extrabold tracking-wider text-center text-gray-400 capitalize font-PlayfairDisplayediumItalic'>
              i may be only a beginner with little experience... <br /> but i may become the <strong className='block text-4xl text-white uppercase font-PlayfairDisplayediumItalic '>best !</strong>
            </p>
          </div>
        </section>



        <section className="min-h-screen skillsSection ">
          <div className="flex flex-col justify-center items-center">
            <fieldset className='border rounded-3xl'>
              <legend className=''>
                <h1 className="relative whitespace-pre px-3 text-[1.5rem] md:text-[calc(1.5rem+2vw)]  text-transparent  stroke-blue-1  text-center">
                  some of what i learned so far
                  <div className="whitespace-pre absolute top-0 left-0 right-0 bottom-0 font-header text-[1.5rem] md:text-[calc(1.5rem+2vw)]  text-transparent stroke-blue-1 blur-sm ">
                    some of what i learned so far
                  </div>
                </h1>
              </legend>
              <div className="flex justify-center ">
                <video ref={iconsAnimationRef} autoPlay muted playsInline className=' mix-blend-lighten '  >
                  <source src={iconsAnimation} media='(min-width:799px)' type='video/webm' />
                {/*   <source src={iconsAnimationMobile} media='(max-width:799px)' type='video/webm' /> */}
                </video>
                {/*  <video ref={iconsAnimationRef} muted playsInline className='hidden translate-y-11 mix-blend-lighten md:block'  >
          </video> */}
              </div>
              <div className=" px-[calc(1rem+5vw)] flex flex-col justify-center items-center ">
                <div className=" flex flex-col md:mx-[calc(2rem+3vw)] gap-3 py-2">
                  <p className='text-gray-400'>
                    for the last 2 years, when i began my multimedia training till now and i day after day learn and grasp more and more technologies and techniques, starting from the basics of html and css to the logics of programing languages, to the manipulation of the DOM with jquery and requesting data with ajax, to the virtual DOM of react and the javascript runtime environment nodejs...
                  </p>
                  <p className=''>all of that had lead me to be able to perform at least a variety of tasks.  as such :</p>
                  <ul className=' pl-[calc(1rem+2vw)] list-disc flex flex-col gap-3 text-gray-300'>
                    <li >build mock designs and wireframes for landing pages using <FaFigma color='#F55' />, <DiPhotoshop color='#F55' /> and  <a href="https://www.blender.org/" rel='noreferrer' target='_blank' className='flex items-center gap-2 text-gray-500 whitespace-pre '><SiBlender color='#F55' /><span className='text-sm'>(blender.org)</span></a> </li>
                    <li >Utilizing all of <FaHtml5 color='#F55' /> , <FaCss3 color='#F55' />  and <FaJs color='#F55' />  to create accessible,functional user interfaces.  and a Mobile responsive user experience with flexbox an grid that allow Cross-platform accessibility to the Website on any device with primary use on mobile </li>
                    <li >Developing applications using <FaReact color='#F55' /> REACTJS while managing the state through REACT-QUERY</li>
                    <li >initiate a <FaGit color='#F55' /> repository to track, regulate, and revise the changes in the code . </li>
                    <li >Interact with public APIs to supply the app with the needed data for more user interaction, or scrap the data from a web with the help of RegEx or a third-party dependency, if no dedicated apis is available</li>
                    <li >Create a server side application with <FaPhp color='#F11' />  or <FaNodeJs color='#F11' />  to interact with databases and apis by performing CRUD functions</li>
                    <li >design an integrated sql database with MYSQL or postgresSQL from scratch for storing and managing the data,   </li>
                    ...
                  </ul>
                </div>
              </div>
            </fieldset>
          </div>

        </section>



        {/* //* my  section */}
        <section className="mt-10 min-h-screen flex items-center justify-center translate-y-6 opacity-0 revealSection">
          <div className="h-full ">
            <div className="relative w-full px-[calc(1rem+5vw)] max-w-[1000Px] flex flex-col gap-6 items-center">
              <h1 className="relative whitespace-pre text-[4.5rem] md:text-[calc(4rem+3vw)]  text-transparent  stroke-blue-1  text-center">
                so why me?
                <div className="whitespace-pre absolute top-0 left-0 right-0 bottom-0 font-header text-[4.5rem] md:text-[calc(3.5rem+3vw)]  text-transparent stroke-blue-1 blur-sm ">
                  so why me?
                </div>
              </h1>
              <h2 className="text-center uppercase font-PlayfairDisplayediumItalic">because i am a team player by nature .</h2>
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


      </main>


    </ >
  )
}

export default Index