import React from 'react'
import Nav from './Nav'
import {Link} from "react-router-dom";
import axios from 'axios'

import { useState, useEffect } from 'react'

function Product() {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
      axios 
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      }
      )
      .catch((error)=>{
          setError(error.message);
          setLoading(false);
      })

    },[]);
    if(loading){
      return <p>Loading Products ...</p>
    }
    if(error){
      return <p>Error Fetching Products: {error}</p>
    }

// console.log(products)
  return (
    <div>
        <Nav />
        Product list
        <ul>
          { products.map((product) => (
            <div>
            <li key={product.key}>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <img src={product.image} alt={product.title} width="100" />
            </li>
            <Link className="btn btn-info" to={`/product/${product.id}`} > Info </Link>
            {/* <button type="button" c>Info</button> */}
            </div>
          ))
          }
        </ul>
        {/* {products} */}
        </div>
  )
}

export default Product