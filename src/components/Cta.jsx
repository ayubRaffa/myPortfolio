import React from 'react'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
import { BsSlashLg } from 'react-icons/all'


const Cta = () => {

    const scroll = () => window.scroll({
        top: window.screen.height / 1.4,
        behavior: "smooth"
    });

    return (
        <div onClick={scroll}>
            <div className="relative z-50 inline-block p-3 text-xl cursor-pointer font-header md:text-2xl rounded-2xl gradient hover:saturate-200">
                <div className="absolute z-10 pt-2 pb-2 pl-2 pr-2 transition-all ease-in border top-1 right-1 -left-1 md:-right-1 md:left-1 -bottom-1 rounded-2xl " />
                <pre className=''> <FaLessThan />get in touch<BsSlashLg /><FaGreaterThan /> </pre>
            </div>
        </div>
    )
}

export default Cta