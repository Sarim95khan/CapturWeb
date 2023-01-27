import React from 'react'

const Hero = ({heading,message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-4 bg-cover bg-center img-cover'>

        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 h-screen z-[2] bg-black/70' />
        <div className='p-10 sm:p-5 sm:ml-[-rem] md:ml-[-30rem] xl:ml-[-35rem] space-y-2 text-white text-bold z-[3] ml-[-10rem mt-[-10rem]'>
            <h1 className='text-4xl' >{heading}</h1>
            <p className='text-2xl'>{message}</p>
             <button className='border-2 p-2 ml-2 my-2'>
            Book
            </button>
        </div>
    </div>
  )
}

export default Hero