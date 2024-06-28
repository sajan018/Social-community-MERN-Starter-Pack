import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
function Banner() {
  return (
    <div className='p-2 bg-white-400 
    rounded-xl shadow-sm flex items-center
    bg-blue-100
     border gap-5'>
        <Image src='/social-panda-1.png' width={200} height={200} alt='panda'/>
        <div>
        <h2 className='font-bold text-[29px] '>WELCOME TO SOCIAL PANDA</h2>
        <h2 className=''>Join Community, Create and Share your thought</h2>
        <Link href='/sign-up'>
        <button className="mt-3 p-3 text-white rounded-lg bg-blue-500">Get Started</button>
        </Link>
        </div>
        
    </div>
  )
}

export default Banner