import React, { useRef, useState, useEffect } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { FaCopyright } from 'react-icons/fa'
import { BiSmile } from 'react-icons/bi'



const Footer = ({ App }) => {

    const [content, setContent] = useState('get in touch')

    let footer = useRef()
    let footerContainer = useRef()
    const dragAndDrop = (event) => {
        footerContainer.current.style.top = parseFloat(footerContainer.current.style.top) + event.movementY + 'px'
    }

    const handleEvent = (e) => {
        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', dragAndDrop);
        });
        document.addEventListener('mousemove', dragAndDrop);

    }
    useEffect(() => {
        footerContainer.current.style.top = '-150px'
    }, [])



    return (
        <div className="relative w-full h-[50px] mt-20 ">
            <div ref={footerContainer} className='absolute top-0 left-0 right-0 bottom-0 bg-navbar text-center border-t border-gray-500' >
                <div className="relative flex justify-between">
                    <div className='absolute -top-1 right-0 left-[-4px] py-[5px] transition-colors duration-300 delay-100  hover:bg-tab hover:cursor-row-resize' onMouseDown={handleEvent} onMouseUp={handleEvent} />
                    <div className='w-full flex justify-start flex-row gap-4 flex-nowrap p-2'>
                        <span className='cursor-pointer hover:text-white' onClick={() => setContent('get in touch')}>get in touch</span>
                        <span className='cursor-pointer hover:text-white' onClick={() => setContent('about my website')}>about my website</span>
                        {/*     <span className='cursor-pointer hover:text-white' onClick={() => setContent("what's next")}>what's next</span>
                    */} </div>
                    <span className='p-3 hover:bg-tab rounded-md' onClick={() => footerContainer.current.style.top = '5px'}><IoIosArrowDown /></span>
                </div>
                <div className="overflow-hidden flex flex-col justify-between items-center gap-2 mb-3" ref={footer}>
                    <h2 className="">{Content[content]['h2']}</h2>
                    <p className="font-sans text-sm ">{Content[content]['p']}</p>
                    <span>
                        {Content[content]['span'] !== undefined && Content[content]['span']}
                    </span>
                    <a href={Content[content]['a']['link']} target='_blank' rel='noreferrer' className='underline  w-[30vw] lg:w-auto'>
                        {Content[content]['a']['text']}
                    </a>
                </div>
                <div className="bg-navbar absolute bottom-0 left-1/2 -translate-x-1/2 p-2"><span>Handcrafted by me <FaCopyright /> 2022</span></div>
            </div>
        </div>
    )
}

export default Footer



const Content = {
    'get in touch': {
        'h2': "Interested in collaborating with me?",
        'p': "i'm currently looking for a job or an internship to start my carrier as professional. ",
        'span': " I’m always open to discussing partnership opportunities or a product design work",
        'a': {
            'link': 'mailto:idriss4991@gmail.com',
            'text': 'leave me a message'
        }
    },
    'about my website': {
        'h2': `did you like my work? `,
        'p': 'please check out the source code im tell me what you think',
        'span': "i'm open to any comments",
        'a': {
            'link': 'https://github.com/ayubRaffa',
            'text': 'go to github'
        }
    }

}