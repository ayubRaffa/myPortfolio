import React, { useLayoutEffect, useRef, useState } from 'react'
import { useEffect } from 'react';
import { FaGithub, FaHome, FaWhatsapp, FaCopy, FaTimes } from 'react-icons/fa';
import { IoMail, } from 'react-icons/io5'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import perso from '../assets/perso.png'
import perso2 from '../assets/perso2.png'
import { SkillsInfo } from './SkillsInfo';
import Cta from './Cta';
import { ctx } from './GsapAnimation'
import { Timeline } from 'gsap/gsap-core';

let imagesLIst = []
const imgmodules = import.meta.glob('../assets/robato/*.webp')
for (const path in imgmodules) {
  imgmodules[path]().then((mod) => imagesLIst.push(mod.default))
}

const Index = () => {


  gsap.registerPlugin(ScrollTrigger)

  const toCopy = useRef()
  const robato = useRef([])
  const animate = useRef()
  const [loadimage, setLoadimage] = useState(null)
  let i =  1
  useEffect(() => {
    /*   ctx(animate)
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
          end:"bottom top",
          scrub: 1,
          snap: {
            duration:{min:0.2,max:2},
            ease: "power.in",
            snapTo: 1/2,
            directional: false
          }
          // end: () => "+=" + document.querySelector('.container').offsetWidth
   
        }
      })
   */

    const robatoImgs = gsap.utils.toArray('.robato')
    const interval = setInterval(() => {
      const tl = gsap.timeline();
      tl.set(robatoImgs[i], { display: 'block' }).set(robatoImgs[i - 2], { display: 'none' })

      if (i > imagesLIst.length - 1) {
        clearInterval(interval)
      }
      i++
    }, 41);

  }, [loadimage])
  return (
    <>
      {/* hero */}
      <main className="relative min-h-screen mt-8 bg-[url('../src/assets/background.png')] bg-no-repeat bg-cover" >
        {/* blured backgound */}
        <div className="absolute rotate-180 lg:rotate-0 bottom-0 lg:top-0 right-0 w-full h-full md:h-2/3  lg:w-1/2 lg:h-[50rem] bg-[url('../src/assets/pexels6.webp')] md:bg-contain bg-cover   bg-no-repeat bg-blend-color-dodge bg-backgound" />
        < div className='absolute -z-0 -bottom-20 -right-20 h-2/3 w-[90vw] lg:w-[60vw] blur-[100px] opacity-20 rounded-full bg-pink-500 ' />
        <div className='absolute -z-0 -top-20 -left-20 h-2/3 right-1/3 blur-[100px] opacity-10 rounded-full bg-blue-500 ' />
        {/* headers */}
        <div className="relative  min-h-screen md:w-2/3 lg:w-1/2  px-4 md:ml-6 flex flex-col  justify-center items-start">
          <div className="flex flex-col justify-center  text-right md:text-left pb-28 ">
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
        {/*           <ReactP5Wrapper sketch={sketch} /> */}
        <img src="../src/assets/robato/0002.webp" className='robato absolute bottom-[-3rem] md:right-[10%] h-[calc(25rem+15vw)] lg:h-[100%]  z-20  items-end' />

        {
          imagesLIst?.map((item, index) => (
            <img key={index} src={item} ref={(element) => robato.current[index] = element} className='robato absolute bottom-[-8rem] md:right-[10%] h-[calc(25rem+15vw)] lg:h-[100%]  z-20 hidden items-end' />

          ))
        }

      </main >

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

      {/*  objectife  */}
      <section className="objectife_section relative  overflow-visible h-screen bg-backgound2  bg-[url('../src/assets/bbb.png')] bg-cover bg-top   bg-no-repeat bg-blend-overlay flex items-center justify-center">
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



      <section className="relative h-[60vh] md:h-[90vh]  bg-backgound2 ">
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
      <section className="skills_section azer relative bg-backgound2 " ref={animate}>
        <div className="relative mx-auto pb-[200px] border hexagon    ">

          {/* left hexagon */}
          <div className="left relative ">
            <IconImage src={SkillsInfo.node.src} alt={SkillsInfo.node.name} classname={'l z-20'} text={SkillsInfo.node.text} />
            <IconImage src={SkillsInfo.reactQuery.src} alt={SkillsInfo.node.name} classname={'tl absolute top-0 left-0'} text={SkillsInfo.reactQuery.text} />
            <IconImage src={SkillsInfo.php.src} alt={SkillsInfo.php.name} classname={'bl absolute top-0 left-0'} text={SkillsInfo.php.text} />

          </div>
          {/* center hexagon */}
          <div className="centerr relative">
            <IconImage src={SkillsInfo.react.src} alt={SkillsInfo.react.name} classname={'c z-20'} text={SkillsInfo.react.text} />
            <IconImage src={SkillsInfo.jquery.src} alt={SkillsInfo.jquery.name} classname={'bl absolute top-0 left-0'} text={SkillsInfo.jquery.text} />
            <IconImage src={SkillsInfo.gsap.src} alt={SkillsInfo.gsap.name} classname={'br absolute top-0 left-0'} text={SkillsInfo.gsap.text} />
            <IconImage src={SkillsInfo.postgres.src} alt={SkillsInfo.postgres.name} classname={'tl absolute top-0 left-0'} text={SkillsInfo.postgres.text} />
            <IconImage src={SkillsInfo.typescript.src} alt={SkillsInfo.typescript.name} classname={'tr absolute top-0 left-0 '} text={SkillsInfo.typescript.text} />
          </div>

          {/* rigth hexagon */}
          <div className="right relative ">
            <IconImage src={SkillsInfo.tailwind.src} alt={SkillsInfo.tailwind.name} classname={'r z-20  '} text={SkillsInfo.tailwind.text} />
            <IconImage src={SkillsInfo.sass.src} alt={SkillsInfo.sass.name} classname={'br absolute top-0 left-0'} text={SkillsInfo.sass.text} />
            <IconImage src={SkillsInfo.git.src} alt={SkillsInfo.git.name} classname={'tr absolute top-0 left-0 '} text={SkillsInfo.git.text} />

          </div>

          <div className='buttom absolute -top-1 -bottom-1 -right-1 -left-1 bg-gradient-to-r from-backgound2 to-backgound2  via-transparent pointer-events-none' />
          <h2 className='skill absolute w-full   lg:px-[20%] text-center  top-5  text-2xl opacity-0 '>my set of skills so far</h2>
          <p className='skill absolute w-full   lg:px-[20%] text-center top-5  text-lg opacity-0 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis illum, officiis itaque sequi suscipit consectetur qui facilis aliquid quasi saepe maxime ullam alias accusamus numquam quae odit fuga porro enim.</p>
        </div>
      </section>
      <section className='h-96'></section>
    </ >
  )
}

