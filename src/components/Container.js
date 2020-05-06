import React from 'react'
import { Footer, Nav } from '../components'
import { ContainerWrapper } from '../elements'

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      {children}
      <Footer />
    </ContainerWrapper>
  )
}
