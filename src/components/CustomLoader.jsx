import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap';
import robito from '../assets/0000-0132_robito.webm'
import robitoImg from '../assets/robito.png'
import ac from '../assets/ac.png'
import { FaTimes, FaGreaterThan, FaSmileWink } from 'react-icons/fa';



const CustomLoader = ({ setCanLoadMainContent }) => {
	const [showRobitoInfo, setshowRobitoInfo] = useState(false)

	const robitoRef = useRef()
	let canrobitoHovered = false

	const timeupdate = () => {
		if (robitoRef.current.currentTime >= 4.16) {
			robitoRef.current.pause()
			canrobitoHovered = true
			robitoRef.current.removeEventListener("timeupdate", timeupdate)
		}
	}
	const timeupdate2 = () => {
		if (robitoRef.current.currentTime >= 4.7) {
			robitoRef.current.pause()
			canrobitoHovered = true
			robitoRef.current.removeEventListener("timeupdate", timeupdate2)
		}
	}
	const robitoHovering = () => {
		if (canrobitoHovered) {
			canrobitoHovered = false
			robitoRef.current.currentTime = 4.16
			robitoRef.current.addEventListener("timeupdate", timeupdate2);
			robitoRef.current.play()
		}
	}
	const robitoout = () => {
		if (robitoRef.current.currentTime >= 4.7) {
			robitoRef.current.play()
		}

	}


	useEffect(() => {
		function playRobito() {
			robitoRef.current.addEventListener("timeupdate", timeupdate);
			robitoRef.current.play()
		}
		gsap.context(() => {

		})
		const timeline = gsap.timeline({ defaults: { duration: .5 } })
		timeline.to(".mainText", {
			opacity: 1,
			duration: 1,
			ease: "power3.in"
		}).fromTo(".robito", { opacity: 0, translateX: "+=100px" }, {
			translateX: '0',
			opacity: 1,
			duration: 2,
			ease: "power.out",
			delay: .5,
			onComplete: () => playRobito()
		}).fromTo(".enthusiast", { opacity: 0, translateX: "-=100px" }, {
			translateX: '0',
			opacity: 1,
			ease: "power3z.out",
			duration: 2,
			delay: .8,
		}).fromTo(".letsDiveIN", { opacity: 0 }, {
			opacity: 1,
			delay: 2,
			duration: 2,
			ease: "power.out"
		})

	}, [])




	const diveInClick = () => {
		const tl = gsap.timeline()
		tl.to(".loading", {
			duration: .6,
			scale: 1.4,
			opacity: 0,
			ease: "power.out",
			onStart: () => setCanLoadMainContent(true),
			onComplete: () => gsap.to(".loading_Wrapper", {
				opacity: 0,
				duration: 1,
				display: "none",
			})
		})
	}
	/*const diveInClick = () => {
		const tl = gsap.timeline()
		tl.to(".loading", {
			duration: 4,
			scale: 1.4,
			opacity: 0,
			ease: "power.out",
			onStart: () => {
				robitoRef.current.currentTime = 6
				robitoRef.current.play()
				gsap.to('.robito_wrapper', {
					pointerEvents: "none",
					userSelect: "none",
					xPercent: -120,
					duration: 3.5,
					onComplete: () => {
						gsap.to(".loading_Wrapper", {
							opacity: 0,
							duration: 1,
							display: "none",
						})
						setCanLoadMainContent(true)
					}

				})
			},
		})
	} */


	return (
		<div className='loading_Wrapper saturate-80 bg-blend-lighten bg-center bg-no-repeat bg-cover fixed bottom-0 right-0 left-0 top-0 z-[100] overflow-hidden bg-background-500 ' style={{ backgroundImage: `url(${ac})` }}>
			<div className={`loading relative h-screen flex flex-col justify-start md:flex-row md:justify-center items-center  ${showRobitoInfo && " blur-xl pointer-events-none"}`} >
				<div className="relative basis-0 grow-[2] flex flex-col justify-end gap-4  text-left pl-10 lg:pl-16 cursor-pointer" onClick={diveInClick}>
					<h1 className='text-2xl px-2 font-extrabold capitalize opacity-0 mainText sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-revalia '>this is a UX/UI designer
						<br />
						& front/back-end web developer.
					</h1>
					<h2 className='text-2xl italic font-bold opacity-0 enthusiast lg:text-3xl '>
						and a 3D enthusiast
					</h2>
					<p className="letsDiveIN opacity-0 text-xl mt-2  w-fit text-left uppercase text-background-500  cursor-pointer z-[4345] bg-white px-2 hover:bg-background-500 hover:text-white transition-colors duration-500" onClick={diveInClick}>lets dive in <FaGreaterThan /></p>
				</div>

				<div className="robito_wrapper opacity-0 basis-0 grow-[1]  self-end md:self-center  cursor-pointer robito" onClick={() => setshowRobitoInfo(true)} onMouseEnter={robitoHovering} onMouseLeave={robitoout}>
					<video src={robito} type='video/webm' ref={robitoRef} /* autoPlay */ playsInline muted className='w-[19rem] lg:w-96 scale-125 md:-translate-x-16 -translate-y-14 pointer-events-none' ></video>
				</div>
			</div>
			{showRobitoInfo && <RobitoInfo setshowRobitoInfo={setshowRobitoInfo} showRobitoInfo={showRobitoInfo} />}

		</div >
	)

}


export default CustomLoader


function RobitoInfo({ setshowRobitoInfo, showRobitoInfo }) {

	useEffect(() => {
		if (showRobitoInfo) {
			gsap.fromTo(".popUpRobito", { scale: 0, opacity: 0 }, {
				scale: 1,
				opacity: 1,
				duration: .4,
				ease: "power.out",
			})
		}
	}, [showRobitoInfo])

	return (
		<>

			<div className='fixed top-0 left-0 right-0  bottom-0 z-[1000]'>
				<div className="flex items-center justify-center w-full h-full popUpRobito">
					<div className="relative flex justify-center items-center  w-full md:w-[calc(40rem+20vw)] h-96   ">
						<div className='absolute top-0 right-0 z-50 p-2 cursor-pointer hover:-skew-x-12 hover:-skew-y-12 ' onClick={() => setshowRobitoInfo(false)}>
							<FaTimes color='white' size={'25px'} />
						</div>
						<div className="">
							<img src={robitoImg} alt="" className='w-fit ' />
						</div>
						<div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-4">
							<h2 className='text-3xl text-center' >Robito</h2>
							<p className='text-xl text-center' >this is a module i found in the internet and i have modified and animate in blender software for my portfolio. <br />hope you like it <FaSmileWink /></p>
						</div>
					</div>
				</div>
			</ div>

		</>
	)
}