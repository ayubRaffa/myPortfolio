import React from 'react'
import { useEffect } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import logo from '../assets/logo.png'
const navbar = () => {


    return (
        <div className='fixed z-50 top-0  left-0 w-[100vw]  bg-navbar'>
            {/* // * tabs   */}
            <ul className="flex items-center justify-start w-full list-none ">
                <li className='ml-3'>
                    <CustomLink href='/' value='who am i' />
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
            <div className="relative px-2 py-1 text-center flex justify-center items-center gap-1">
                <img src={logo} alt="logo" width='30px'/>
                <div className={`absolute top-0 right-0 left-0 h-0.5  bg-pink-500 ${isActive ? "block" : "hidden"} `} />
                {value}
            </div>
        </Link>
    )
}


export default navbar




