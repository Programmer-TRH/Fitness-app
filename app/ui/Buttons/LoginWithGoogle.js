'use client'
import React from 'react'
import {signIn} from "next-auth/react"
import {FaGoogle} from "react-icons/fa"

export default function LoginWithGoogle() {
  return (
    <button onClick={()=> signIn('google')} className="text-black py-2 rounded flex items-center gap-2" >
        <FaGoogle className='text-primary'/>
        <span className='text-primary'> SignIn With Google</span>
    </button>
  )
}
