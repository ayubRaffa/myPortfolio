import React, { useRef, useState, useEffect } from 'react'
import { IoIosArrowDown } from 'react-icons/io'


const Footer = () => {

    let footer = useRef()
    const dragAndDrop = (event) => {
        footer.current.style.height = footer?.current?.style?.height.replace('px', '') - event.movementY + 'px'
    }
    useEffect(() => {
        footer.current.style.height = '50px'
    }, [])



    return (
        <div className=' left-0 bg-navbar ' >
            <div className="relative flex justify-between">
                <div className='absolute top-0 right-0 left-[-4px] py-[4px] transition-colors duration-300 delay-200  hover:bg-tab hover:cursor-row-resize' /* onMouseDown={handleEvent} onMouseUp={handleEvent} */ />
                <div className='w-full flex justify-start flex-row gap-4 flex-nowrap p-2'>
                    <span className='cursor-pointer hover:text-white'>PROBLEM</span>
                    <span className='cursor-pointer hover:text-white'>OUTPUT</span>
                    <span className='cursor-pointer hover:text-white'>DEBUG  CONSOLE</span>
                    <span className='cursor-pointer hover:text-white'>TERMINAL</span>
                </div>
                <span className='p-2 hover:bg-tab rounded-md' onClick={() => footer.current.style.height = "10px"}><IoIosArrowDown /></span>

            </div>
            <div className="overflow-hidden" ref={footer}>

            </div>

        </div>
    )
}

export default Footer