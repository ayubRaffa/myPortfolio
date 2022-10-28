import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import { FaTimes } from 'react-icons/fa';
import { SkillsInfo } from './SkillsInfo';



const Skills = ({ refer }) => {
    return (
        <section className="skills_section gradient_layer relative bg-background-500 " ref={refer}>
            <div className="relative mx-auto pb-[200px] border-t border-b hexagon    ">

                {/* left hexagon */}
                <div className="left relative ">
                    <IconImage className={'l z-20'} skill={SkillsInfo.reactQuery} />
                    <IconImage className={'tl absolute top-0 left-0'} skill={SkillsInfo.node} />
                    <IconImage className={'bl absolute top-0 left-0'} skill={SkillsInfo.php} />

                </div>
                {/* center hexagon */}
                <div className="centerr relative">
                    <IconImage className={'c z-20'} skill={SkillsInfo.react} />
                    <IconImage className={'bl absolute top-0 left-0'} skill={SkillsInfo.jquery} />
                    <IconImage className={'br absolute top-0 left-0'} skill={SkillsInfo.gsap} />
                    <IconImage className={'tl absolute top-0 left-0'} skill={SkillsInfo.postgres} />
                    <IconImage className={'tr absolute top-0 left-0 '} skill={SkillsInfo.typescript} />
                </div>

                {/* rigth hexagon */}
                <div className="right relative ">
                    <IconImage className={'r z-20  '} skill={SkillsInfo.tailwind} />
                    <IconImage className={'br absolute top-0 left-0'} skill={SkillsInfo.sass} />
                    <IconImage className={'tr absolute top-0 left-0 '} skill={SkillsInfo.git} />

                </div>

                <div className='buttom absolute -top-1 -bottom-1 -right-1 -left-1 bg-gradient-to-r from-background-500 to-background-500  via-transparent pointer-events-none' />
                <h2 className='skill absolute w-full   lg:px-[20%] text-center  top-5  text-2xl opacity-0 '>my set of skills so far</h2>
                <p className='skill absolute w-full   lg:px-[20%] text-center top-5  text-lg opacity-0 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis illum, officiis itaque sequi suscipit consectetur qui facilis aliquid quasi saepe maxime ullam alias accusamus numquam quae odit fuga porro enim.</p>
            </div>
        </section>
    )
}

export default Skills



function IconImage({ skill, className }) {
    const [article, setarticle] = useState(null)

    const KillInfosection = () => {
        gsap.fromTo(".popUpSkills", { scale: 1, opacity: 1 }, {
            scale: 0,
            translateY: "+=50px",
            opacity: 0,
            duration: .4,
            ease: "power.out",
            onComplete: () => setarticle(null)
        })

    }
    useEffect(() => {
        if (article) {
            gsap.to(".popUpSkills", {
                scale: 1,
                opacity: 1,
                duration: .4,
                ease: "power.out",
            })
        }
    }, [article])
    return (
        <>
            <img src={skill.src} alt={skill.alt} className={className} onClick={() => setarticle(skill)} />

            {article &&
                <div className='fixed article  top-0 left-0 right-0  bottom-0 z-[1000]'>
                    <div className="popUpSkills flex scale-0 opacity-0 justify-center items-center w-full h-full bg-background">
                        <div className="relative flex justify-center items-center flex-col  w-full md:w-[calc(40rem+20vw)]  ">
                            <div className='absolute -top-16 right-0 p-2 cursor-pointer  hover:-skew-x-12 hover:-skew-y-12 ' onClick={() => KillInfosection()}>
                                <FaTimes color='white' size={'25px'} />
                            </div>
                            <div className="">
                                <img src={skill.src} alt="" className='w-fit lg:scale-110 ' />
                            </div>
                            <div className=" flex flex-col justify-center items-center gap-4">
                                <h2 className='text-center text-3xl' >{skill.alt}</h2>
                                <p className='text-center text-xl' >{skill.text}</p>
                            </div>
                        </div>
                    </div>
                </ div>
            }
        </>
    )
}