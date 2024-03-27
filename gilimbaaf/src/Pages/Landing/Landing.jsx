import React from 'react'
import './Landing.css';
import Navbar from '../../Components/Navbar/Navbar';
import Home from '../../Sections/Home/Home';
import About from '../../Sections/About/About';

const Landing = () => {
  const [activeTab, setActiveTab] = React.useState('Home');
  return (
      <div className='landing-container'>
      <Navbar activeTab={activeTab}/>
      <Home className={activeTab === 'Home' ? 'active' : ''} />
      <About className={activeTab === 'About' ? 'active' : ''}/>
    </div>
  )
}

export default Landing