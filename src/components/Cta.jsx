import React from 'react'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
import { BsSlashLg } from 'react-icons/all'


const Cta = () => {
    return (
        <div>
            <div className="relative z-50 inline-block p-3 text-xl cursor-pointer font-header md:text-2xl rounded-2xl gradient ">
                <div className="absolute z-10 pt-2 pb-2 pl-2 pr-2 transition-all ease-in border top-1 right-1 -left-1 md:-right-1 md:left-1 -bottom-1 rounded-2xl hover:top-0 hover:left-0 hover:-right-0 hover:-bottom-0 " />
                <pre className=''> <FaLessThan />Make the call<BsSlashLg /><FaGreaterThan /> </pre>
            </div>
        </div>
    )
}

export default Cta