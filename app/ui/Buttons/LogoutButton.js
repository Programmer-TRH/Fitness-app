'use client'
import {useRouter } from "next/navigation"
import { signOut } from "next-auth/react"
import { FiLogOut} from "react-icons/fi"

const LogoutButton = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut()
        router.push('/');
    }

    return (
        <div className="flex flex-row items-center gap-2">
            <button onClick={handleSignOut} className="flex flex-row "> 
            <FiLogOut className="text-2xl" /> <span>Log Out</span>
            </button>
        </div>
    );
};

export default LogoutButton; 