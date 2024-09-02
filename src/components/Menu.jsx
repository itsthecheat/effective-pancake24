import * as React from "react"
import { Link } from "gatsby"

export const Menu = () => {
  return (
    <>
      <p>Menu:</p>
      <ul><li><Link to="/">Home</Link></li></ul>
      <ul><li><Link to="/about">About</Link></li></ul>
      <ul><li><Link to="/blog">Blog</Link></li></ul>       
    </>
   
  )
}


