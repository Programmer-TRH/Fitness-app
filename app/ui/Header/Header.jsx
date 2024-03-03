import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route.js';
import LogoutButton from '@/app/ui/Buttons/LogoutButton'
import ThemeToogle from '../Buttons/ThemeToogle';


export default async function Header() {
  const session = await getServerSession(authOptions)
  return (
    <header className='px-4 py-8'>
      <Navbar isBordered>
        <NavbarContent>
          <NavbarBrand>
            <Link href="/dashboard">
            FITNESSTRACKER
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify='end'> 
          <NavbarItem className='flex items-center'>
            <ThemeToogle />
          </NavbarItem>
        </NavbarContent>
        {
          session && (
            <>
            <Link href='/dashboard/new'>
              Post Exercise
            </Link>
            <LogoutButton />
            </>
          )
        }{
          !session && (
            <>
             <Link href="/login">LogIn</Link>
             <Link href="/login">SignUp</Link>
            </>
          )
        }
      </Navbar>
    </header>
  );
}
