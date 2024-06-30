import React from 'react'
import { FcDeleteDatabase } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/cartSlice'
import { toast } from 'react-hot-toast'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  const removeFromCart = () => {
    dispatch(remove(item.id))
    toast.error('Item removed from Cart')
  }

  return (
    <div className='flex items-center justify-between p-5'>
      <div className='flex gap-5 items-center'>
        <div className='w-[30%]'>
          <img src={item.image} className='object-cover' alt="" />
        </div>
        <div className='md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]'>
          <div className='text-xl text-slate-700 font-semibold'>
            {item.title}
          </div>
          <div className='text-base text-slate-700 font-medium'>
            {item.description}
          </div>
          <div className='flex items-center justify-between'>
            <div className='font-bold text-lg text-green-600'>
              {item.price}
            </div>
            <div
              onClick={removeFromCart}
              className='text-red-800 bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3'>
              <FcDeleteDatabase />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem