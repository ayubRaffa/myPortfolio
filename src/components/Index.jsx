import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import copy from "copy-to-clipboard";
import { FaGithub, FaFacebookMessenger, FaHome, FaWhatsapp, FaCopy } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import perso from '../assets/perso.png'
import Cta from './Cta';
import { useState } from 'react';

const Index = () => {
  const toCopy = useRef()




  return (
    <>
      {/* hero */}
      <div div className="relative min-h-screen mt-8 bg-[url('../src/assets/background.png')] bg-no-repeat bg-cover" >
        {/* blured backgound */}
        < div className='absolute -z-0 -bottom-20 -right-20 h-2/3 w-[90vw] lg:w-[60vw] blur-[100px] opacity-20 rounded-full bg-pink-500 ' />
        <div className='absolute -z-0 -top-20 -left-20 h-2/3 right-1/3 blur-[100px] opacity-10 rounded-full bg-blue-500 ' />
        {/* headers */}
        <div className="relative  min-h-screen mx-[6.5rem] max-w-[40%]    flex justify-start items-center">
          <div className="flex flex-col justify-center gap-8">
            <h1 className='text-5xl lg:text-5xl xl:text-6xl font-extrabold capitalize stroke-1 '>HI, it me! ayoub
              i make web sites, and other <pre>stuff &#x1F604;</pre>
            </h1>
            <h2 className='text-3xl font-bold stroke-2 lg:text-3xl '>
              by the way, i am not a programmer !
              im just someone who
              loves
              <p className='text-4xl font-extrabold uppercase text-pink-500 font-header py-2'  > coding</p>
            </h2>
            {/* call to action button */}
            <Cta />
          </div>
        </div>
        <img src={perso} alt="" className='absolute bottom-[-3rem] right-[10%] h-[90%] xl:h-[100%]  z-20 ' />
      </div >

      {/* Info */}
      <div  className="relative flex justify-center items-stretch min-h-[500px] gap-6 lg:gap-10 px-1 lg:px-6 py-20 pb-40 azer  bg-hero-cutout-blue-dark-100 overflow-hidden  z-10" >{/* rounded-tl-[100px] rounded-tr-[100px] */}
      <div className='absolute bottom-0 left-0 right-0 h-20 gradient3'/>
        <div className="relative flex justify-center items-stretch flex-col gap-3 ">
          <Article icon={<FaWhatsapp size='2rem' fill='#3378a0' />} content={'0604932189'} href={'https://wa.me/0604932189'} />
          <Article icon={<FaGithub size='2rem' fill='#3378a0' />} content={'jlsqfdjlksd'} />
          <Article icon={<IoMail size='2rem' color='' fill='#3378a0' />} content='idriss4991@gmail.com' href={'mailto:idriss4991@gmail.com'} />
          <Article icon={<FaHome size='2rem' fill='#3378a0' />} content={'40070,marrakech morocco'} />
        </div>
        <div className='w-[1px] gradient' />
        <div className="w-40"></div>
      </div >

      {/*    */}
      <div className="h-80 "></div>
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