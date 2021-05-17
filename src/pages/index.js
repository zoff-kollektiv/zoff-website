import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Projects" />
    { console.log(data) }    
    <p>
      <Link to="/about/">Go to about</Link> <br />
    </p>
  </Layout>
)

export const query = graphql`
  query Projects {
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
          }
        }
      }
    }
  }
`

export default IndexPage
