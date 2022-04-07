import React from 'react'
import {StyledJumbo} from '../styles/components'

export default function Jumbo({description}) {
  return (
   <StyledJumbo>
        <div>
            <h2>Consigue la mejor impresion 3D</h2>
        </div>
        <small>{description}</small>
    </StyledJumbo> 
    
    )
}
