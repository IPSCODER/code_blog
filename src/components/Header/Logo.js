import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import profileImg from "@/public/profile-img.png"

const Logo = () => {
  return (
    <Link href="/" className='flex items-center text-dark dark:text-light' >
        <div className='w-12 md:16 rounded-full overflow-hidden border border-solid border-dark dark:border-light mr-2 md:mr-4' >
            <Image src={profileImg} alt='codebucks' className='w-full h-auto rounded-full' />
        </div>
        <span className='font-bold dark:font-semibold text-lg md:text-xl' >Codebucks</span>
    </Link>
  )
}

export default Logo