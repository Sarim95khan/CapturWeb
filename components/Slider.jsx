import React, { useState } from 'react'
import { SliderData } from './SliderData'
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'
import Image from 'next/image'

const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }    

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : 0);
    }  

    if (!Array.isArray(slides) || slides.length == 0) {
        return null; 
    }

  return (
    <div id='gallery' className='max-w-[1240[x] mx-auto'>
        <h1 className='text-2xl font-bold text-center p-4'>Gallery</h1>
        <div className='relative flex items-center justify-center'>
            {SliderData.map((slide, index) => {
                return (
                    <div key = {index} className={index === current ? 'opacity-[1] easin-in duration-1000': 'opacity-[0]'}>
                        

                       < FaArrowCircleLeft onClick={prevSlide} size = {40} className="absolute top-[50%] left-[10%] text-white/70  cursor-pointer select-none z-[2]" />
                       {index == current &&  <Image src={slide.image} 
                        width= '1440'
                        height='600'
                        alt ="Galleria"/>}
                        < FaArrowCircleRight onClick={nextSlide} size = {40} className="absolute top-[50%] right-[10%] text-white/70  cursor-pointer select-none z-[2]" />
                            </div>
                )
            })}
            </div>
        </div>
  )
}

export default Slider