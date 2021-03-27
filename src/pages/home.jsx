import React from 'react'
import { FaqsContainer } from '../containers/faqs'
import { FooterContainer } from '../containers/footer'
import JumbotronContainer from '../containers/jumbotronContainer'

const Home = () => {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}

export default Home
