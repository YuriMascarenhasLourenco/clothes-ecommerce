'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useAuthStore } from "../stores/authStore";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";

export const NavBar = () => {
  const [findItem, setFindItem] = useState<string>("");
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [openManagementMenu, setOpenManagementMenu] = useState(false);

  const { user, logout } = useAuthStore();
  const router = useRouter();

  const exit = () => {
    localStorage.removeItem("auth-store");
    logout();
    router.push("/");
  };

  // Fecha dropdowns ao clicar fora
  const userMenuRef = useRef<HTMLDivElement>(null);
  const managementMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(e.target as Node)
      ) {
        setOpenUserMenu(false);
      }
      if (
        managementMenuRef.current &&
        !managementMenuRef.current.contains(e.target as Node)
      ) {
        setOpenManagementMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-100">
      <Link
        href="/"
        className="uppercase font-bold text-md h-12 flex items-center"
      >
        Street wear
      </Link>

      <div className="flex items-center w-80">
        <input
          type="text"
          className="rounded-md w-80 text-black"
          placeholder="  what is your desire today?"
          value={findItem}
          onChange={(e) => setFindItem(e.target.value)}
        />
        <button className="rounded-md text-white text-lg w-12 flex items-center justify-center">
          <CiSearch />
        </button>
      </div>

      <div className="flex gap-4">
        {user ? (
          <div className="flex gap-4 items-center">
            {/* Dropdown Management */}
            <div className="relative" ref={managementMenuRef}>
              <button
                onClick={() => setOpenManagementMenu(!openManagementMenu)}
                className="uppercase font-bold text-sm h-12 flex items-center"
              >
                Management
              </button>
              {openManagementMenu && (
                <div className="absolute right-0 mt-2 w-40 rounded-xl shadow-lg bg-white text-black ring-1 ring-black/5 z-50">
                  <ul className="py-2 text-sm">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <Link href="/admin/newProduct">New Product</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <Link href="/admin/stocks">Stocks</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Dropdown User */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setOpenUserMenu(!openUserMenu)}
                className="text-sm h-12 flex items-center"
              >
                <FaUser className="text-xl" />
              </button>
              {openUserMenu && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl shadow-lg bg-white text-black ring-1 ring-black/5 z-50">
                  <ul className="py-2 text-sm">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <Link href="/admin/profile">Perfil</Link>
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={exit}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link href="/cart" className="text-xl">
              🛒
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <Link
              href="/login"
              className="uppercase font-bold text-sm h-12 flex items-center"
            >
              Login
            </Link>
            <Link href="/cart">🛒</Link>
          </div>
        )}
      </div>
    </nav>
  );
};
