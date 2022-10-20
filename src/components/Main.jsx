import r1 from '../assets/robato/0001.webp';
import React, { useEffect } from 'react'
import Cta from './Cta';
import gsap from 'gsap';
import perso from '../assets/perso.png'


const Main = () => {


    return (
        <main className="Main scale-125 relative min-h-screen mt-8 bg-[url('../src/assets/background.png')] bg-no-repeat bg-cover z-20" >
            {/* blured background */}
            <div className=" absolute rotate-180 lg:rotate-0 bottom-0 lg:top-0 right-0 w-full h-full md:h-2/3  lg:w-1/2 lg:h-[50rem] bg-[url('../src/assets/pexels6.webp')] md:bg-contain bg-cover   bg-no-repeat bg-blend-color-dodge bg-background" />
            < div className='pinkBlur absolute -z-0 -bottom-20 -right-20 h-2/3 w-[90vw] lg:w-[60vw] blur-[100px]  rounded-full bg-pink-500 opacity-0' />
            <div className='blueBlur absolute -z-0 -top-20 -left-20 h-2/3 right-1/3 blur-[100px]  rounded-full bg-blue-500 opacity-0' />
            {/* headers */}
            <div className="relative  min-h-screen md:w-2/3 lg:w-1/2  px-4 md:ml-6 flex flex-col  justify-center items-start">
                <div className="flex flex-col justify-center  text-right md:text-left pb-28 gap-5">
                    <h1 className=' text-4xl lg:text-5xl xl:text-6xl font-extrabold capitalize stroke-blue-2 '>HI, it me! ayoub <br />
                        i make web sites, and other <pre>stuff &#x1F604;</pre>
                    </h1>
                    <h2 className='text-2xl font-bold stroke-blue-1 lg:text-3xl'>
                        by the way, i am not a programmer !
                        im just someone who
                        loves
                        <strong className=' block text-4xl font-extrabold uppercase text-blue-500 font-header py-2'  > coding</strong>
                    </h2>
                    {/* call to action button */}
                    <Cta />
                </div>
            </div>
            {/* personal image */}
            <img src={perso} className='robato absolute bottom-[-3rem] right-[40%] md:right-[10%] h-[calc(25rem+15vw)] lg:h-[100%]  scale-105 z-50  ' />


        </main >
    )
}

export default Main