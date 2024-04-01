import React from 'react';
import { useState, useEffect } from 'react';
import "./App.css";
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Navbar from './Components/Navbar/Navbar.jsx';
import SplineBg from './Components/SplineBG/SplineBg.jsx';// Import your SplineViewerComponent
import Landing from './Pages/Landing/Landing.jsx'

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'transparent', // Set background color with transparency
          backdropFilter: 'blur(10px)',
          // You can override other styles from the original class here
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Wrap everything in a container div with Spline Viewer as background */}
      <div className='app-container' style={{ position: 'relative' }}>
        <SplineBg />
        <Navbar />
        <Landing />
        {/* Your other components */}
      </div>
    </ThemeProvider>
  );
}

export default App;
