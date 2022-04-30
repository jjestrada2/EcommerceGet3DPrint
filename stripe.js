import { loadStripe } from "@stripe/stripe-js"

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51Ks7u2Ihy7wEHtPZWwuEhpiKdtoD3gjaFpIK1JgUnFgVywVdnCYh4lhAxwo3hBESmgWyJQMU2xwgWJLXXd63XVUR00yVLHyj6e")
  }
  return stripePromise
}