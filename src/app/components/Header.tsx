import React from 'react'
import Link from"next/link"
import { RiFileSearchFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className='flex justify-evenly items-center  w[1177px] h-[40px] py-10'>
        <h1>Hekto</h1>
        <ul className='flex gap-4 px-32'>
            <li><Link href='/home'>Home</Link></li>
            <li><Link href='/blog'>Blog</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
            <li><Link href='/page'>Pages</Link></li>
            <li><Link href='/shop'>Shop</Link></li>
        </ul>
        <div className='relative'>
            <input type="text" className='pl-10 py-1 text-black bg-white-200 full focus:outline-none focus:ring-2 focus:ring-blue-500 w-[317px] h-[35px] border border-black'
            placeholder="Search for Products..." />
            < RiFileSearchFill className="absolute right-0 top-1/2 transform -translate-y-1/2 h-10 w-10 text-pink-500  " />
        </div>
      
    </div>
  )
}

export default Header