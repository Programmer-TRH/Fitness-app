import React from 'react'
import Link from "next/link"
import { FiChevronDown } from 'react-icons/fi'

export default function Hero() {
  return (
    <div className='flex flex-col items-center justify-center max-w-unit-5xl'>
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center justify-center'>
                <FiChevronDown className='text-primary animate-bounce ' size={24} />
                <Link className='bg-primary hover:bg-orange-300 text-white font-bold py-2 px-4 rounded' href={"/login"} >
                    Login Here
                </Link>
            </div>
        </div>
    </div>
  )
}
