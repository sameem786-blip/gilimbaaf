import { useState,useRef, useEffect } from 'react'

function useFollowCursor() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const circleRef = useRef(null);

  const handleMouseMove = (event) => {
    setCursorX(event.clientX);
    setCursorY(event.clientY);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return {
    cursorX,
    cursorY,
    circleRef,
  };
}
  
const FollowCursor = ({ children }) => {
    const { cursorX, cursorY, circleRef } = useFollowCursor();
  return (
    <div className="follow-cursor" ref={circleRef} style={{ left: cursorX, top: cursorY }}>
      {children}
    </div>
  )
}

export default FollowCursor