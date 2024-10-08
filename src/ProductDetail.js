import React from 'react'
import Nav from './Nav'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useCart } from './CartContext'

function ProductDetail() {
    const { id } = useParams(); 

    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const {addToCart} = useCart();
    useEffect(()=>{
        axios 
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
          setProducts(response.data);
          setLoading(false);
        }
        )
        .catch((error)=>{
            setError(error.message);
            setLoading(false);
        })
  
      },[id]);
      
      if(loading){
        return <p>Loading Products ...</p>
      }
      if(error){
        return <p>Error Fetching Products: {error}</p>
      }
  
  return products ? (
    (
        <div>
             <Nav />
             <h4>{products.title}</h4>
            <img src={products.image} width="200" />
            <p>{products.price}</p>
            <p>{products.description}</p>
            <button onClick={()=> addToCart(products)}>Add to CART</button>
          </div>
      )
  ) : (
    
    <div>
         <Nav />
         <p> Product not found</p>
    </div>
    
  )
}

export default ProductDetail