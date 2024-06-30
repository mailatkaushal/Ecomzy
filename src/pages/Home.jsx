import React, { useEffect, useState } from 'react'
import Config from '../Config'
import Spinner from '../components/Spinner'
import Product from '../components/Product'

const Home = () => {
  const apiUrl = Config.apiUrl
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  const fetchProductData = async () => {
    setLoading(true)
    try {
      const res = await fetch(apiUrl)
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      console.log(error);
      setProducts([])
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchProductData()
  }, [])

  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-5rem)]'>
      {
        loading ? 
        <Spinner/> :
        (
          products.length > 0 ?
          <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 gap-y-20 gap-x-10 py-10'>
            {
              products.map(product => {
                return <Product key={product.id} product={product} />
              })
            }
          </div>:
          <div>
            No Data Found
          </div>
        )
      }
    </div>
  )
}

export default Home