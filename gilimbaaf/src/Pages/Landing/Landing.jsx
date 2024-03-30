import React, {useRef,useEffect} from 'react'
import './Landing.css';
import Navbar from '../../Components/Navbar/Navbar';
import Home from '../../Sections/Home/Home';
import { Application } from '@splinetool/runtime';

const Landing = () => {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);
    app.load('https://prod.spline.design/JCLGPA01rYp6YBVC/scene.splinecode');
  }, []);

  return (
      <div className='landing-container'>
      <Navbar />
      {/* <canvas ref={canvasRef} id="canvas3d" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }} /> */}
      <Home />
    </div>
  )
}

export default Landing