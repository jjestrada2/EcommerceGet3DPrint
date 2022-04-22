import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { render } from "react-dom"

export default  Image = ({ name, alt }) => {
  return(
  <StaticQuery(
    query {
  
  render(
    <GatsbyImage image={getImage(data[name].childImageSharp)} alt={alt ?? ""} />
  )
/>
