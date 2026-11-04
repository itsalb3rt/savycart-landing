import { useCallback, useEffect, useState } from 'react';

const useResponsiveSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const setSizes = useCallback(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, [setWidth, setHeight]);

  useEffect(() => {
    window.addEventListener('resize', setSizes);
    // Initial measure on mount: starting from 0 and setting state here avoids
    // a hydration mismatch during static export (window is undefined at build).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSizes();
  }, [setSizes]);

  return { width, height };
};

export default useResponsiveSize;
