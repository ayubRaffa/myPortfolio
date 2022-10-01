import React, { useRef, useState } from 'react'
import { FaGithub, FaFacebookMessenger, FaHome, FaWhatsapp, FaCopy } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5'
import perso from '../assets/perso.png'
import perso2 from '../assets/perso2.png'
import perso2_gradient from '../assets/perso2-gradient.png'

import Cta from './Cta';

const Index = () => {
  const toCopy = useRef()




  return (
    <>
      {/* hero */}
      <section className="relative min-h-screen mt-8 bg-[url('../src/assets/background.png')] bg-no-repeat bg-cover" >
        {/* blured backgound */}
        < div className='absolute -z-0 -bottom-20 -right-20 h-2/3 w-[90vw] lg:w-[60vw] blur-[100px] opacity-20 rounded-full bg-pink-500 ' />
        <div className='absolute -z-0 -top-20 -left-20 h-2/3 right-1/3 blur-[100px] opacity-10 rounded-full bg-blue-500 ' />
        {/* headers */}
        <div className="relative  min-h-screen mx-[6.5rem] max-w-[40%] flex justify-start items-center">
          <div className="flex flex-col justify-center gap-8">
            <h1 className='text-5xl lg:text-5xl xl:text-6xl font-extrabold capitalize stroke-pink-1 '>HI, it me! ayoub
              i make web sites, and other <pre>stuff &#x1F604;</pre>
            </h1>
            <h2 className='text-3xl font-bold stroke-pink-2 lg:text-3xl '>
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
        <img src={perso} alt="personal_image" className='absolute bottom-[-3rem] right-[10%] h-[90%] xl:h-[100%]  z-20 ' />
      </section >

      {/* Info */}
      <section className="relative flex justify-center items-stretch min-h-[500px] gap-6 lg:gap-10 px-1 lg:px-6 py-20 pb-40 azer  bg-hero-cutout-pink-100 overflow-hidden  z-10" >{/* rounded-tl-[100px] rounded-tr-[100px] */}
        <div className='absolute bottom-0 left-0 right-0 h-20 gradient3' />
        <div className="relative flex justify-center items-stretch flex-col gap-3 ">
          <Article icon={<FaWhatsapp size='2rem' fill='#3378a0' />} content={'0604932189'} href={'https://wa.me/0604932189'} />
          <Article icon={<FaGithub size='2rem' fill='#3378a0' />} content={'jlsqfdjlksd'} />
          <Article icon={<IoMail size='2rem' color='' fill='#3378a0' />} content='idriss4991@gmail.com' href={'mailto:idriss4991@gmail.com'} />
          <Article icon={<FaHome size='2rem' fill='#3378a0' />} content={'40070,marrakech morocco'} />
        </div>
        <div className='w-[1px] gradient' />
        <div className="w-40"></div>
        <div className='absolute bottom-0 right-0 left-0 h-40  gradient3 pointer-events-none z-10' />
      </section >

      {/*    */}
      <section className="relative h-[50rem] bg-backgound2 overflow-visible">
        {/* second personal image */}
        <img src={perso2_gradient} alt="personal-image-2" className='absolute -bottom-[8rem] -left-[2rem] w-[80%] md:w-[calc(40rem+5%)] z-20 saturate-80' />
        <div className="flex justify-around items-start h-full">
          <h1 className='flex-1'> <strong></strong></h1>
          <h1 className='flex-1 py-10 text-5xl lg:text-5xl xl:text-6xl font-extrabold capitalize stroke-yellow'>i maybe just a beginner but i may become the
            <strong className='text-4xl lg:text-6xl font-extrabold uppercase text-[#e0f400] font-header py-2 block'>best</strong>
          </h1>
        </div>
      </section>


      <section className="h-96 bg-backgound2 bg-hero-stamp-collection-gray-100"></section>
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