import React from 'react'
import './About.css'

const About = () => {
    const handleScroll = () => {
    const homeSection = document.getElementById('about-section');
    if (homeSection && window.pageYOffset >= homeSection.offsetTop && window.pageYOffset <= homeSection.offsetTop + homeSection.offsetHeight) {
      setActiveTab('About');
    }
    };
    React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div id="about-section" className='about-container'>About</div>
  )
}

export default About