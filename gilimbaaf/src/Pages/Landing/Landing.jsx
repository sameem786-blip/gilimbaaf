import React from 'react'
import './Landing.css';
import Navbar from '../../Components/Navbar/Navbar';
import Home from '../../Sections/Home/Home';

const Landing = () => {
  return (
      <div className='landing-container'>
      <Navbar />
      <Home />
    </div>
  )
}

export default Landing