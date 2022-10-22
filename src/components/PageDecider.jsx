import React, { useContext, useState } from 'react'
import Portfolio_Context from '../context'
import { AboutPage, ContactPage, LandingPage, ServicePage } from '../pages'

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
    default:
      return <LandingPage open={openNavSmallDevice} setOpen={setOpen} />
  }
}

export default PageDecider