export default Index




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

function IconImage({ src, classname, alt, text }) {
  const [article, setarticle] = useState(null)

  const handleClick = (e) => {
    setarticle(e);
  }
  useLayoutEffect(() => {
    gsap.fromTo(".popUp", { scale: 0, opacity: 0 }, {
      scale: 1,
      opacity: 1,
      duration: .4,
      ease: "power.out",
    })
  }, article)
  return (
    <>
      <img src={src} alt={alt} className={classname} onClick={() => handleClick(text)} />

      {article &&
        <div className='fixed top-0 left-0 right-0  bottom-0 z-[100]'>
          <div className="popUp flex  justify-center items-center w-full h-full">
            <div className="relative flex justify-center items-center  w-full md:w-[calc(40rem+20vw)] h-96 bg-hero-tiny-checkers-blue-100 azer2 rounded-tl-full  rounded-bl-full">
              <div className='absolute top-0 right-0 p-2 cursor-pointer  hover:-skew-x-12 hover:-skew-y-12 ' onClick={() => handleClick(null)}><FaTimes color='white' size={'25px'} /></div>
              <div className="">
                <img src={src} alt="" className='w-fit scale-110 ' />
              </div>
              <div className=" flex flex-col justify-center items-center gap-4">
                <h2 className='text-center text-3xl' >{alt}</h2>
                <p className='text-center text-xl' >{text}</p>
              </div>
            </div>
          </div>
        </ div>
      }
    </>
  )
}

