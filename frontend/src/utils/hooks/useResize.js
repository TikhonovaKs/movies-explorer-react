import { useState, useEffect } from 'react';

const SCREEN_XL = 860;
const SCREEN_MD = 600;
const SCREEN_SM = 320;

function useResize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenXl: width >= SCREEN_XL,
    isScreenMd: width >= SCREEN_MD,
    isScreenSm: width >= SCREEN_SM,
  };
}

export default useResize;
