import React from 'react'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
import {  BsSlashLg } from 'react-icons/all'


const Cta = () => {
    return (
        <div>
            <div className="z-50 inline-block p-3 text-3xl rounded-2xl gradient">
                <pre> <FaLessThan />lets do this<BsSlashLg /><FaGreaterThan /> </pre>
            </div>
        </div>
    )
}

export default Cta