import React from 'react'
import Image from 'next/image'

export default function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] md:h-[500] lg:h-[600px] 2xl:h-[700px] '>
        <Image 
            src='/b2.jpg'
            layout='fill'
            objectFit='cover'
        />
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-lg font-bold'>Not sure where to Look?</p>
            <button className='text-purple-500 font-bold bg-white rounded-full px-10
                                py-4 shadow-md my-3 hover:shadow-xl active:scale-90 transition duration-150'>I'm Flexible</button>
        </div>
    </div>
  )
}
