import { useState, useRef, useEffect } from 'react'

const PADDINGS = 110;
//NEED TO FIX LOGIC HERE

const useSliding = (elementWidth, countElements /*React children count */) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [distance, setDistance] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0)
  const [viewed, setViewed] = useState(0);

  useEffect(() => {
    const containerWidth = containerRef.current.clientWidth - PADDINGS;

    setContainerWidth(containerWidth);
    setTotalInViewport(Math.floor(containerWidth / elementWidth));
  }, [containerRef.current]);

  const handlePrev = () => {
    setViewed(viewed - 4);
    setDistance(distance + containerWidth);
  }

  const handleNext = () => {
    setViewed(viewed + 6);
    setDistance(distance - containerWidth)
  }

  const slideProps = {
    style: { transform: `translate3d(${distance}px, 0, 0)` }
  };

  const hasPrev = distance < 0;
  const hasNext = (viewed) < countElements;

  console.log(hasNext)

  return { handlePrev, handleNext, slideProps, containerRef, hasPrev, hasNext };
}

export default useSliding;