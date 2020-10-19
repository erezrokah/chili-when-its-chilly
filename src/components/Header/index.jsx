import React from 'react'
// import { graphql, useStaticQuery } from 'gatsby'
import './index.css'
import './animations.css'
import Logo from './logo'

function Header() {
  // const data = useStaticQuery(graphql`
  //   query SiteTitle {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  return (
    <div id="header">
      <div className="main-display">
        <Logo />
        (Guitar here)
      </div>
    </div>
  )
}

export default Header
