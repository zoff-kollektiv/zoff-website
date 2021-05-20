import * as React from "react"
import { useState } from "react"
import { Link, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data }) => {
  const [language, setLanguage] = useState("de")
  const content = data.allMarkdownRemark.edges[0].node.frontmatter.languages

  const localizedContent = () =>
    content.find(el => el.language === language).body

  const LocaleLinks = () =>
    content
      .map(l => l.language)
      .map(lang => (
        <>
          <Link
            to={`#${lang}`}
            onClick={() => setLanguage(lang)}
            className={language === lang ? "active" : ""}
          >
            {lang}
          </Link>
          <br />
        </>
      ))

  return (
    <Layout>
      <Seo title="About" />
      <div className="about-page">
        <Link className="back-link" to="/">
          {"<"}
        </Link>
        <div className="locale-links">
          <LocaleLinks />
        </div>
        <ReactMarkdown className="content">{localizedContent()}</ReactMarkdown>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query AboutQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(about.md)/" } }) {
      edges {
        node {
          html
          frontmatter {
            languages {
              language
              body
            }
          }
        }
      }
    }
  }
`

export default About
