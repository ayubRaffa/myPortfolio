import r1 from '../assets/robato/0001.webp';
import React, { useEffect } from 'react'
import Cta from './Cta';
import gsap from 'gsap';
import perso from '../assets/perso.png'



let imagesLIst = []
const imgmodules = import.meta.glob('../assets/robato/*.webp', { eager: true })
for (const path in imgmodules) {
    imagesLIst.push(imgmodules[path].default)
}
const Main = () => {
    /*  let i = 1
     useEffect(() => {
         const robatoImgs = gsap.utils.toArray('.robato')
         setTimeout(() => {
             //  gsap.set(robatoImgs, { display: 'none' })
             const interval = setInterval(() => {
                 const tl = gsap.timeline();
                 tl.set(robatoImgs[i], { display: 'block' }).set(robatoImgs[i - 2], { display: 'none' })
 
                 if (i > imagesLIst.length - 1) {
                     clearInterval(interval)
                 }
                 i++
             }, 50)
         }, 2000);
 
 
     }, []) */

    return (
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
            <img src={perso} className='robato absolute bottom-[-8rem] md:right-[10%] h-[calc(25rem+15vw)] lg:h-[100%]  scale-105 z-20  ' />


        </main >
    )
}

export default Main