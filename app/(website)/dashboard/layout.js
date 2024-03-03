import Header from '@/app/ui/Header/Header'
import React from 'react'

export default function layout({children}) {
  return (
    <div>
        <Header />
        <main className='flex flex-col min-h-screen max-w-screen-lg mx-auto'>
        {children}
        </main>
    </div>
  )
}
