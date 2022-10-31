import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import './index.css'
import Navbar from './components/Navbar';
import Index from './Index';
import Footer from './components/Footer';
import CustomLoader from './components/CustomLoader';
import gsap from "gsap";

const App = () => {

  const [CanLoadMainContent, setCanLoadMainContent] = useState(true);
  useEffect(() => {
    if (CanLoadMainContent) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".App",
          start: "center bottom",
          end: "+=1500",
          scrub: true,
          toggleActions: "play pause resume reset",
        }
      });

      tl.to(".App", { backgroundColor: "#05070a", })
    }
  }, [CanLoadMainContent])



  return (
    <>
      {/*   <CustomLoader setCanLoadMainContent={setCanLoadMainContent} /> */}
      {CanLoadMainContent &&
        <div className="App transition-colors duration-1000  max-w-screen min-h-screen bg-background2-500 overflow-hidden">
          <Navbar />
          <Routes>
            <Route path='/' element={<Index CanLoadMainContent={CanLoadMainContent} />} ></Route>
            <Route path='/aboutMe' element={<Index />} ></Route>
          </Routes>
         {/*  <Footer /> */}
        </div >
      }
    </>

  )
}
export default App






