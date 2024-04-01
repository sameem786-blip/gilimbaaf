import React from 'react'
import './Home.css'
import Logo from '../../assets/logo/logo2.png' 
import Carpet from '../../assets/carpet/1.png'

const Home = () => {
  return (
    <div className='home-container'>
      <div className="home-row-1-2-col-1">
        <div className="left-most">
          <img src={Logo} className='hero-logo'/>
        </div>
      </div>
      <div className="home-row-1-col-2-column">
        <div className="row-1-col-2-row">
          <div className="home-col-2-row-1-col-1"></div>
          <div className="home-col-2-row-1-col-2">
            <div className='top-right'>
              <h1 className='company-name'>گیلم باف</h1>
            </div>
          </div>
        </div>
        <div className="row-1-col-2-row">
          <div className="home-col-2-row-1-col-1-2">
          </div>
          <div className="home-col-2-row-1-col-2-2">fgknsdjknvini</div>
        </div>
      </div>
      

    </div>
  )
}

export default Home