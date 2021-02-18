import React, { useState, useContext, useEffect } from 'react';
import SliderContext from './Utils/context'

import useSliding from './Utils/useSliding'
import useSizeElement from './Utils/useSizeElement'
import {SliderDiv, Container, Wrapper, SlideButton, Item, Mark } from './Style/Slider'

import IconArrowDown from './../Icons/IconArrowDown'


export default function Slider({ children, activeSlide }) {
  console.log('activeSlide:' + activeSlide)
  const [currentSlide, setCurrentSlide] = useState(activeSlide);
  const { width, height, elementRef } = useSizeElement();

  const { handlePrev, handleNext, slideProps, containerRef, hasNext, hasPrev } = useSliding(width, React.Children.count(children));

  const handleSelect = movie => {
    setCurrentSlide(movie);
  };

  const handleClose = () => {
    setCurrentSlide(null);
  };

  const contextValue = {
    onSelectSlide: handleSelect,
    onCloseSlide: handleClose,
    elementRef,
    currentSlide,
    height
  };

  return (
    <SliderContext.Provider value={contextValue}>
      <Slider.Wrapper>
        <SliderDiv
          // className={cx('slider', { 'slider--open': currentSlide != null })}
        >
          <Container ref={containerRef} className="slider__container" {...slideProps}>{children}</Container>
        </SliderDiv>
        {/* <Slider.SlideButton onClick={handlePrev} type="prev" />
        <Slider.SlideButton onClick={handleNext} type="next" /> */}
        {hasPrev && <Slider.SlideButton onClick={handlePrev} type="prev" />}
        {hasNext && <Slider.SlideButton onClick={handleNext} type="next" />}
      </Slider.Wrapper>
      {currentSlide && <Slider.Content movie={currentSlide} onClose={handleClose} />}
    </SliderContext.Provider>
  );
};

Slider.Item = function Slider_Item({ children, movie }) {
    const { onSelectSlide, currentSlide, elementRef } = useContext(SliderContext);
    const isActive = currentSlide && currentSlide.id === movie.id;
    console.log(isActive)
    return (
      <Item
        ref={elementRef}
        isActive
      >
        <img src={movie.image} alt=""/>
        {children}
        {isActive && <Slider.Mark />}
      </Item>
    );
};

Slider.Mark = function Slider_Mark(){
  return <Mark />
};

Slider.SlideButton = function Slider_SlideButton({ onClick, type }) {
  const { height } = useContext(SliderContext);
  console.log(height)
  return (
    <SlideButton type={type} height={height} onClick={onClick}>
      <span>
        <IconArrowDown />
      </span>
    </SlideButton>
  )
}

Slider.Wrapper = function Slider_Wrapper({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

// TO USE IF YOU WANT TO SHOW DETAILS FIND SCSS FILE IN 'OPTIONAL' FOLDER
// Slider.ShowDetailsButton = function Slider_ShowDetailsButton({ onClick }) {
  
//   return (
//     <button onClick={onClick} className="show-details-button">
//       <span>
//         <IconArrowDown />
//       </span>
//     </button>
//   );
// };

// Slider.Content = function Slider_Content({movie, onClose}) {
//   return (
//     <div className="content">
//       <div className="content__background">
//         <div className="content__background__shadow" />
//         <div
//           className="content__background__image"
//           style={{ 'backgroundImage': `url(${movie.imageBg})` }}
//         />
//       </div>
//       <div className="content__area">
//         <div className="content__area__container">
//           <div className="content__title">{movie.title}</div>
//           <div className="content__description">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
//             et euismod ligula. Morbi mattis pretium eros, ut mollis leo tempus
//             eget. Sed in dui ac ipsum feugiat ultricies. Phasellus vestibulum enim
//             quis quam congue, non fringilla orci placerat. Praesent sollicitudin
//           </div>
//         </div>
//         <button className="content__close" onClick={onClose}>
//           <IconCross />
//         </button>
//       </div>
//     </div>
//   );
// }