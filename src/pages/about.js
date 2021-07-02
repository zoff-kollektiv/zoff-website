import * as React from "react"
import { useState } from "react"
import { Link, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data }) => {
  const [language, setLanguage] = useState("de")
  const [showPrivacy, setShowPrivacy] = useState(false)
  const content = data.allMarkdownRemark.edges[0].node.frontmatter.languages

  const localizedContent = () =>
    content.find(el => el.language === language)

  const privacyTitles = () => (
    { 'de': 'datenschutz', 'en': 'privacy', 'fr': 'protection des données' }[language]
  )

  const LocaleLinks = () =>
    content
      .map(l => l.language)
      .map(lang => (
        <div className="locale-link">
          <div
            onClick={() => setLanguage(lang)}
            className={language === lang ? "active" : ""}
          >
            {lang}
          </div>
        </div>
      ))

  const Privacy = () => {
    if (localizedContent() && localizedContent().privacy.length > 0) {
      return <>
        <u style={{ cursor: 'pointer' }} onClick={() => setShowPrivacy(!showPrivacy)}>{privacyTitles()}</u>
        <span style={{ fontSize: "85%", marginLeft: "7px" }}>{showPrivacy ? "▲" : "▼"}</span>
        {showPrivacy && <ReactMarkdown>{localizedContent().privacy}</ReactMarkdown>}
      </>
    } else {
      return ''
    }
  }

  return (
    <Layout>
      <Seo title="About" />
      <div className="about-page">
        <Link className="back-link" to="/">
          <img src="/back_default.svg"
            onMouseOver={e => (e.currentTarget.src = "/back_hover.svg")}
            onMouseOut={e => (e.currentTarget.src = "/back_default.svg")}
          />
        </Link>
        <div className="locale-links">
          <LocaleLinks />
        </div>

        <div className="content">
          <ReactMarkdown>{localizedContent().body}</ReactMarkdown>

          <Privacy />
        </div>
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
              privacy
            }
          }
        }
      }
    }
  }
`

export default About
