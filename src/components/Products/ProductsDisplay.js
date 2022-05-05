import React from 'react'
import {Link} from 'gatsby';

import { StyledProducts } from '../../styles/components'

export default function Products({products}) {
  return (
<StyledProducts>
      <h2>Productos</h2>
      <section>
        {products.map(({ node }) => {
          
          return (
            <article key={node.id}>
              <img src={node.product.metadata.img} alt={node.product.name} />
              <p>{node.product.name}</p>
              <small>USD {node.price}</small>
              <Link to={`/${node.id}`}>
                Comrar ahora <span>→</span>
              </Link>
            </article>
          )
        })}
      </section>
    </StyledProducts>
  )
}