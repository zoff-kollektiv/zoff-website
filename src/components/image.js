import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';

const OptimizedImage = ({ name: fileName, ...props }) => {

  const { allImageSharp: { images } } = useStaticQuery(graphql`
    {
      allImageSharp {
        images: edges {
          node {
            fluid(quality: 95, traceSVG: {}) {
              ...GatsbyImageSharpFluid_withWebp
              originalName
            }
          }
        }
      }
    }
  `);

  const image = images.find(({ node: { fluid: { originalName: name } } }) => (
    name === fileName
  ));

  return <Img {...image.node} {...props} />;
};

const Image = ({ ...props }) => {
  // Remote url: render ordinary img element with remote url src
  if (props.name.includes('//')) {
    return <img src={props.name} {...props} />

  // Uploaded gif: require file and render with ordinary img element
  } else if (props.name.includes('.gif')) {
    const img = require(`../images/${props.name}`).default;
    return <img src={img} {...props} />

  // Uploaded jpg or png: Render with gatsby image plugin
  } else {
    return <OptimizedImage {...props} />
  }
};

export default Image;

// The code above uses the deprecated gatsby-image instead of gatsby-image-plugin.
// This is, because it renders the placeholder faster, resulting in a much better UX
// when images are loaded after click. Nevertheless, it could be replaced by:

//
// export default Image;
//
// import { useStaticQuery, graphql } from 'gatsby';
// import React from 'react';
// import { GatsbyImage } from "gatsby-plugin-image";
//
// const Image = ({ name: fileName, ...props }) => {
//
//   const { allImageSharp: { images } } = useStaticQuery(graphql`
//     {
//       allImageSharp {
//         images: edges {
//           node {
//             gatsbyImageData(
//               layout: CONSTRAINED
//               placeholder: BLURRED
//               webpOptions: {quality: 95}
//             )
//             fluid {
//               originalName
//             }
//           }
//         }
//       }
//     }
//   `);
//
//   const image = images.find(({ node: { fluid: { originalName: name } } }) => (
//     name === fileName
//   ));
//
//   return <GatsbyImage image={image.node.gatsbyImageData} {...props} />
// };
//
