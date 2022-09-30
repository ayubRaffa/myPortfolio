import React from 'react'
import { FaGithub, FaFacebookMessenger, FaHome } from 'react-icons/fa';
import perso from '../assets/perso.png'
import Cta from './Cta';

const Index = () => {
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
              i make web sites, and other <pre>stuff :)</pre>
            </h1>
            <h2 className='text-3xl font-bold stroke-2 lg:text-3xl '>
              by the way, i am not a programmer !
              im just someone who
              loves
              <p className='text-4xl font-extrabold uppercase text-pink-500 font-header py-2'> coding</p>
            </h2>
            {/* call to action button */}
            <Cta />
          </div>
        </div>
        <img src={perso} alt="" className='absolute bottom-[-3rem] right-[10%] h-[90%] xl:h-[100%]  z-20' />
      </div >

      {/* Info */}
      <div div className="relative flex justify-center items-stretch min-h-[500px] gap-4 px-1 lg:px-6 py-20 azer  bg-hero-cutout-blue-dark-100 overflow-hidden  z-10" >{/* rounded-tl-[100px] rounded-tr-[100px] */}
        <div className="flex justify-center items-start flex-col gap-2 ">
          <Article icon={<FaGithub size='2rem' />} text={'http//gituo.slkfj/fqsdfj'} />
          <Article icon={<FaFacebookMessenger size='2rem' color='' />} text={'jlsqfdjlksd'} />
          <Article icon={<FaHome size='2rem' color='' />} text={'jlsqfdjlksd'} />
        </div>
        <div className='w-[1px] bg-blue-300 border' />
        <div className="w-40">

        </div>
      </div >
    </ >
  )
}

function Article({ icon, text }) {
  return (
    <article className='flex gap-2 items-center'>
      {icon}
      <p className=''>{text}</p>
    </article>
  )
}


export default Index