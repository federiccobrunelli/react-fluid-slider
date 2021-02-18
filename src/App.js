import React, { Component, useState, useEffect } from 'react';
import Slider from './components/NetflixSlider/Slider'

const movies = [
  {
    id: 1,
    image: '/images/slide1.jpg',
    imageBg: '/images/slide1b.webp',
    title: '1983'
  },
  {
    id: 2,
    image: '/images/slide2.jpg',
    imageBg: '/images/slide2b.webp',
    title: 'Russian doll'
  },
  {
    id: 3,
    image: '/images/slide3.jpg',
    imageBg: '/images/slide3b.webp',
    title: 'The rain',
  },
  {
    id: 4,
    image: '/images/slide4.jpg',
    imageBg: '/images/slide4b.webp',
    title: 'Sex education'
  },
  {
    id: 5,
    image: '/images/slide5.jpg',
    imageBg: '/images/slide5b.webp',
    title: 'Elite'
  },
  {
    id: 6,
    image: '/images/slide6.jpg',
    imageBg: '/images/slide6b.webp',
    title: 'Black mirror'
  },
  {
    id: 7,
    image: '/images/slide1.jpg',
    imageBg: '/images/slide1b.webp',
    title: '1983'
  },
  {
    id: 8,
    image: '/images/slide2.jpg',
    imageBg: '/images/slide2b.webp',
    title: 'Russian doll'
  },
  {
    id: 9,
    image: '/images/slide3.jpg',
    imageBg: '/images/slide3b.webp',
    title: 'The rain',
  },
  {
    id: 10,
    image: '/images/slide4.jpg',
    imageBg: '/images/slide4b.webp',
    title: 'Sex education'
  },
  {
    id: 11,
    image: '/images/slide5.jpg',
    imageBg: '/images/slide5b.webp',
    title: 'Elite'
  },
  {
    id: 12,
    image: '/images/slide6.jpg',
    imageBg: '/images/slide6b.webp',
    title: 'Black mirror'
  }
];



function App() {

  return (
    <div className="app">
      <Slider>
        {movies.map(movie => (
          <Slider.Item movie={movie} key={movie.id}/>

          ))}
      </Slider>
    </div>
  );
}

export default App;


// - UNDERSTAND THE CODE FULLY AND HOW IT WORKS
// - LEARN NEW THINGS I SEE AROUND
// - FIX THE SCROLLING BY MAKING IT INFINITE

// - INFINITE SCROLL
// - DOTS


// FINAL: UPLOAD AS LIBRARY

// DIDN'T WORK: 
// CONSOLE.LOG(WIDTH) WHEN THE ELEM


//CONTINUE FROM UNDERSTANDING WHAT USEREF()