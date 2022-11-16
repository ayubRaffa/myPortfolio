import React, { useRef, useState, useEffect } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { FaCopyright } from 'react-icons/fa'



const Footer = ({ App }) => {

    const [content, setContent] = useState('get in touch')
    const [height, setheight] = useState(0)

    let footer = useRef()
    let footerContainer = useRef()
    const dragAndDrop = (event) => {
        footer.current.style.height = parseFloat(footer.current.style.height) + (-event.movementY) + 'px'
    }

    const handleEvent = (e) => {
        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', dragAndDrop);
            setheight(parseFloat(footer.current.style.height))

        });
        document.addEventListener('mousemove', dragAndDrop);
    }
    useEffect(() => {
        footer.current.style.height = `${height}px`
    }, [height])


    return (
        <div className="relative w-full h-[50px] mt-24 ">
            <div ref={footerContainer} className='absolute  bottom-8 left-0 right-0 text-center border-t border-gray-500 bg-navbar overflow-scroll' >
                <div className="relative flex justify-between">
                    <div className='absolute -top-1 right-0 left-[-4px] py-[5px] transition-colors duration-300 delay-100  hover:bg-tab hover:cursor-row-resize' onMouseDown={handleEvent} onMouseUp={handleEvent} />
                    <div className='flex flex-row justify-start w-full gap-4 p-2 flex-nowrap'>
                        <span className='cursor-pointer hover:text-white' onClick={() => { setContent('get in touch'); setheight(180) }}>get in touch</span>
                        <span className='cursor-pointer hover:text-white' onClick={() => { setContent('about my website'); setheight(180) }}>about my website</span>
                        {/*     <span className='cursor-pointer hover:text-white' onClick={() => setContent("what's next")}>what's next</span>
                    */} </div>
                    <span className='p-3 rounded-md hover:bg-tab' onClick={() => setheight(height => (height === 0) ? 180 : 0)} > {(height === 0) ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                </div>
                <div className="flex flex-col items-center justify-start gap-2  overflow-hidden " ref={footer}>
                    <h2 className="">{Content[content]['h2']}</h2>
                    <p className="font-sans text-sm ">{Content[content]['p']}</p>
                    <span>
                        {Content[content]['span'] !== undefined && Content[content]['span']}
                    </span>
                    <a href={Content[content]['a']['link']} target='_blank' rel='noreferrer' className='underline  lg:w-auto'>
                        {Content[content]['a']['text']}
                    </a>
                </div>
            </div >
            <div className="absolute bottom-0 right-0 pb-2 bg-navbar left-0 text-center h-8"><span>Handcrafted by me <FaCopyright /> 2022</span></div>
        </div >
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
        'h2': 'did you like my work?',
        'p': 'please check out the source code im tell me what you think',
        'span': "i'm open to any comments",
        'a': {
            'link': 'https://github.com/ayubRaffa/myPortfolio',
            'text': 'go to github >'
        }
    }
} 