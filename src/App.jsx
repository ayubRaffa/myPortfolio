import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import './index.css'
import Navbar from './components/Navbar';
import Index from './Index';
import Footer from './components/Footer';
import CustomLoader from './components/CustomLoader';

const App = () => {

  const [canLoadMainContent, setcanLoadMainContent] = useState(true);


  return (
    <>
    {/*   <CustomLoader setcanLoadMainContent={setcanLoadMainContent} /> */}
      {canLoadMainContent &&
        <div className="App  max-w-screen min-h-screen bg-background overflow-hidden">
          <Navbar />
          <Routes>
            <Route path='/' element={<Index canLoadMainContent={canLoadMainContent} />} ></Route>
            <Route path='/aboutMe' element={<Index />} ></Route>
          </Routes>
          <Footer />
        </div >
      }
    </>

  )
}
export default App






