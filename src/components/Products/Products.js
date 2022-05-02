import React from 'react'

import formatprice from '../../utils/priceFormat'
import { StyledProducts } from '../../styles/components'
export default function Products({products}) {
  return (
    <StyledProducts>
      <h2>Products</h2>
      <section>
        {products.map(({node})=>{
          const price = formatprice(node.price)
          return(
            <article key={node.id}>

            </article>
          )
        })}
      </section>
    </StyledProducts>
  )
}
