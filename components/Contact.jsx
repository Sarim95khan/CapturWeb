import React from 'react'
import Hero from './Hero'

const Contact = () => {
  return (
    <div className='max-w-[1240px] mx-auto p-4 h-screen'>
      <h1 className='text-2xl font-bold text-center p-4'>Let's Work together</h1> 
      <form className='max-w-[600px] mx-auto'>
        <div className='grid grid-cols-2'>
        <input className='border shadow-lg p-3' type='text' placeholder='Name'></input>
        <input className='border shadow-lg p-3' type='text' placeholder='email'></input>
        </div>
        <input className='border shadow-lg p-3 w-full my-2' type='text' placeholder='Subject'></input>
        <textarea className='border shadow-lg p-3 w-full' cols='30' rows ='10' placeholder = 'Message'></textarea>
        <button className='border-2 shadow-lg rounded-lg p-3 w-full mt-2'>Submit</button>
      </form>

    </div>
  )
}

export default Contact
