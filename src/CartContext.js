import React ,{createContext, useContext, useState} from 'react'

const CartContext = createContext();

export function useCart(){
    return useContext(CartContext);
}

export function CartProvider({children}){
    const [cart,setCart] = useState([]);

    const addToCart = (products)=>{
        setCart((preveCart)=> [...preveCart,products])
    }
    const removeFromCart = (indexToRemove) => {
        setCart((preveCart)=> preveCart.filter((_,index)=> index !== indexToRemove))
    }
    return (
        <CartContext.Provider value={{ cart , addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
    
}