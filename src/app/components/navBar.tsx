'use client';

import Link from "next/link";
import { useState } from "react";
import { useAuthStore } from "../stores/authStore";

export const NavBar = () => {
  const [ findItem, setFindItem] = useState<string>("")
const { user }= useAuthStore()
  
  return (
    <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-100'>
      <Link href='/' className="uppercase font-bold text-md h-12 flex items-center">
        Street wear
      </Link>
      <div className="flex items-center w-80 ">
       
        <input
         type="text" 
         className="rounded-md w-80 text-black "
          placeholder="  what is your desire today?"
          value={findItem}
          onChange={(e) => setFindItem(e.target.value)}
           />
        <button 
        className="rounded-md text-white text-lg text-center w-12 flex items-center justify-center"
        >🔎</button>
      </div>
      <div className="flex gap-4">
        {user ? (
          <div className="flex gap-4 items-center justify-evenly">
          <Link href='/newProduct' className="uppercase font-bold text-sm h-12 flex items-center">New Product</Link>
            <span className="uppercase text-sm h-12 flex items-center">
            Olá, {user.name.split(" ")[0]}
          </span>
          <Link href='/logout' className="uppercase  text-sm h-12 flex items-center">
          Logout
          </Link>
          <Link href='/cart'>
            🛒
          </Link>
          </div>
          
          
        ) : (
          <>
            <Link href='/login' className="uppercase font-bold text-sm h-12 flex items-center">
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};
