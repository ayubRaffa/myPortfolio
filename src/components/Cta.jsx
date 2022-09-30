import React from 'react'
import { FaGreaterThan, FaLessThan, FaSlack } from 'react-icons/fa'


const Cta = () => {
    return (
        <div>
            <div className="z-50 inline-block p-3 text-3xl rounded-2xl gradient">
                <pre> <FaLessThan />lets do this<FaSlack /><FaGreaterThan /> </pre>
            </div>
        </div>
    )
}

export default Cta