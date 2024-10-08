import React from 'react'
import { useCart } from './CartContext'
import Nav from './Nav';
function Cartpage() {

    const {cart , removeFromCart} = useCart();
    const totalPrice = cart.reduce((total,product)=> total + product.price, 0);
  return (
    <div>
        <Nav />
        Your cart
        {cart.length === 0 ? (<p> cart is empty</p>) : (
            
            <ul>
                {cart.map((product,index)=>(
                    <li key={index}>
                        
                        <img src={product.image} alt={product.title} width="100" /> -   {product.title} - {product.price}
                        <button onClick={()=> removeFromCart(index)}>Remove</button>
                    </li>
                ))}
                <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            </ul>
        ) } 

    </div>
  )
}

export default Cartpage