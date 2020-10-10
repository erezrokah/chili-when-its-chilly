import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'

function Layout({children, title}) {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}

export default Layout
