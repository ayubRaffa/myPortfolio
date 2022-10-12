import gsap from 'gsap';
import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { FaGithub, FaFacebookMessenger, FaHome, FaWhatsapp, FaCopy } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5'
import perso from '../assets/perso.png'
import perso2 from '../assets/perso2.png'
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Cta from './Cta';

const Index = () => {
  const toCopy = useRef()
  const animate = useRef()
  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    let ctx = gsap.context(() => {

      const timeline = gsap.timeline({ defaults: { duration: 1 } })
      gsap.to(".hexagon .c", {
        scrollTrigger: {
          trigger: ".c",
          start: "0 100%",
          end: "0 100",
          scrub: true,
        },
        rotate: 180,

      })
      gsap.to(".hexagon h2", {
        scrollTrigger: {
          scrub: 1,
          trigger: ".c",
        },
        translateY: 300,
        opacity: 1,
        delay: 1
      })
      gsap.to(".hexagon p", {
        scrollTrigger: {
          scrub: true,
          trigger: ".c",
        },
        translateY: 400,
        opacity: .6,
        ease: "power.out",
        delay: 1
      })
      gsap.to(".hexagon img.br", {
        scrollTrigger: {
          trigger: ".c",
          scrub: true
        },
        x: '+=50%',
        y: '+=80%',
      },)
      gsap.to(".hexagon img.bl", {
        scrollTrigger: {
          trigger: ".c",
          scrub: true
        },
        x: '-=50%',
        y: '+=80%',
      },)
      gsap.to(".hexagon img.tl", {
        scrollTrigger: {
          trigger: ".c",
          scrub: true
        },
        x: '-=100%',
        y: '+=80%',
        zIndex: 30,
      },)
      gsap.to(".hexagon img.tr", {
        scrollTrigger: {
          trigger: ".c",
          scrub: true
        },
        x: '+=100%',
        y: '+=80%',
        zIndex: 30,
      },)
      gsap.to(".hexagon .right", {
        scrollTrigger: ".c",
        x: '+=10%',
      })
      gsap.to(".hexagon .left", {
        scrollTrigger: ".c",
        x: '-=10%',
      })

    }, animate)
  }, [animate])




  return (
    <>
      {/* hero */}
      <section className="relative min-h-screen mt-8 bg-[url('../src/assets/background.png')] bg-no-repeat bg-cover" >
        {/* blured backgound */}
        < div className='absolute -z-0 -bottom-20 -right-20 h-2/3 w-[90vw] lg:w-[60vw] blur-[100px] opacity-20 rounded-full bg-pink-500 ' />
        <div className='absolute -z-0 -top-20 -left-20 h-2/3 right-1/3 blur-[100px] opacity-10 rounded-full bg-blue-500 ' />
        {/* headers */}
        <div className="relative  min-h-screen lg:w-1/2  px-4 md:ml-6 flex justify-start items-center">
          <div className="flex flex-col justify-center  text-right md:text-left ">
            <h1 className=' text-4xl lg:text-5xl xl:text-6xl font-extrabold capitalize stroke-pink-1 '>HI, it me! ayoub <br />
              i make web sites, and other <pre>stuff &#x1F604;</pre>
            </h1>
            <h2 className='text-2xl font-bold stroke-pink-2 lg:text-3xl'>
              by the way, i am not a programmer !
              im just someone who
              loves
              <strong className=' block text-4xl font-extrabold uppercase text-pink-500 font-header py-2'  > coding</strong>
            </h2>
            {/* call to action button */}
            <Cta />
          </div>
        </div>
        {/* personal image */}
        <img src={perso} alt="personal_image" className='absolute bottom-[-3rem] md:right-[10%] h-[calc(25rem+15vw)] lg:h-[100%]  z-20 ' />
      </section >

      {/* Info */}
      <section className="relative flex justify-center items-stretch min-h-[500px] gap-6 lg:gap-10 px-1 lg:px-6 py-20 pb-40 azer  bg-hero-cutout-pink-100 z-10 " >{/* rounded-tl-[100px] rounded-tr-[100px] */}
        <div className='absolute bottom-0 left-0 right-0 h-20 gradient3' />
        <div className="relative flex justify-center items-stretch flex-col gap-3 ">
          <Article icon={<FaWhatsapp size='2rem' fill='#3378a0' />} content={'0604932189'} href={'https://wa.me/0604932189'} />
          <Article icon={<FaGithub size='2rem' fill='#3378a0' />} content={'jlsqfdjlksd'} />
          <Article icon={<IoMail size='2rem' color='' fill='#3378a0' />} content='idriss4991@gmail.com' href={'mailto:idriss4991@gmail.com'} />
          <Article icon={<FaHome size='2rem' fill='#3378a0' />} content={'40070,marrakech morocco'} />
        </div>
        <div className='w-[1px] gradient' />
        <div className="relative">
          <h3 className='text-xl uppercase'>ayoub raffiai idrissi <span>28</span></h3>
        </div>
        <div className='absolute  -bottom-10 right-0 left-0 h-52  gradient3 pointer-events-none z-10 ' />
      </section >

      {/*    */}
      <section className="relative h-[50rem] bg-backgound2 overflow-visible bg-[url('../src/assets/pexels5.jpg')] bg-cover bg-no-repeat bg-blend-color-dodge ">
        {/* second personal image */}
        <img src={perso2} alt="personal-image-2" className='absolute -bottom-[calc(8rem-5%)] md:-bottom-[8rem]  -left-[12rem]  w-[calc(35rem+5vw)] z-20 saturate-80' />
        <div className="flex justify-around items-start h-full">
          <h1 className='flex-1'> <strong></strong></h1>
          <h1 className='flex-1 py-10 text-5xl lg:text-5xl xl:text-6xl font-extrabold capitalize stroke-yellow'>i maybe just a beginner but i may become the
            <strong className='text-4xl lg:text-6xl font-extrabold uppercase text-[#e0f400] font-header py-2 block'>best</strong>
          </h1>
        </div>
      </section>


      <section className="h-96 bg-backgound2 bg-[url('../src/assets/pc.jpg')] bg-no-repeat bg-cover bg-blend-color-dodge">
        <div className="flex justify-between items-center h-full">
          <div className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam atque omnis ex in explicabo expedita soluta sit officiis doloribus cumque, pariatur aperiam error quam, dolore inventore magni eius dignissimos amet!</div>
          <div className="text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur odio doloribus nam laborum laudantium eius rerum nulla illum a est, neque ad accusamus ut asperiores saepe, fugiat natus vero.</div>
        </div>
      </section>

      {/* skills */}
      <section className="azer relative bg-backgound2 " ref={animate}>
        <div className="relative mx-auto pb-[200px] border hexagon    ">
          {/* left hexagon */}
          <div className="left relative ">
            <img src="../src/assets/nodejs.png" alt="" className='l z-20 ' />
            <img src="../src/assets/react-query.png" alt="top left" className='tl absolute top-0 left-0   ' />
            <img src="../src/assets/php.png" alt=" bottom left" className='bl absolute top-0 left-0 ' />


          </div>
          {/* center hexagon */}
          <div className="centerr relative">
            <img src="../src/assets/react.png" alt="" className='c z-20' />
            <img src="../src/assets/jquery.png" alt=" bottom left" className='bl absolute top-0 left-0 ' />
            <img src="../src/assets/gsap.png" alt=" bottom right" className='br absolute top-0 left-0' />
            <img src="../src/assets/postgres.png" alt="top left" className='tl absolute top-0 left-0  ' />
            <img src="../src/assets/nodejs.png" alt="top right" className='tr absolute top-0 left-0 ' />
          </div>
          {/* rigth hexagon */}
          <div className="right relative ">
            <img src="../src/assets/tailwind.png" alt="" className='r z-20 ' />
            <img src="../src/assets/sass.png" alt=" bottom right" className='br absolute top-0 left-0' />
            <img src="../src/assets/git.png" alt="top right" className='tr absolute top-0 left-0 ' />
          </div>
          <div className='buttom absolute -top-1 -bottom-1 -right-1 -left-1 bg-gradient-to-r from-backgound2 to-backgound2  via-transparent pointer-events-none' />
          <h2 className='absolute w-full   lg:px-[20%] text-center  top-5  text-2xl opacity-0 '>my set of skills so far</h2>
          <p className='absolute w-full   lg:px-[20%] text-center top-5  text-lg opacity-0 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis illum, officiis itaque sequi suscipit consectetur qui facilis aliquid quasi saepe maxime ullam alias accusamus numquam quae odit fuga porro enim.</p>
        </div>
      </section>
      <section className='h-96'></section>
    </ >
  )
}








function Article({ icon, content, href }) {
  const [isCopyed, setisCopyed] = useState(false)

  const copy = (content) => {
    try {
      navigator.clipboard.writeText(content).then(() => {
        setisCopyed(true)
        setTimeout(() => {
          setisCopyed(false)
        }, 1500);
      })
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <article className='relative flex justify-between gap-2 items-center py-3 px-4 gradient2 rounded-2xl '>
      <div className="flex gap-2 font-header">
        {icon}
        {href != 'undefined' ?
          <a href={href} target='_blank' className='underline'>
            {content}
          </a>
          : { content }}
      </div>
      <FaCopy onClick={() => copy(content)} className='cursor-pointer' fill='#fff2' />
      {isCopyed && <span className='absolute -top-8 -right-0  gradient px-2 py-1 rounded-lg pointer-events-none'>copied</span>}
    </article>
  )
}


export default Index