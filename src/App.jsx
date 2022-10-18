import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import './index.css'
import Navbar from './components/Navbar';
import Index from './components/Index';
import Footer from './components/Footer';
import gif from './assets/Infinity.gif'
import r1 from './assets/robato/0001.webp';
import gsap from 'gsap';


const App = () => {

  let [loading, setLoading] = useState(true);
  useEffect(() => {
    /* setTimeout(() => {
      setLoading(false)
    }, 5000); */
  })

  return (
    <>
      {loading && <CustomLoader setLoading={setLoading} />}
      <div className="max-w-screen min-h-screen bg-backgound overflow-hidden">
        <Navbar />
        <Routes>
          <Route path='/' element={<Index />} ></Route>
          <Route path='/aboutMe' element={<Index />} ></Route>
        </Routes>
        <Footer />
      </div >
    </>

  )
}
export default App






let imagesLIst = []
const imgmodules = import.meta.glob('./assets/robato/*.webp', { eager: true })
for (const path in imgmodules) {
  imagesLIst.push(imgmodules[path].default)
}

const CustomLoader = ({ setLoading }) => {
  let i = 1
  useEffect(() => {
    const robatoImgs = gsap.utils.toArray('.robato')
    //  gsap.set(robatoImgs, { display: 'none' })
    const interval = setInterval(() => {
      const tl = gsap.timeline();
      tl.set(robatoImgs[i], { display: 'block' }).set(robatoImgs[i - 2], { display: 'none' })

      if (i > imagesLIst.length - 1) {
        clearInterval(interval)
      }
      i++
    }, 50)
  }, [])
  const diveInClick = () => {

    gsap.to(".loading", {
      translateX: '+=100%',
      duration: 2,
      opacity: 0,
      display: "none",
      onComplete: () => setLoading(false)
    });
  }

  return (
    <div className="loading fixed bottom-0 right-0 left-0 top-0 z-[10000] overflow-hidden bg-backgound " >
      <div className="relative h-screen flex flex-col md:flex-row justify-center items-center ">
        <div className="basis-0 grow-[2] flex flex-col justify-center  text-left pl-10 ">
          <h1 className=' text-4xl lg:text-5xl xl:text-6xl font-extrabold capitalize font-revalia '>HI, it me! ayoub <br />
            i make web sites, and other
          </h1>
          <h2 className='text-2xl font-bold  lg:text-3xl'>
            by the way, i am not a programmer !
            im just someone who
            loves   </h2>
          <button type="button" className="text-left uppercase font-revalia py-4 text-blue-500" onClick={diveInClick}>lets dive in</button>
        </div>
        {/* personal image */}{/* 
         */}

        <div className=" basis-0 grow-[1] min-w-screen ">
          <img src={r1} className='robato absolute bottom-0 right-0 lg:right-[6vw] w-[24rem]  z-20  ' />
          {imagesLIst?.map((item, index) => (
            <img key={index} src={item} className='robato absolute  bottom-0 right-0 lg:right-[6vw] w-[24rem] hidden' />
          ))}
        </div>
      </div>

    </div >
  )

}
