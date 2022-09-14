import React from 'react'
import Image from 'next/image'
export default function LargeCard({img,buttonText,title,description}) {
  return (
    <section className='relative py-6'>
        <div className='relative h-96 min-w-[300px]'>
            <Image src={img} layout="fill" objectFit='cover' className='rounded-2xl' />
        </div>
        <div className='absolute top-32 left-12'>
            <h3 className='text-4xl font-bold mb-3 w-64'>{title}</h3>
            <p className=' text-2xl font-semibold'>{description}</p>
            <button className='text-white font-bold bg-gray-900 px-4 py-4 mt-2 rounded-lg'>{buttonText}</button>
        </div>
    </section>
  )
}
