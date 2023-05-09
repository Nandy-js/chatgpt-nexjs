'use client'
import {signIn} from "next-auth/react";
import Image from "next/image";

export default function Login() {
  return (
    <div className="bg-[#1e293b] h-screen flex flex-col items-center justify-center text-center text-white">
        <Image
        src="/chat.png"
        width={120}
        height={120} 
        alt="logo"
        />
        <button  onClick = {() => signIn('google')} className="text-white font-bold p-2 border-1 border-white text-4xl animate-pulse">Sign up </button>


    </div>
  )
}
