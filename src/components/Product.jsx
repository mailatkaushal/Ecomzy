import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/slices/cartSlice'
import { toast } from 'react-hot-toast'

const Product = ({ product }) => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(product))
    toast.success('Item added to Cart')
  }

  const removeFromCart = () => {
    dispatch(remove(product.id))
    toast.error('Item added to Cart')
  }
  
  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition duration-300 ease-in gap-3 p-4 rounded-xl'>
      <div className='text-gray-700 font-semibold text-lg truncate w-40'>
        {product.title}
      </div>
      <div className='text-gray-400 font-normal text-[10px] text-left'>
        {product.description.split(" ").slice(0,10).join(" ") + "..."}
      </div>
      <div className='h-[180px]'>
        <img src={product.image} className='h-full w-full' />
      </div>
      <div className='flex justify-between gap-12 items-center pt-5'>
        <div className='text-green-600 font-semibold'>
          ${product.price}
        </div>
        {
          cart.some(p => p.id === product.id) ?
          <button 
            onClick={removeFromCart}
            className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'>
            Remove Item
          </button> :
          <div 
            onClick={addToCart}
            className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'>
            Add to Cart
          </div>
        }
      </div>
    </div>
  )
}

export default Product