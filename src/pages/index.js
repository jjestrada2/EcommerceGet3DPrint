import * as React from "react"
import { Link, graphql } from "gatsby"
import{Jumbo} from "../components/index"
import {Seo} from "../components/index"


export const query=graphql`
query GET_DATA {
  allSite {
    edges{
				node{
          siteMetadata{
						description
      	    }
          
    	    }
  	  }
    
	}
  
  allStripePrice(
    filter: { active: { eq: true } }
    sort: { fields: [unit_amount] }
  ) {
    edges {
      node {
        id
        active
        currency
        unit_amount
        product {
          id
          name
          metadata{
            img
            description
          }
          
        }
      }
    }
  }
}` 

const IndexPage = ({data}) => {
  console.log(data)
  return(
  <>
    <Seo title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description}/>
    <Link to="/thanks/">Go to page 2</Link> <br />

  </>
)}


export default IndexPage
