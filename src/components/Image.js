import React from "react"
import { graphql,useStaticQuery } from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image"

export default function Image({name}){
    console.log(name)
    const data=useStaticQuery(
    graphql`
    query GET_IMAGE {
      icon: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    
  `)
  return <GatsbyImage image={data[name].childImageSharp.gatsbyImageData} />
}