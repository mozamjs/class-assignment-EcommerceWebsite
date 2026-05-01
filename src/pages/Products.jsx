import React from 'react'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'

const Products = () => {
  const [loading, error, data] = useFetch('https://dummyjson.com/products')

  const navigate = useNavigate()
  // console.log(data)

  return (
    <div className='container'>


      {loading && <h1>Loading...</h1>}
      {error && <h1>Error occured...</h1>}


      <div className="all-products">
        {data && data.products.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              thumbnail={item.thumbnail}
              price={item.price}
            />
          )
        })}
      </div>

    </div>
  )

}

export default Products
