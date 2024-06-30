import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const cart = useSelector(state => state.cart)

  return (
    <div className='flex justify-center bg-slate-900 px-5'>
      <nav className='flex justify-between items-center h-20 w-full max-w-6xl '>
        <NavLink to='/'>
          <img src="../logo.png" alt="logo" className='h-14' />
        </NavLink>

        <div className='flex items-center font-medium text-slate-100 gap-x-6'>
          <NavLink to='/'>
            <div>Home</div>
          </NavLink>

          <NavLink to='/cart'>
            <div className='relative'>
              <FaShoppingCart className='text-2xl' />
              {
                cart.length > 0 && 
                <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                justify-center items-center animate-bounce rounded-full text-white'>
                  {cart.length}
                </span>
              }
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar