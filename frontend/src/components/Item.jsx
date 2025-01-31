import React, { useContext, useState } from 'react'
import { FaMinus, FaPlus, FaUpRightAndDownLeftFromCenter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Item = ({ product }) => {

    const { cartItems, addToCart, removeFromCart, url} = useContext(ShopContext)
    
  return (
    <div className='shadow-sm'>
      <div className='relative group'>
        <img src={url+"/images/"+product.image} alt="" className='rounded-tl-2xl rounded-tr-2xl'/>
        <div className='absolute right-3 bottom-3 flexCenter gap-x-2'>
            <Link to={`/product/${product._id}`} className='bg-white h-8 w-8 p-2 
            rounded-full shadow-inner cursor-pointer transition-all 
            opacity-0 group-hover:opacity-100  duration-500'>
            <FaUpRightAndDownLeftFromCenter />
            </Link>
            {!cartItems[product._id]? (
                <FaPlus onClick={()=> addToCart(product._id)}
                className='bg-white h-8 w-8 p-2 rounded-full shadow-inner cursor-pointer'/>) : (
                    <div className='rounded-full flexCenter bg-white gap-2 h-8'>
                        <FaMinus onClick={()=> removeFromCart(product._id)}
                        className='rounded-full bg-primary h-6 w-6 p-1 ml-1 cursor-pointer'/>
                        <p>{cartItems[product._id]}</p>
                        <FaPlus onClick={()=> addToCart(product._id)}
                        className='rounded-full bg-secondary h-6 w-6 p-1 mr-1 cursor-pointer'/>
                    </div>
                )
            }
        </div>
      </div>
      <div className='p-3'>
        <div className='flexBetween'>
            <h5 className='text-[16px] font-bold text-gray-900/50'>{product.category}</h5>
            <div className='text-secondary'>${product.price}</div>
        </div>
        <h4 className='medium-18 mb-1 line-clamp-1'>{product.name}</h4>
        <p className='line-clamp-2'>{product.description}</p>
      </div>
    </div>
  )
}

export default Item
