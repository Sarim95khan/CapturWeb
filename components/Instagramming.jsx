import React from 'react'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'


const InstagrammImg = ({socialImg}) => {
  return (
    <div className='relative'>
        <Image className='w-full h-full' src={socialImg} layout= 'responsive' alt='/' />
        <div className='group flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/70'>
            <p className='text-gray-300 hidden group-hover:block'>< FaInstagram  size={30}/></p>
        </div>
    </div>
  )
}

export default InstagrammImg