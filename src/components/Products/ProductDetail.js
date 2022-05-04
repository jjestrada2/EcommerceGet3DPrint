import React from 'react'
import priceFormat from '../../utils/priceFormat'
import{
    Tag,
    SizeButton, 
    QtyButton,
    SizeSelect,
    Button,
    StyledProductDetail
}from '../../styles/components'
import {Seo} from './'

export default function ProductDetail({price,sku:id,name,metadata}) {
  return (
    <StyledProductDetail>
        <Seo title={name}/>
        <img src={metadata.img} alt={name}/>
        <div>
            <Tag>Popular</Tag>
            <h2>{name}</h2>
            <b>USD</b>
            {metadata.color&&(
                <SizeSelect select={}>
                    <SizeButton>Red</SizeButton>
                    <SizeButton>Blue</SizeButton>
                    <SizeButton>White</SizeButton>
                </SizeSelect>
            )}
        </div>
    </StyledProductDetail>
  )
}
