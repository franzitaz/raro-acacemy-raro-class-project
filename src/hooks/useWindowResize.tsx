import { useEffect, useRef, useState } from 'react';

interface UseWindowResizeTypes {
  width?: number;
  height?: number;
}
export const useWindowResize = ({ width, height }: UseWindowResizeTypes) => {
  const [size, setSize] = useState(() => {
    if (width && height) {
      return {
        width: width,
        height: height
      };
    }
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  });

  const debounceId = useRef(0);

  useEffect(() => {
    const handleResize = (event: Event) => {
      setSize({
        width: (event.target as Window)?.innerWidth,
        height: (event.target as Window)?.innerHeight
      });
    };

    const debounceHandleResize = (event: Event) => {
      clearTimeout(debounceId.current);
      debounceId.current = window.setTimeout(() => {
        handleResize(event);
      }, 250);
    };

    window.addEventListener('resize', debounceHandleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
};
