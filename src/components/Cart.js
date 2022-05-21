import React, { useContext, useEffect,useState } from 'react'
import { Link } from 'gatsby'
import { Button, StyledCart } from '../styles/components';
import priceFormat from '../utils/priceFormat';
import { CartContext } from '../context';
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const getStripe=()=>{
    if(!stripePromise){
      stripePromise=loadStripe(process.env.STRIPE_PK)
    }
    return stripePromise
}

export default function Cart() {
  
    const{cart}=useContext(CartContext)
    const [total,setTotal]=useState(0)

    const getTotal=()=>{      
      setTotal(
          cart.reduce((accum,current)=>accum+current.price*current.quantity,0)
      )
      console.log(cart)
  }
    useEffect(()=>{
      getTotal()
      
    })
    
    const item=cart.map(({ sku, quantity }) => ({ price : sku,quantity: quantity }))

   const checkoutOptions={
       lineItems:item,
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
   /*
    const getTotal=()=>{
        
        setTotal(
            cart.reduce((accum,current)=>accum+current.price*current.quantity,0)
        )
    }
    useEffect(()=>{
        getTotal()
    })
    const [stripe,setStripe]=useState()
    
   
    useEffect(() => {
      setStripe(window.Stripe(process.env.STRIPE_PK))
      getTotal()
    }, [])

    const handleBuy = async event => {
      event.preventDefault()
      let item = cart.map(({ id, quantity }) => ({
        price: id,
        quantity: quantity,
      }))
      console.log(item)
      const { error } = await stripe.redirectToCheckout({
        lineItems: item,
        mode: "payment",
        successUrl: process.env.SUCCESS_REDIRECT,
        cancelUrl: process.env.CANCEL_REDIRECT,
      })
      if (error) {
        throw error
      }
    }*/

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



