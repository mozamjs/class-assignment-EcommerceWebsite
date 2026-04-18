import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {

    const {cart} = useCart()
    //total items in cart
    const totalItems = cart.reduce(
        (total, item)=> total + item.quantity,0
    )

  return (
    <nav className="navbar">
      <h2 className="logo">MyShop</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">cart({totalItems})</Link>
      </div>
    </nav>
  )
}

export default Navbar