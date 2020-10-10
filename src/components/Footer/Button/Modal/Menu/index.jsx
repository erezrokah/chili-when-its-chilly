import React from 'react'
import { navigate } from 'gatsby'
import './index.css'
import LinkIcon from './LinkIcon'

// FIXME Retrieve from CMS
const options = [
  {
    title: 'Home Page',
    link: '/'
  },
  {
    title: 'Shop / Tickets',
    link: '/shop'
  },
  {
    title: `Cook Off's`,
    link: '/cook-offs'
  },
  {
    title: 'Live Music',
    link: '/music'
  },
  {
    title: 'Videos',
    link: '/videos'
  },
  {
    title: 'Lodging',
    url: 'https://lonestarjellystone.com/lodging/'
  }
]

function Menu(){
  const goTo = (option) => {
    if (option.link) {
      navigate(option.link)
    }
    else if (option.url) {
      window.open(option.url)
    }
  }
  return (
    <>
      {
        options.map(option => (
          <button className="menu-link" onClick={() => goTo(option)}>
            {option.title}
            {option.url && <LinkIcon />}
          </button>
        )) 
      }
    </>
  )
}

export default Menu
