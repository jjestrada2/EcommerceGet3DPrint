import React from 'react'
import {StyledJumbo} from '../styles/components'
import { StaticImage } from "gatsby-plugin-image"
 

export default function Jumbo({description}) {
  return (
   <StyledJumbo>
        <div>
            <h2>Consigue la mejor impresion 3D</h2>
        <small>{description}</small>
        <StaticImage
      src="../images/icon.png"
      alt="A dinosaur"
      placeholder="blurred"
      
     
    />
        </div>
        
    </StyledJumbo> 
    
    )
}
