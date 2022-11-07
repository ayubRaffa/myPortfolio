import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import './index.css'
import Navbar from './components/Navbar';
import Index from './Index';
import Footer from './components/Footer';
import CustomLoader from './components/CustomLoader';
import gsap from "gsap";
import { useRef } from "react";
const App = () => {

  const [CanLoadMainContent, setCanLoadMainContent] = useState(true);
  useEffect(() => {
    const colors = ['#080a0f', '#0a0e14', '#030305', '#090b19', '#080a10']

    let randomColor
    function getColor() {
      let initialColor = randomColor || "#0d1119"
      randomColor = colors[Math.floor(Math.random() * colors.length)]
      if (randomColor === initialColor) { getColor() }
      return randomColor
    }
    if (CanLoadMainContent) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".App",
          start: "30% center",
          end: "65% center",
          scrub: true,
          onEnter: () => { document.body.style.setProperty('--color-bg', getColor()); },
          onLeave: () => { document.body.style.setProperty('--color-bg', getColor()); },
          onEnterBack: () => {
            document.body.style.setProperty('--color-bg', getColor());
          },
        }
      });
    }
  }, [CanLoadMainContent])



  return (
    <>
      {/*  <CustomLoader setCanLoadMainContent={setCanLoadMainContent} /> */}
      {CanLoadMainContent &&
        <div className="App max-w-screen min-h-screen bg-[color:var(--color-bg)] transition-colors duration-500 overflow-hidden">
          <Navbar />
          <Routes>
            <Route path='/' element={<Index CanLoadMainContent={CanLoadMainContent} />} ></Route>
          </Routes>
          {/*  <Footer /> */}
        </div >
      }
    </>

  )
}
export default App






