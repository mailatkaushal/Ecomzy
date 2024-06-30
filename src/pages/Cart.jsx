import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const [totalAmount, setTotalAmount] = useState(0)
  
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => {
      return acc + curr.price
    }, 0))
  }, [cart])

  return (
    <div className='flex justify-center min-h-[calc(100vh-5rem)]'>
      {
        cart.length > 0 ?
        (
          <div className='max-w-6xl flex justify-center py-5 gap-14'>
            <div className='basis-3/5 flex flex-col'>
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>
            <div className='basis-2/5 flex flex-col justify-between gap-5 py-14'>
              <div className='flex flex-col gap-5 justify-between'>
                <div>
                  <div className='font-semibold text-xl text-green-800 uppercase'>Your Cart</div>
                  <div className='font-semibold text-5xl text-green-700 uppercase'>Summary</div>
                </div>
                <div className='text-gray-700 font-semibold text-xl'>Total Items: {cart.length}</div>
              </div>

              <div className='flex flex-col'>
                <div className='text-xl text-gray-700 font-semibold'>Total Amount: ${totalAmount}</div>
                <button className='bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl'>
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        ):
        (
          <div className='flex flex-col items-center justify-center'>
            <div className='text-gray-700 font-semibold text-xl pb-2'>Your cart is empty</div>
            <Link to='/'>
              <button className='uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider'>
                Shop Now
              </button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Cart