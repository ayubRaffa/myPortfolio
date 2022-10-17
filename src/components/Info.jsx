import React, { useState, useEffect } from 'react'
import { FaGithub, FaHome, FaWhatsapp, FaCopy } from 'react-icons/fa';
import { IoMail, } from 'react-icons/io5'

import gsap from 'gsap';


const Info = () => {
    return (

        <section section className="relative flex justify-center items-stretch min-h-[500px] gap-6 lg:gap-10 px-1 lg:px-6 py-20 pb-40 azer  bg-hero-cutout-pink-100 z-10 " > {/* rounded-tl-[100px] rounded-tr-[100px] */}
            < div className='absolute bottom-0 left-0 right-0 h-20 gradient3' />
            <div className="relative flex justify-center items-stretch flex-col gap-3 ">
                <Article icon={<FaWhatsapp size='2rem' fill='#3378a0' />} content={'0604932189'} href={'https://wa.me/0604932189'} />
                <Article icon={<FaGithub size='2rem' fill='#3378a0' />} content={'https://github.com/ayubRaffa'} href={'https://wa.me/0604932189'} />
                <Article icon={<IoMail size='2rem' color='' fill='#3378a0' />} content='idriss4991@gmail.com' href={'mailto:idriss4991@gmail.com'} />
                <Article icon={<FaHome size='2rem' fill='#3378a0' />} content={'40070,marrakech morocco'} />
            </div>
            <div className='w-[1px] gradient' />
            <div className="relative">
                <h3 className='text-xl uppercase'>ayoub raffiai idrissi <span>28</span></h3>
            </div>
            <div className='absolute  -bottom-10 right-0 left-0 h-52  gradient3 pointer-events-none z-10 ' />
        </section >
    )
}

export default Info


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
