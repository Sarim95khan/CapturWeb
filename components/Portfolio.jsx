import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
  return (
  <div className='max-w-[1240px] mx-auto py-16'>
    <h1 className='text-center font-bold text-2xl p-4'>My Art</h1>
    <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
      <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
        <Image src='/ig-img-1.jpeg' width='677' height='451' layout='responsive'/>
      </div>
      <div className='w-full h-full'>
        <Image src='https://images.unsplash.com/photo-1621791554700-35b52803f596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' width='215' height='217' layout='responsive' objectFit='cover'  />
      </div>
      <div className='w-full h-full'>
        <Image src='https://images.unsplash.com/photo-1535868118629-f37bcd69ff59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80' width='215' height='217' layout='responsive' objectFit='cover' />
      </div>
      <div className='w-full h-full'>
        <Image src='https://images.unsplash.com/photo-1611496855431-6501b335c67f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' width='215' height='217' layout='responsive' objectFit='cover'/>
      </div>
      <div className='w-full h-full'>
        <Image src='https://images.unsplash.com/photo-1515463138280-67d1dcbf317f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80' width='215' height='217' layout='responsive' objectFit='cover'/>
      </div>
    </div>
  </div>
  )
}

export default Portfolio