import React, { Fragment } from 'react'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default HomePage