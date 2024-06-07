import React from 'react'
import { Container } from './Layout.styles'

const Layout = ({children}) => {
  return (
    <Container>
      Some nav
      {children}
    </Container>
    
  )
}

export default Layout

