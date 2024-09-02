import * as React from "react"
import { SEO } from "../components/seo"

const Home = () => {
  return (
    
       <p>Hello World</p>
    
      
  )
}
export default Home

export const Head = () => (
  <SEO />
)

export const query = graphql` 
{
  allSanityPost {
    edges {
      node {
        _type
        id
        publishedAt
        title
        slug {
          current
          _type
        }
        author {
          name
        }
        entry {
          _type
          children {
            text
            _type
          }
        }
      }
    }
  }
}
`