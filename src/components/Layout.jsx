import React, { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'

function Layout({children, title}) {
  let [scrollPos, setScrollPos] = useState(0)

  useScrollPosition(({ prevPos, currPos }) => {
    setScrollPos(currPos.y)
    // console.log(prevPos, currPos)
  })

  return (
    <div id="app" scroll={scrollPos}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
