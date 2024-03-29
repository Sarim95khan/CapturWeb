import Link from 'next/link'
import React, { useState, useEffect} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav)
  }
  useEffect (() =>{
    const changeColor = () =>{
      if (window.scrollY >90){
        setColor('#ffffff');
        setTextColor('#000000');
      } else{
        setColor('transparent');
        setTextColor('#ffffff')
      }
    }
    window.addEventListener('scroll', changeColor);
  },[]);

  return (
    <div onClick={handleNav} style={{backgroundColor: `${color}`}} className='fixed top-0 left-0 w-full z-10 ease-in duration-300 '>
        <div className='text-white flex items-center justify-between p-4 max-w-[1240px] m-auto'>
        <Link href='/'>
        <h1 style={{color: `${textColor}`}} className='text-3xl'>S.A.K Art</h1>
        </Link>

        <ul className='hidden sm:flex items-center justify-center'>
          <li onClick={handleNav} className='p-4'>
            <Link href="/">Home</Link>
          </li>
          <li onClick={handleNav} className='p-4'>
            <Link href="/contact">Contact</Link>
          </li>
          <li onClick={handleNav} className='p-4'>
            <Link href="/work">Work</Link>
          </li>
          <li onClick={handleNav} className='p-4'>
            <Link href="/#gallery">Gallery</Link>
          </li>
        
        </ul>

        <div className='block sm:hidden z-10'>
        {nav ?  <AiOutlineClose size = {20} style={{color: `${textColor}`}} /> : <AiOutlineMenu size = {20} style={{color: `${textColor}`}} />}
        </div>
    <div className={nav ? 'sm:hidden absolute top-0 bottom-0 right-0 left-0 w-full h-screen bg-black text-center ease-in duration-300 flex items-center justify-center text-white' : 'sm:hidden absolute top-0 bottom-0 right-0 left-[-100%] w-full h-screen bg-black text-center ease-in duration-300 flex items-center justify-center text-white'}>
    <ul >
          <li className='p-3 hover:text-gray-300'>
            <Link href="/">Home</Link>
          </li>
          <li className='p-3 hover:text-gray-300'>
            <Link href="/contact">Contact</Link>
          </li>
          <li className='p-3 hover:text-gray-300'>
            <Link href="/work">Work</Link>
          </li>
          <li className='p-3 hover:text-gray-300'>
            <Link href="#">Gallery</Link>
          </li>
        </ul>
    </div>
        
        
        </div>
        </div>

  )
}

export default Navbar