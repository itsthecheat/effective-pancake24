import React from 'react'
import { Container } from './Layout.styles'
import { Menu } from './Menu'

const Layout = ({children}) => {
  return (
    <Container>
    <Menu/>
      {children}
    </Container>
    
  )
}

export default Layout

