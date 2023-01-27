import React from 'react'
import Image from 'next/image'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const contact = () => {
  return (
   <div>
    <Hero heading = "Contact Us" message= "Colaborate with us by submitting form"/>
    < Contact />
   </div>
  )
}

export default contact
