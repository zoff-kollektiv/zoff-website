import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"


const About = ({ data }) => {
  const content = data.allMarkdownRemark.edges[0].node.html;

  return (
    <Layout>
      <Seo title="About" />
      <div className="about-page">
        <Link className="back-link" to="/">{'<'}</Link>
        <div className="locale-links">
          <Link to="#de">de</Link><br />
          <Link to="#en">en</Link><br />
          <Link to="#fr">fr</Link><br />
        </div>
        <div className="content" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
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
