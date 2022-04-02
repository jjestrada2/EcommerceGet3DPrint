/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Content, Footer } from "../styles/components.js"


import Header from "./header.js"
import "./layout.css"

const Layout=({children})=>(
 
    <>
      <Header/>
        <Content>
        <main>{children}</main>
          <Footer>
          © With 🤍 by 
          <a href="https://www.juanjoseestrada.com">Juan Jose Estrada</a>
          </Footer>
        </Content>
     
    </>
  )


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
