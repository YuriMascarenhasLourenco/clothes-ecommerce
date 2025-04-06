'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { User } from "../stores/authStore";

export const NavBar = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUser = () => {
      const raw = localStorage.getItem("auth-store");
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          const storedUser: User | null = parsed?.state?.user ?? null;
          setUser(storedUser);
          console.log("user", storedUser);
        } catch (err) {
          console.error("Erro ao ler usuário do localStorage:", err);
        }
      } else {
        setUser(null);
      }
    };
  
    loadUser();
  
    // Se quiser escutar mudanças de outras abas
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "auth-store") {
        loadUser();
      }
    };
  
    window.addEventListener("storage", handleStorageChange);
  
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  
  return (
    <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-100'>
      <Link href='/' className="uppercase font-bold text-md h-12 flex items-center">
        Street wear
      </Link>
      <div className="flex gap-4">
        {user ? (
          <div className="flex gap-4 items-center">
          <Link href='/products' className="uppercase font-bold text-sm h-12 flex items-center">New Product</Link>
            <span className="uppercase text-sm h-12 flex items-center">
            Olá, {user.name.split(" ")[0]}
          </span>
          <Link href='/logout' className="uppercase  text-sm h-12 flex items-center">
          Logout
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
