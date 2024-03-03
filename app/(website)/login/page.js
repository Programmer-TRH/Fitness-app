"use client"
import LoginWithGoogle from '@/app/ui/Buttons/LoginWithGoogle'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'

export default function LoginPage() {
  const router = useRouter()
  const {data: session, status} = useSession()

  useEffect(()=> {
    if(status === "authenticated"){
      router.push("/dashboard")
    }
  },[status])

  return (
    <div className='h-full flex flex-col justify-center items-center pt-4'>
      <LoginWithGoogle />
    </div>
  )
}
