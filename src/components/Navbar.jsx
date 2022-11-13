import React from 'react'
import { FaReact } from 'react-icons/fa'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
// import logo from '../assets/logo.png'
const navbar = () => {


    return (
        <div className='fixed z-50 top-0  left-0 w-[100vw]  bg-navbar'>
            {/* // * tabs   */}
            <ul className="flex items-center justify-start w-full list-none ">
                <li className='ml-3'>
                    <CustomLink href='/myPortfolio' value='aboutMe' />
                </li>
                {/*      <li>
                    <CustomLink href='/aboutMe' value='about me' />
                </li> */}
            </ul>
        </div>
    )
}

function CustomLink({ href, value, ...props }) {
    const { pathname } = useResolvedPath(href)
    const isActive = useMatch({ path: pathname, end: true })
    return (
        <Link to={href} className={`block ${isActive ? "bg-tab" : ""} no-underline`} >
            <div className="relative flex items-center justify-center gap-1 px-2 py-1 text-center">
                <FaReact fill='#00728a' />
                <div className={`absolute top-0 right-0 left-0 h-0.5  bg-pink ${isActive ? "block" : "hidden"} `} />
                {value}
            </div>
        </Link>
    )
}


export default navbar




