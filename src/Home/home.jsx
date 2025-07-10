import React from 'react'
import Navbar from '../component/navbar';
import {Outlet} from "react-router-dom";
import Footer from '../component/footer';


const MainHome = () => {
  return (
    <div className=''>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainHome