import React from 'react'
import './Home.css' 

const Home = () => {
    const handleScroll = () => {
    const homeSection = document.getElementById('home-section');
    if (homeSection && window.pageYOffset >= homeSection.offsetTop && window.pageYOffset <= homeSection.offsetTop + homeSection.offsetHeight) {
      setActiveTab('Home');
    }
    };
    React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div id="home-section" className='home-container'>Home</div>
  )
}

export default Home