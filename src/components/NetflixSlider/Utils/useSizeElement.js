import { useState, useRef, useEffect } from 'react'

const useSizeElement = () => {
  const elementRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(elementRef.current.clientWidth);
    setHeight(elementRef.current.clientHeight);
  }, [elementRef.current]);

  return { width, height, elementRef };
}

export default useSizeElement;