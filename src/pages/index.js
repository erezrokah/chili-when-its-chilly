import React from 'react'
import Layout from '../components/Layout'
import ContactArea from '../components/ContactArea'
import Slideshow from '../components/Slideshow'
import Sponsors from '../components/Sponsors'
import { graphql, useStaticQuery } from 'gatsby'

function HomePage() {

  const data = useStaticQuery(graphql`
    query SlideshowImages {
      allContentfulSlideshow {
        edges {
          node {
            images {
              id
              title
              fluid { src }
            }
          }
        }
      }
    }
  `)
  const images = data.allContentfulSlideshow.edges[0].node.images

  const sponsors = [
    {
      name: 'STi Group',
      link: 'https://www.honiron.com/',
      image: 'https://imagery.zoogletools.com/u/39123/95e9a9692d341af9fb35d58b2112d166dc786622/original/sti-logo.png/!!/b%3AW1sicmVzaXplIiwyMzVdLFsibWF4Il0sWyJ3ZSJdXQ%3D%3D.png'
    },
    {
      name: 'PNP Boiler Services',
      link: 'https://www.plantnpower.com/',
      image: 'https://imagery.zoogletools.com/u/39123/830353aab8d0033d394920eafe47c845087f4035/original/pnpboilerserviceslogo.jpg/!!/b%3AW1sicmVzaXplIiwyMDAwXSxbIm1heCJdLFsid2UiXV0%3D.jpg'
    },
    {
      name: `It's Closing Time Reality`,
      link: 'https://www.itsclosingtime.com/',
      image: 'https://imagery.zoogletools.com/u/39123/a798d0bff35de35959de4badce12529072a9b1b4/original/newlogoblkbackground.png/!!/b%3AW1sicmVzaXplIiwzMDBdLFsibWF4Il0sWyJ3ZSJdXQ%3D%3D.png'
    },
    {
      name: `Kwik Kopy Business Center`,
      link: 'http://kkbcbrenham.com/',
      image: 'https://imagery.zoogletools.com/u/39123/bfda3eb8cd485a207d2493a40f54f103a119663c/original/kkbc-logo-300-dpi.jpg/!!/b%3AW1sicmVzaXplIiwxMDAwXSxbIm1heCJdLFsid2UiXV0%3D.jpg'
    }
  ]

  // TODO Recaptcha and email link
  return (
    <Layout>
      <Slideshow images={images} />
      { /* Ticket purchase */ }
      <ContactArea />
      { /* Content Group (When/Where/Why) */ }
      { /* Content Group (FAQ's) */ }
      <Sponsors sponsors={sponsors} />
      <span className="contact-us">
        Contact us at info@chiliwhenitschilly.com
      </span>
      <span id="website-by-jared">
        Website by <a href="https://jared-weide-portfolio.web.app/">Jared Weide</a>
      </span>
    </Layout>
  )
}

export default HomePage
