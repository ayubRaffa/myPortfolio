import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap';
import robito from '../assets/0000-0132_robito.webm'
import robitoImg from '../assets/robito.png'
import { FaTimes, FaGreaterThan } from 'react-icons/fa';



const CustomLoader = ({ setCanLoadMainContent }) => {
	const [showrobitoInfo, setshowrobitoInfo] = useState(false)

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
		}).fromTo(".Designer", { opacity: 0, translateX: "-=100px" }, {
			translateX: '0',
			opacity: 1,
			ease: "power.out",
			duration: 2,
			delay: .5,
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
			display: "none",
			onComplete: () => setCanLoadMainContent(true),
		}).to(".loading_Wrapper", {
			display: "none",
		})
	}


	return (
		<div className=" loading_Wrapper  fixed bottom-0 right-0 left-0 top-0 z-[100] overflow-hidden bg-background ">
			< div className={`loading relative h-screen flex flex-col md:flex-row justify-center items-center ${showrobitoInfo && " blur-xl pointer-events-none"}`} >
				<div className="relative basis-0 grow-[2] flex flex-col justify-end gap-4  text-left pl-10 lg:pl-16 ">
					<h1 className='mainText opacity-0 text-4xl lg:text-5xl xl:text-6xl font-extrabold capitalize font-revalia '>this is a UX/UI designer
						<br />
						& front/back-end web developer.
					</h1>
					<h2 className='Designer opacity-0 text-2xl font-bold   lg:text-3xl italic '>
						and a 3D designer
					</h2>
					<h2 className="letsDiveIN opacity-0 text-xl mt-2 w-fit text-left uppercase font-revalia  text-blue-800 cursor-pointer z-[4345] bg-white px-2  hover:bg-background hover:text-white" onClick={diveInClick}>lets dive in <FaGreaterThan /></h2>
				</div>
				{/* personalPicnal image */}{/* 
         */}

				<div className="opacity-0 basis-0 grow-[1]  self-end md:self-center  cursor-pointer robito" onClick={() => setshowrobitoInfo(true)} onMouseEnter={robitoHovering} onMouseLeave={robitoout}>
					<video src={robito} type='video/webm' ref={robitoRef} /* autoPlay */ playsInline muted className='w-[19rem] lg:w-96 scale-125 md:-translate-x-16 -translate-y-14  pointer-events-none  ' ></video>
					{/* 		{imagesLIst?.map((item, index) => (
						<img key={index} src={item} className='robito absolute  bottom-0 right-0 lg:right-[6vw] w-[24rem] hidden z-20' />
					))} */}
				</div>
			</div>
			{showrobitoInfo && <RobitoInfo setshowrobitoInfo={setshowrobitoInfo} showrobitoInfo={showrobitoInfo} />}

		</div >
	)

}


export default CustomLoader


function RobitoInfo({ setshowrobitoInfo, showrobitoInfo }) {

	useEffect(() => {
		if (showrobitoInfo) {
			gsap.fromTo(".popUprobito", { scale: 0, opacity: 0 }, {
				scale: 1,
				opacity: 1,
				duration: .4,
				ease: "power.out",
			})
		}
	}, [showrobitoInfo])

	return (
		<>

			<div className='fixed top-0 left-0 right-0  bottom-0 z-[1000]'>
				<div className="popUprobito flex  justify-center items-center w-full h-full">
					<div className="relative flex justify-center items-center  w-full md:w-[calc(40rem+20vw)] h-96   ">
						<div className='absolute top-0 right-0 p-2 cursor-pointer  hover:-skew-x-12 hover:-skew-y-12 z-50 ' onClick={() => setshowrobitoInfo(false)}>
							<FaTimes color='white' size={'25px'} />
						</div>
						<div className="">
							<img src={robitoImg} alt="" className='w-fit  ' />
						</div>
						<div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center gap-4">
							<h2 className='text-center text-3xl' >Robito</h2>
							<p className='text-center text-xl' >this is a module i have found in the internet and i have modified and animate it in blender software for my portfolio</p>
						</div>
					</div>
				</div>
			</ div>

		</>
	)
}