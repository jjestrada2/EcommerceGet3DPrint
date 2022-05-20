import React,{useState, useContext} from 'react'
import priceFormat from '../../utils/priceFormat'
import { CartContext } from '../../context'
import{
    Tag,
    SizeButton, 
    QtyButton,
    SizeSelect,
    StyledProductDetail,
    QtySelect,
    Button
}from '../../styles/components'
import {Seo,Stars} from "../index"

export default function ProductDetail(
    {
        id,
        unit_amount,
        product: { name, metadata },
      }
) {
    const formatePrice=priceFormat(unit_amount)
    const [color,setColor]=useState(2)
    const [qty,setQty]=useState(1)
    const{addToCart}=useContext(CartContext)

    const handleSubmit=()=>{
       addToCart({price:unit_amount,sku:id,name,metadata,quantity:qty})
    }

  return (
    <StyledProductDetail>
        <Seo title={name}/>
        <img src={metadata.img} alt={name}/>
        <div>
            <Tag>Popular</Tag>
            <h2>{name}</h2>
            <b>USD{formatePrice}</b>
            
            <Stars/>
            <small>{metadata.description}</small>
            {true&&(
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
            <Button onClick={handleSubmit}>Add to Cart</Button>

        </div>
    </StyledProductDetail>
  )
}
