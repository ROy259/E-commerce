import React from 'react'
import { mens } from '../Dummydata'
import { Link } from 'react-router-dom'
const Men = ({handle}) => {

 
  return (
      

<div className='men-container pt-10 justify-center  bg-slate-200 flex-col sm:flex-row sm:flex-wrap flex sm:justify-around mt-1 p-1'>
      {mens.map((item) => (
        <div key={item.id} className=' h-auto shadow-sm sm:w-[260px] w-[210px] p-2 sm:block flex  '>
          <img className='h-[300px] sm:w-[250px]  w-[200px] rounded-sm shadow-md object-fill' src={item.image} alt="" />

          <div className='content ml-5 sm:ml-2 mt-3 sm:mt-1 '>
            <p className='font-semibold'>{item.brand}</p>
            <p className=' '>{item.aboutDesc}</p>
            <p className='font-medium mt-[2px] sm:flex-row'>{item.currentAmount} <span className='font-light ml-1 text-[15px] line-through'>{item.previousAmount}</span> <span className='text-green-400 text-[13px] font-semibold  ml-1 sm:flex-row'>{item.Offer}</span></p>

            <div  className='mt-2  flex-col  flex gap-2 sm:flex-row sm:gap-2'>
              <button  onClick={handle} className=' bg-yellow-500  hover:bg-yellow-400 w-[100px] rounded-lg  '>{item.cart}</button>
          <Link to='/Orders'><button className='bg-orange-400 hover:bg-orange-500 w-[100px] rounded-lg '>{item.buy}</button></Link>    
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Men
