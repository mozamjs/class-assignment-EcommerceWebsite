import React from 'react'
import { useCart } from '../context/CartContext';

const Cart = () => {

     const { cart, increase, decrease } = useCart();

    // total price 
    const total = cart.reduce(
        (acc,item) => acc + item.price * item.quantity, 0
    )


  return (
    <div className='container'>
        <h1>Cart</h1>
        {cart.length === 0 && <h3>your cart is empty</h3>}
        
        {cart.map((item)=>(
            <div key={item.id} className='cart-item'>

                <img src={item.thumbnail} alt={item.title} />

                <div className="cart-info">
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                </div>

                <div className="qty">
                    <button onClick={()=> decrease(item.id)}>-</button>

                    <span>{item.quantity}</span>

                    <button onClick={()=> increase(item.id)}>+</button>
                </div>

            </div>
        ))}

        {cart.length > 0 && (
            <h2 className='total'> Total: ${total}</h2>
        )}
    </div>
  )
}

export default Cart;
