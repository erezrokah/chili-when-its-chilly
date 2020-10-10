import React, { useState } from 'react'
import './index.css'

function Slideshow({images}) {

  const [slideIndex, setSlideIndex] = useState(0)
  const setIndex = (n) => {
    if ( n >= images.length ) { n = 0 }
    else if ( n < 0 ) { n = images.length -1 }
    setSlideIndex(n)
  }

  return (
    <div className="slideshow">
      <button className="prev" onClick={() => setIndex(slideIndex - 1)}>&#10094;</button>
      <button className="next" onClick={() => setIndex(slideIndex + 1)}>&#10095;</button>
      {images.map((image, i) => {
        // FIXME Low Res Images
        return (
          <img
            className={(slideIndex === i) ? 'active' : ''}
            src={image.fluid.src}
            alt={image.title}
          />
        )
      })}
      <div className="dots">
        {images.map((_, i) => (
          <span
            className={`dot ${(slideIndex === i) ? 'active' : ''}`}
            onClick={() => setSlideIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default Slideshow
