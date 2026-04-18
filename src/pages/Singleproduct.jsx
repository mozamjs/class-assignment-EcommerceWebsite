import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useCart } from '../context/CartContext'

const Singleproduct = () => {
  const { id } = useParams()
  const [loading, error, data] = useFetch(`https://dummyjson.com/products/${id}`)

  const{addToCart}= useCart()


  return (
    <div className="container">
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error occurred...</h1>}

      {data && (
        <div className="single-product">
          <img src={data.thumbnail} alt={data.title} />

          <div className="details">
            <h1>{data.title}</h1>
            <p className="price">${data.price}</p>
            <p>{data.description}</p>

            <button onClick={()=>addToCart(data)}>Add To Cart</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Singleproduct