
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Card = ({id,title, thumbnail, price}) => {
    const navigate = useNavigate()
    const {addToCart}= useCart()

    // console.log("test")

  return (
    <div className='card'>

        <img
            src={thumbnail}
            alt={title}
            onClick={()=>navigate(`/products/${id}`)}
            style={{cursor:"pointer"}}
        />

        <div className="card-body">

            <h3
                onClick={()=> navigate(`/products/${id}`)}
                style={{cursor:"pointer"}}
            >
                {title}
            </h3>
            <p>${price}</p>

            {/* Add to cart (no navigation) */}

            <button onClick={()=> addToCart({id,title,price,thumbnail})}>
                Add to Cart
            </button>

        </div>
      
    </div>
  )
}

export default Card
