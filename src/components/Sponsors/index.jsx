import React, { useState } from 'react'
import './index.css'

function Sponsors({sponsors}) {

  // FIXME Determine width dynamically
  const numOfDisplayed = 3
  const [slideIndex, setSlideIndex] = useState(0)
  const setIndex = (n) => {
    if ( n >= sponsors.length ) { n = 0 }
    else if ( n < 0 ) { n = sponsors.length -1 }
    setSlideIndex(n)
  }

  const isActive = (n) => (n >= slideIndex && n <= slideIndex + numOfDisplayed - 1)
  const isAtEnd = (n) => {
    const distanceOut = slideIndex + numOfDisplayed
    const spaceAtEnd = distanceOut - sponsors.length
    return (n < spaceAtEnd)
  }

  return (
    <div className="sponsors">
      <button className="prev-sponsor" onClick={() => setIndex(slideIndex - 1)}>&#10094;</button>
      <button className="next-sponsor" onClick={() => setIndex(slideIndex + 1)}>&#10095;</button>
      {sponsors.map((sponsor, i) => {
        return (
          <img
            key={sponsor.name}
            className={`${isActive(i) ? 'active' : ''} ${isAtEnd(i) ? 'active end' : ''}`}
            src={sponsor.image}
            alt={`Visit our sponsor, ${sponsor.name}`}
          />
        )
      })}
      <div className="learn-how-sponsor">
        Learn how to become a sponsor!
      </div>
    </div>
  )
}

export default Sponsors
