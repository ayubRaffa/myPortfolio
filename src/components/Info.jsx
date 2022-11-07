import React, { useState } from 'react'
import { FaGithub, FaHome, FaWhatsapp, FaCopy, FaStar, } from 'react-icons/fa';
import { IoMail, } from 'react-icons/io5'


const Info = () => {
    return (

        <section section className="bg-background2-500  min-h-[500px] " > {/* rounded-tl-[100px] rounded-tr-[100px] */}
            <div className="relative flex justify-center items-stretch md:gap-6 lg:gap-10 px-1 lg:px-6 py-20 pb-40 gap-3   bg-hero-cutout-pink-100 z-10 ">
                <div className='absolute top-0 right-0 left-0 bottom-0 linear-gradient ' />
                < div className=' absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[color:var(--color-bg)] to-transparent' />
                <div className="basis-0 flex-[1] relative flex justify-center items-end flex-col gap-3 ">
                    <Article icon={<FaWhatsapp size='2rem' fill='#3378a0' />} content={'0604932189'} href={'https://wa.me/0604932189'} />
                    <Article icon={<FaGithub size='2rem' fill='#3378a0' />} content={'https://github.com/ayubRaffa'} href={'https://wa.me/0604932189'} />
                    <Article icon={<IoMail size='2rem' color='' fill='#3378a0' />} content='idriss4991@gmail.com' href={'mailto:idriss4991@gmail.com'} />
                    <Article icon={<FaHome size='2rem' fill='#3378a0' />} content={'40070,marrakech morocco'} />
                </div>
                <div className='w-[1px] gradient' />
                <div className="basis-0 flex-[1]">
                    <div className=" relative flex flex-col gap-3 py-4 justify-start max-w-sm">
                        <h3 className='text-xl uppercase'>ayoub raffiai <pre> idrissi <span className='lowercase'>28 yrs</span></pre></h3>
                        <h4 className='font-extrabold'><span>2020 - 2022 : </span> Private higher education training in Multimedia Development. <br /> graduated in 2022 </h4>
                        <div className="lang">
                            <div className="grid grid-cols-3 gap-1">
                                <h3>french</h3>
                                <h3 className='col-span-2 flex gap-1 items-center'> <FaStar /><FaStar /><FaStar /></h3>
                                <h3>english</h3>
                                <h3 className='col-span-2 flex gap-1 items-center'> <FaStar /><FaStar /><FaStar /><FaStar /></h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/*   <div className='absolute  -bottom-10 right-0 left-0 h-52  gradient3 pointer-events-none z-10 ' /> */}
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
        <article className='relative flex justify-end gap-2 items-center py-3 px-2 gradient2 rounded-2xl '>
            <div className="flex gap-2 items-center justify-end font-text text-[12px]  ">
                {icon}
                {(href !== "undefined") ?
                    <a href={href} target='_blank' rel='noreferrer' className='underline break-all w-[30vw] lg:w-auto'>
                        {content}
                    </a>
                    : { content }
                }
            </div>
            <FaCopy onClick={() => copy(content)} className='cursor-pointer ' fill='#fff2' />
            <span className={`${IsCopied ? "visible" : "invisible"}  absolute top-1/2 right-2  -translate-y-1/2  gradient px-2 py-1 rounded-lg pointer-events-none  transition-all duration-1000 `}>copied</span>
        </article>
    )
}
