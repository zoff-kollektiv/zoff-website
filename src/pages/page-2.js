import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"


const About = () => (
  <Layout>
    <Seo title="About" />
    <h1>Hi from the about page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
