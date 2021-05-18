import * as React from "react"
import { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const Images = ({ data }) => {

  const Images = () => {
    let images = []
    data.allMarkdownRemark.edges.forEach(category => {
      category.node.frontmatter.projects.forEach(project => {
        images.push(<img src={project.image} />)
      })
    })
    return images
  }

  return (
    <Images />
  )
}

export const query = graphql`
  query Images {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(project_categories)/" } }
    ) {
      edges {
        node {
          frontmatter {
            projects {
              image
            }
          }
        }
      }
    }
  }
`

export default Images
