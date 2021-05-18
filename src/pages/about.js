import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"


const About = ({ data }) => {
  const content = data.allMarkdownRemark.edges[0].node.html;

  return (
    <Layout>
      <Seo title="About" />
      <Link to="/">{'<'}</Link>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </Layout>
  )
}

export const query = graphql`
  query AboutQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(about.md)/" }}) {
      edges {
        node {
          html
        }
      }
    }
  }
`

export default About
