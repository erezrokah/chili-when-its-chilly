import React from 'react'
import './index.css'
import Burnout from './brush-one'

function Section({children, isFirst, isLast}) {
  return (
    <div className={`section ${isFirst ? 'first' : ''}`}>
      <div className="brush-stroke before">
        <Burnout />
        <Burnout />
        <Burnout />
      </div>
      <div className="content">
        {children}
      </div>
      {!isLast &&
        <div className="brush-stroke after">
          <Burnout />
          <Burnout />
        </div>
      }
    </div>
  )
}

export default Section
