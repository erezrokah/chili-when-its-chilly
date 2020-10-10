import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import './index.css'

function Header() {
  const data = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div id="header">
      {data.site.siteMetadata.title}
    </div>
  )
}

export default Header
