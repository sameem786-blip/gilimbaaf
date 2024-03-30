import React from 'react'
import './Home.css' 

const Home = () => {
  return (
    <div className='home-container'>
      <div className="home-row-1-2-col-1">
        Row 1-2 col-1
      </div>
      <div className="home-row-1-col-2-column">
        <div className="row-1-col-2-row">
          <div className="home-col-2-row-1-col-1"></div>
          <div className="home-col-2-row-1-col-2"></div>
        </div>
        <div className="row-1-col-2-row">
          <div className="home-col-2-row-1-col-1-2"></div>
          <div className="home-col-2-row-1-col-2-2"></div>
        </div>
      </div>
      

    </div>
  )
}

export default Home