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

  const App = useRef()
  const [CanLoadMainContent, setCanLoadMainContent] = useState(false);
  useEffect(() => {
    const bgColors = ['#080a0f', '#080a10', '#0a0e14', '#030305', '#06070f']
    const linkColors = ['#c7f9dc', '#f2f9c7', '#f9cec7', '#f9bcf1', '#bcecf9']

    let randomColor, iteratingColor, i = 0, j = 0
    function getBackgroundColor() {
      iteratingColor = bgColors[i]
      if (i === bgColors.length - 1) j = 1; else if (i === 0) j = 0
      if (j === 1) i--; else i++
      return iteratingColor
    }
    function getLinkColor() {
      const Color = linkColors[Math.floor(Math.random() * linkColors.length)]
      if (Color === randomColor) getLinkColor()
      return Color
    }
    if (CanLoadMainContent) {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".App",
          start: "30% center",
          end: "60% center",
          scrub: true,
          onEnter: () => {
            document.body.style.setProperty('--color-bg', getBackgroundColor());
            document.body.style.setProperty('--color-link', getLinkColor())
          },
          onLeave: () => {
            document.body.style.setProperty('--color-bg', getBackgroundColor());
            //    document.body.style.setProperty('--color-link', getLinkColor())
          },
          onEnterBack: () => {
            document.body.style.setProperty('--color-bg', getBackgroundColor());
            //  document.body.style.setProperty('--color-link', getLinkColor())
          },
          onLeaveBack: () => {
            document.body.style.setProperty('--color-bg', getBackgroundColor());
            //  document.body.style.setProperty('--color-link', getLinkColor())
          },
        }
      });
    }
  }, [CanLoadMainContent])



  return (
    <>
      <CustomLoader setCanLoadMainContent={setCanLoadMainContent} />
      {CanLoadMainContent &&
        <div ref={App} className="debug-screens App max-w-screen min-h-screen bg-[color:var(--color-bg)] transition-colors duration-500 overflow-x-hidden ">
          <Navbar />
          <Routes>
            <Route path='/myPortfolio/' element={<Index CanLoadMainContent={CanLoadMainContent} />} ></Route>
          </Routes>
          <Footer refer={App} />
        </div >
      }
    </>

  )
}
export default App






