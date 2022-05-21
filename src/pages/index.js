import * as React from "react"
import { graphql } from "gatsby"
import{Jumbo} from "../components/index"
import {Seo} from "../components/index"
import { Products } from "../components/index"
import '@stripe/stripe-js';

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
    <Products products={data.allStripePrice.edges}/>
   

  </>
)}


export default IndexPage
