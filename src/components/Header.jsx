import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='flex justify-between items-center  bg-transparent'>
      <div>
        <span className='font-serif text-3xl font-bold text-red-500'>Gro</span>
        <span className='font-serif text-3xl font-bold text-white'>More</span>
      </div>
      

      <div className='flex gap-12'>
        <h1 className='font-serif text-xl text-white cursor-pointer'><Link to={'/home'}>Home</Link></h1>
        <h1 className='font-serif text-xl text-white'><Link to={'/Tradeview'}>TradeView</Link></h1>
        <h1 className='font-serif text-xl text-white'><Link>News</Link></h1>
        <h1 className='font-serif text-xl text-white'><Link to={'/Course'}>Courses</Link></h1>
        <h1 className='font-serif text-xl text-white'><Link>About</Link></h1>
      </div>


    </div>


  )
}

export default Header
