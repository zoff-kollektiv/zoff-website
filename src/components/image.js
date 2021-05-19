import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";

const Image = ({ name: fileName, ...props }) => {
  const { width, centered } = props;
  const styles = {
    width: width ? `${width}` : 'unset',
    margin: centered ? `0 auto` : 'unset'
  };
  const {
    allImageSharp: { images }
  } = useStaticQuery(graphql`
    {
      allImageSharp {
        images: edges {
          node {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              webpOptions: {quality: 10}
            )
            fluid {
              originalName
            }
          }
        }
      }
    }
  `);

  const image = images.find(({ node: { fluid: { originalName: name } } }) => name === fileName );

  return <GatsbyImage image={image.node.gatsbyImageData} />
};

export default Image;
