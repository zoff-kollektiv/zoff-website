import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = ({ data }) => {
  const Projects = ({ projects }) => {
    return projects.map(project => {
     return ( <>
         <h2 key={ project.caption }>{ project.caption }</h2>
         <img src={ project.image } />
       </>)
    }
    )
  }

  const Categories = () => {
    return data.allMarkdownRemark.edges.map(category => {
     return ( <>
       <h1 key={ category.node.id }>{ category.node.frontmatter.title }</h1>
       <Projects projects={ category.node.frontmatter.projects } />
       </>)
    }
    )
  }

  return (
    <Layout>
      <Seo title="Projects" />
      { <Categories /> }
      <p>
        <Link className='about-link' to="/about/">zoff</Link> <br />
      </p>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            projects {
              caption
              image
              project_url
            }
            title
          }
        }
      }
    }
  }
`

export default IndexPage
