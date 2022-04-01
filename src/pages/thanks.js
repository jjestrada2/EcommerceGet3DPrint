import React from 'react'
import { Seo } from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'

export default function thanks() {
  return (
    <>
    
    <Seo title="Succes Purchase" />
        <Purchase>
          <h2>Succes Purchase</h2>
          <p>we hope you enjoy your product</p>
          <p>See you later!</p>
          <span rol='img' arial-label='emoji'>💙</span>
          <Link to='/'>
              <Button>Return to Catalog</Button>
          </Link>
        </Purchase>


      
      </>
  )
}
