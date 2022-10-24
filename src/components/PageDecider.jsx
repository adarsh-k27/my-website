import React, { useContext, useState } from 'react'
import Portfolio_Context from '../context'
import { AboutPage, ContactPage, HireMePage, LandingPage, PortFolioPage, ServicePage } from '../pages'

function PageDecider ({ openNavSmallDevice, setOpen ,setSelect}) {
  const { navigation } = useContext(Portfolio_Context)

  switch (navigation) {
    case 'Home':
      return <LandingPage open={openNavSmallDevice} setOpen={setOpen} setSelect={setSelect} />

    case 'About':
      return <AboutPage />

    case 'Service':
      return <ServicePage />

    case 'Contact':
      return <ContactPage />

    case 'Portfolio' :
      return <PortFolioPage />

    case 'HireMe':
      return <HireMePage />
    default:
      return <LandingPage open={openNavSmallDevice} setOpen={setOpen} />
  }
}

export default PageDecider
