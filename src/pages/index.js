import * as React from "react"
import { Link, graphql } from "gatsby"
import{Jumbo} from "../components/index"
import {Seo} from "../components/index"

export const query=graphql`
query GET_DESCRIPTION {
  allSite {
    edges{
				node{
          siteMetadata{
						description
      	    }
          
    	    }
  	  }
    
	}
}` 

const IndexPage = ({data}) => (
  <>
    <Seo title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description}/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/thanks/">Go to page 2</Link> <br />

  </>
)


export default IndexPage
