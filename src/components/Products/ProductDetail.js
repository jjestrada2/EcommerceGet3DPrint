import React,{useState} from 'react'
import priceFormat from '../../utils/priceFormat'
import{
    Tag,
    SizeButton, 
    QtyButton,
    SizeSelect,
    StyledProductDetail,
    QtySelect
}from '../../styles/components'
import {Seo} from "../index"

export default function ProductDetail(
    {
        id,
        unit_mount,
        product: { name, metadata },
      }
) {
    const formatePrice=priceFormat(unit_mount)
    const [color,setColor]=useState(2)
    const [qty,setQty]=useState(1)
  return (
    <StyledProductDetail>
        <Seo title={name}/>
        <img src={metadata.img} alt={name}/>
        <div>
            <Tag>Popular</Tag>
            <h2>{name}</h2>
            <b>USD{formatePrice}</b>
            {metadata.color&&(
                <SizeSelect select={color}>
                    <SizeButton onClick={()=>setColor(1)}>Red</SizeButton>
                    <SizeButton onClick={()=>setColor(2)}>Blue</SizeButton>
                    <SizeButton onClick={()=>setColor(3)}>Green</SizeButton>
                </SizeSelect>
            )}
            <p>Quantity :</p>
            <QtySelect>
                <QtyButton onClick={()=>(qty > 1 ? setQty(qty-1): null)}>-</QtyButton>
                <input type= 'text' disabled value={qty}/>
                <QtyButton onClick={()=>setQty(qty+1)}>+</QtyButton>
            </QtySelect>

        </div>
    </StyledProductDetail>
  )
}
