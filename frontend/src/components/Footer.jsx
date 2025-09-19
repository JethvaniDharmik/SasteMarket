import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
        {/* ------- Left Section ------- */}
        <div>
    <img className='mb-50 w-20' src={assets.logo} alt="" />
    <p className='w-full md:w-2/3 text-gray-600 leading-6'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, itaque veritatis labore vero, aut error accusamus soluta deleniti reiciendis sapiente, aspernatur dicta distinctio dignissimos sit adipisci atque quasi repellat omnis.</p>
        </div>
        {/* ------- Center Section ------- */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600 '>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy policy</li>
            </ul>  
        </div>
        {/* ------- Right Section ------- */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600 ' >
                <li>+91-81285-50710</li>
                <li>sastamarket4@gmail.com</li>
            </ul>
        </div>
      </div>
      {/* ----- CopyRight Section ----- */}
      <div >
        <hr />
        <p className='py-5 text-center text-sm'>Copyright 2025@ SastaMarket - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
