import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import logo from "../assets/Logo.png"
import { IoIosArrowDown } from "react-icons/io";


export const Header = () => {
    const [color, setColor]=useState(false);


  return (
    <div className='flex items-center justify-between  px-[16px] md:px-[64px] py-[16px]'>
        <div className='flex items-center gap-2 '>
        <CiMenuBurger className='text-[20px] md:hidden' />
        <img  src={logo} alt="logo_header" /></div>
        <ul className='sm:flex items-center justify-center gap-4 text-gray-500 mr-auto ml-[24px] hover:text-green-500  hidden'>
            <li >SOLUTIONS</li>
            <li>PLATFORM</li>
            <li className='flex items-end gap-2'>RESOURCES <IoIosArrowDown /></li>
            <li>CHANGELOG</li>
            <li>PRICING</li>
        </ul>
        <div className='flex items-center'>
            <button className='btn text-green-500 rounded-lg hidden sm:block'>Sign In</button>
            <button className='btn bg-blue-700 text-white rounded-lg'>Sign Up</button>
        </div>
    </div>
  )
}
