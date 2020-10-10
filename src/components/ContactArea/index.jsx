import React from 'react'
import Twitter from './twitter'
import Facebook from './facebook'
import './index.css'

// FIXME Retrieve from CMS
const email = "newsletter@chiliwhenitschilly.com"
const twitter = "https://twitter.com/CWIC1"
const facebook = "https://www.facebook.com/cwic00/"

function ContactArea() {
  const goTo = (url) => window.open(url)
  return (
    <div className="contact-area">
      <form className="mailing-list">
        <span className="join-our-list">Join our mailing list for the latest news!</span>
        <input className="enter-email" type="text" placeholder="Your Email Address..." />
        <input type="submit" className="send-email" value="Sign Up" title="Join our mailing list!" />
      </form>
      <button
        className="twitter social-media"
        onClick={() => goTo(twitter)}
        title="Follow us on Twitter!"
      >
        <Twitter />
      </button>
      <button
        className="facebook social-media"
        onClick={() => goTo(facebook)}
        title="Follow us on Facebook!"
      >
        <Facebook />
      </button>
    </div>
  )
}

export default ContactArea
