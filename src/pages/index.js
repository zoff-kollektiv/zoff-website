import * as React from "react"
import { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Image from "../components/image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const [selectionSchema, setSelectionSchema] = useState([])
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
        category.node.frontmatter.order,
        category.node.frontmatter.title,
      ])
      .sort((a, b) => (a[0] > b[0] ? 1 : -1))
      .map(category => category[1])
    setSelectionSchema(schema)
  }

  const initRemainingProjects = () => {
    if (selectionSchema.length > 0) {
      // Split up projects assigned to respective category
      let projects = {}
      let remProjects = []

      data.allMarkdownRemark.edges.forEach(category => {
        const categoryTitle = category.node.frontmatter.title
        projects[categoryTitle] = category.node.frontmatter.projects
      })

      // Maximum number of images within the categories
      const maxImageNo = Math.max(
        ...Object.values(projects).map(val => val.length)
      )

      // Array containing regular sequence of indices
      // Gonna be [b, c, a, b, c, a, ...]
      let selectionIndexArray = Array(maxImageNo).fill(selectionSchema).flat()
      const startingPoint = getRndInteger(0, 4)
      const firstElementsToBack = selectionIndexArray.slice(0, startingPoint)
      selectionIndexArray = selectionIndexArray.slice(
        startingPoint,
        selectionIndexArray.length
      )
      selectionIndexArray.push(...firstElementsToBack);

      // Traverse projects array following selectionSchema and startingPoint
      // and fill array of images / projects remaining with random image from category
      selectionIndexArray.forEach(index => {
        let randomIndex = getRndInteger(0, projects[index].length)
        let newItem = projects[index][randomIndex]
        remProjects.push(newItem)

        // Remove item from Array
        projects[index] = projects[index]
          .slice(0, randomIndex)
          .concat(
            projects[index].slice(randomIndex + 1, projects[index].length)
          )
      })

      // Reverse array of remaining projects and filter out undefined
      remProjects = remProjects.reverse().filter(Boolean)

      // Display first image initially as soon as something is there (async!)
      if (remProjects.length > 0) setDisplayedProjects([remProjects.pop()])

      setRemainingProjects(remProjects)
    }
  }

  const displayNextProject = () => {
    if (remainingProjects.length > 0) {
      const newProject = remainingProjects.pop()
      setDisplayedProjects(displayedProjects => [
        ...displayedProjects,
        newProject,
      ])
    }
  }

  const Projects = () => {
    return displayedProjects
      .map((project, index) => {
        const isFirst = index == displayedProjects.length - 1;
        const notLast = remainingProjects.length != 0;

        return (
          // Image container
          <div
            key={project.title}
            className="image-container"
            onClick={isFirst ? displayNextProject : undefined}
            style={{ width: `${project.scale}%` }}
          >

            {/* Image */}
            <Image
              className={isFirst && notLast ? "first-image" : ""}
              name={project.image}
            />

            {/* + Sign */}
            {isFirst && notLast ? <div className="image-cross-overlay" style={{fontSize: `${project.scale/2}vw`}}>＋</div> : ""}
            <figcaption>{project.caption}</figcaption>
          </div>
        )
      })
      .reverse()
  }

  return (
    <Layout>
      <Seo title="Projects" />
      {<Projects />}
      <p>
        <Link className="about-link" to="/about/">
          zoff
        </Link>
        <br />
      </p>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(project_categories)/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            projects {
              caption
              image
              project_url
              scale
            }
            
            title
            order
          }
        }
      }
    }
  }
`

export default IndexPage
