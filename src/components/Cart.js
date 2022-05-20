import React, { useContext, useEffect,useState } from 'react'
import { Link } from 'gatsby'
import { Button, StyledCart } from '../styles/components';
import priceFormat from '../utils/priceFormat';
import { CartContext } from '../context';
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const getStripe=()=>{
    if(!stripePromise){
        stripePromise=loadStripe("pk_test_51Ks7u2Ihy7wEHtPZWwuEhpiKdtoD3gjaFpIK1JgUnFgVywVdnCYh4lhAxwo3hBESmgWyJQMU2xwgWJLXXd63XVUR00yVLHyj6e")
    }
    return stripePromise
}

export default function Cart() {
    
    const{cart}=useContext(CartContext)
    const [total,setTotal]=useState(0)
    const item={
        price: "price_1Kv2yaIhy7wEHtPZVgby1h7I",
        quantity: 1
    }
   const checkoutOptions={
       lineItems:[item],
       mode:'payment',
       successUrl: `${window.location.origin}/success`,
       cancelUrl: `${window.location.origin}/cancel`

   };
   const redirectToCheckout=async ()=>{
    console.log("redirectToCheckout")
    const stripe=await getStripe();
    const {error}=await stripe.redirectToCheckout(checkoutOptions);
    console.log("Strpe Checkout errror",error) 

   }
    const getTotal=()=>{
        
        setTotal(
            cart.reduce((accum,current)=>accum+current.price*current.quantity,0)
        )
    }
    useEffect(()=>{
        getTotal()
    })
  return (
  <StyledCart>
      <h2>Cart</h2>
      <table>
          <tbody>
              <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
              </tr>
              {cart.map(swag=>(
                  <tr key={swag.sku}>
                      <td>
                          <img src={swag.metadata.img} alt={swag.name}/>{swag.name}
                      </td>
                      <td>USD{priceFormat(swag.price)}</td>
                      <td>{swag.quantity}</td>
                      <td>{priceFormat(swag.price*swag.quantity)}</td>
                  </tr>
              ))}
          </tbody>
      </table>
      <nav>
          <div>
              <h3>Subtotal:</h3>
              <small>USD{priceFormat(total)}</small>
         </div> 
         <div> 
              <Link to ='/'>
                <Button type='outline'>Back</Button>
              </Link>
              <Button onClick={redirectToCheckout}>Buy</Button>
          </div>
      </nav>
  </StyledCart>
  )
}
