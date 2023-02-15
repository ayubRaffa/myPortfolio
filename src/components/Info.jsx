import React, { useState } from 'react'
import { FaGithub, FaHome, FaWhatsapp, FaCopy, FaStar, } from 'react-icons/fa';
import { IoMail, } from 'react-icons/io5'


const Info = () => {


    return (

        <section className="bg-background-500 " > 
            <div className="relative z-10 flex items-stretch justify-center gap-3 px-1 py-20 pb-40 md:gap-6 lg:gap-10 lg:px-6 bg-hero-cutout-pink-100 ">
                <div className='absolute top-0 bottom-0 left-0 right-0 linear-gradient ' />
                < div className=' absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[color:var(--color-bg)] to-transparent' />
                <div className="basis-0 flex-[1] relative flex justify-center items-end flex-col gap-3 ">
                    <Article icon={<FaWhatsapp size='32' fill='#3378a0' />} content={'0604932189'} href={'https://wa.me/0604932189'} />
                    <Article icon={<FaGithub size='32' fill='#3378a0' />} content={'https://github.com/ayubRaffa'} href={'https://github.com/ayubRaffa'} />
                    <Article icon={<IoMail size='32' fill='#3378a0' />} content='raffa4991@gmail.com' href={'mailto:raffa4991@gmail.com'} />
                    <Article icon={<FaHome size='32' fill='#3378a0' />} content={'marrakech morocco'} />
                </div>
                <div className='w-[1px] gradient' />
                <div className="basis-0 flex-[1]">
                    <div className="relative flex flex-col justify-start max-w-sm gap-4 py-3 ">
                        <h3 className='text-xl uppercase'>ayoub raffiai <pre> idrissi <span className='lowercase'>28 yrs</span></pre></h3>
                        <div className="font-extrabold foramtion">
                            <h4 className=''><span>2020 - 2022 : </span> Private higher education training in Multimedia Development.  graduated in 2022 </h4>
                            <div className="pt-1 ESP">
                                <h3> <span>ESP:</span> <a href="http://rissala.great-site.net" target="_blank" rel="noreferrer">rissala.great-site.net</a></h3>
                            </div>
                        </div>
                        <div className="lang">
                            <div className="grid grid-cols-3 gap-1">
                                <h3>french</h3>
                                <h3 className='flex items-center col-span-2 gap-1'> <FaStar /><FaStar /><FaStar /></h3>
                                <h3>english</h3>
                                <h3 className='flex items-center col-span-2 gap-1'> <FaStar /><FaStar /><FaStar /><FaStar /></h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default Info


function Article({ icon, content, href }) {
    const [IsCopied, setIsCopied] = useState(false)

    const copy = (content) => {
        try {
            navigator.clipboard.writeText(content).then(() => {
                setIsCopied(true)
                setTimeout(() => {
                    setIsCopied(false)
                }, 1500);
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <article className='relative flex items-center justify-end gap-2 px-2 py-3 bg-gradient-to-r from-[#410d5550] rounded-2xl '>
            <div className="flex gap-2 items-center justify-end font-revalia text-[12px]  ">
                {icon}
                {(href !== "undefined") ?
                    <a href={href} target='_blank' rel='noreferrer' className='underline break-all w-[30vw] lg:w-auto'>
                        {content}
                    </a>
                    : { content }
                }
            </div>
            <FaCopy onClick={() => copy(content)} className='cursor-pointer ' fill='#fff2' />
            <span className={`${IsCopied ? "visible" : "invisible"}  absolute top-1/2 right-2  -translate-y-1/2  gradient px-2 py-1 rounded-lg pointer-events-none select-none transition-all duration-1000 `}>copied</span>
        </article>
    )
}
