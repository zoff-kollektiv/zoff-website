import * as React from "react"
import { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const [selectionSchema, setSelectionSchema] = useState([])
  const [selectionStartingPoint, setSelectionStartingPoint] = useState()
  const [remainingProjects, setRemainingProjects] = useState([])
  const [displayedProjects, setDisplayedProjects] = useState([])

  useEffect(() => {
    initSelectionSchema()
  }, [])
  useEffect(() => {
    initRemainingProjects()
  }, [selectionSchema])

  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
  }

  const initSelectionSchema = () => {
    let schema = data.allMarkdownRemark.edges
      .map(category => [
        // category.node.frontmatter.orderNumber,
        category.node.frontmatter.title,
        category.node.frontmatter.title,
      ])
      .sort((a, b) => (a[0] > b[0] ? 1 : -1)) .map(category => category[1])
    setSelectionSchema(schema)

    const startingPoint = schema[getRndInteger(0, 4)]
    setSelectionStartingPoint(startingPoint)
  }

  const initRemainingProjects = () => {
    // Split up projects assigned to respective category
    let projects = {}
    let remProjects = []

    data.allMarkdownRemark.edges.forEach(category => {
      const categoryTitle = category.node.frontmatter.title
      projects[categoryTitle] = category.node.frontmatter.projects
    })

    //
    const maxSth = Math.max(...Object.values(projects).map(val => val.length))

    //
    const selectionArray = Array(maxSth).fill(selectionSchema).flat()

    // Traverse projects array following selectionSchema and startingPoint
    // and fill array of images / projects to be displayed
    selectionArray.forEach(index => {
      remProjects.push(projects[index].pop())
    })

    remProjects = remProjects.reverse().filter(Boolean)

    if (remProjects.length > 0) {
      setDisplayedProjects([remProjects.pop()]);
    }
    setRemainingProjects(remProjects);
  }

  const displayNextProject = () => {
    const newKid = remainingProjects.pop()
    setDisplayedProjects(displayedProjects => [...displayedProjects, newKid])
  }

  const Projects = () => {
    return displayedProjects.map(project => (
      <div className="image-container" onClick={displayNextProject}>
         <img src={ project.image } />
         <div className="image-cross-overlay">＋</div>
      </div>
    ))
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
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(project_categories)/" }}) {
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
