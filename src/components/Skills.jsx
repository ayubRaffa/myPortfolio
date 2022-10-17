import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import { FaTimes } from 'react-icons/fa';
import { SkillsInfo } from './SkillsInfo';



const Skills = ({ refer }) => {
    return (
        <section className="skills_section azer relative bg-backgound2 " ref={refer}>
            <div className="relative mx-auto pb-[200px] border hexagon    ">

                {/* left hexagon */}
                <div className="left relative ">
                    <IconImage src={SkillsInfo.node.src} alt={SkillsInfo.node.name} classname={'l z-20'} text={SkillsInfo.node.text} />
                    <IconImage src={SkillsInfo.reactQuery.src} alt={SkillsInfo.node.name} classname={'tl absolute top-0 left-0'} text={SkillsInfo.reactQuery.text} />
                    <IconImage src={SkillsInfo.php.src} alt={SkillsInfo.php.name} classname={'bl absolute top-0 left-0'} text={SkillsInfo.php.text} />

                </div>
                {/* center hexagon */}
                <div className="centerr relative">
                    <IconImage src={SkillsInfo.react.src} alt={SkillsInfo.react.name} classname={'c z-20'} text={SkillsInfo.react.text} />
                    <IconImage src={SkillsInfo.jquery.src} alt={SkillsInfo.jquery.name} classname={'bl absolute top-0 left-0'} text={SkillsInfo.jquery.text} />
                    <IconImage src={SkillsInfo.gsap.src} alt={SkillsInfo.gsap.name} classname={'br absolute top-0 left-0'} text={SkillsInfo.gsap.text} />
                    <IconImage src={SkillsInfo.postgres.src} alt={SkillsInfo.postgres.name} classname={'tl absolute top-0 left-0'} text={SkillsInfo.postgres.text} />
                    <IconImage src={SkillsInfo.typescript.src} alt={SkillsInfo.typescript.name} classname={'tr absolute top-0 left-0 '} text={SkillsInfo.typescript.text} />
                </div>

                {/* rigth hexagon */}
                <div className="right relative ">
                    <IconImage src={SkillsInfo.tailwind.src} alt={SkillsInfo.tailwind.name} classname={'r z-20  '} text={SkillsInfo.tailwind.text} />
                    <IconImage src={SkillsInfo.sass.src} alt={SkillsInfo.sass.name} classname={'br absolute top-0 left-0'} text={SkillsInfo.sass.text} />
                    <IconImage src={SkillsInfo.git.src} alt={SkillsInfo.git.name} classname={'tr absolute top-0 left-0 '} text={SkillsInfo.git.text} />

                </div>

                <div className='buttom absolute -top-1 -bottom-1 -right-1 -left-1 bg-gradient-to-r from-backgound2 to-backgound2  via-transparent pointer-events-none' />
                <h2 className='skill absolute w-full   lg:px-[20%] text-center  top-5  text-2xl opacity-0 '>my set of skills so far</h2>
                <p className='skill absolute w-full   lg:px-[20%] text-center top-5  text-lg opacity-0 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis illum, officiis itaque sequi suscipit consectetur qui facilis aliquid quasi saepe maxime ullam alias accusamus numquam quae odit fuga porro enim.</p>
            </div>
        </section>
    )
}

export default Skills



function IconImage({ src, classname, alt, text }) {
    const [article, setarticle] = useState(null)

    const handleClick = (e) => {
        setarticle(e);
    }
    useEffect(() => {
        gsap.fromTo(".popUp", { scale: 0, opacity: 0 }, {
            scale: 1,
            opacity: 1,
            duration: .4,
            ease: "power.out",
        })
    }, article)
    return (
        <>
            <img src={src} alt={alt} className={classname} onClick={() => handleClick(text)} />

            {article &&
                <div className='fixed top-0 left-0 right-0  bottom-0 z-[100]'>
                    <div className="popUp flex  justify-center items-center w-full h-full">
                        <div className="relative flex justify-center items-center  w-full md:w-[calc(40rem+20vw)] h-96 bg-hero-tiny-checkers-blue-100 azer2 rounded-tl-full  rounded-bl-full">
                            <div className='absolute top-0 right-0 p-2 cursor-pointer  hover:-skew-x-12 hover:-skew-y-12 ' onClick={() => handleClick(null)}><FaTimes color='white' size={'25px'} /></div>
                            <div className="">
                                <img src={src} alt="" className='w-fit scale-110 ' />
                            </div>
                            <div className=" flex flex-col justify-center items-center gap-4">
                                <h2 className='text-center text-3xl' >{alt}</h2>
                                <p className='text-center text-xl' >{text}</p>
                            </div>
                        </div>
                    </div>
                </ div>
            }
        </>
    )
}