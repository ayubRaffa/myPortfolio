import React from 'react'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
import { BsSlashLg } from 'react-icons/all'


const Cta = () => {
    return (
        <div>
            <div className="cursor-pointer relative z-50  p-3 font-header inline-block text-xl md:text-2xl rounded-2xl  gradient ">
                <div className="absolute top-1 right-1 -left-1 md:-right-1 md:left-1 -bottom-1 z-10 pr-2 pb-2 pt-2 pl-2 border  rounded-2xl hover:top-0 hover:left-0 hover:-right-0 hover:-bottom-0 transition-all ease-in " />
                <pre className=''> <FaLessThan />Make the call<BsSlashLg /><FaGreaterThan /> </pre>
            </div>
        </div>
    )
}

export default Cta