import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-100'>
      <Link href='/' className="uppercase font-bold text-md h-12 flex items-center">
        Street wear
      </Link>
      <div className="flex gap-4">
        <Link href='signin' className="uppercase font-bold text-sm h-12 flex items-center">
          sign in
        </Link>
        <Link href='/login' className="uppercase font-bold text-sm h-12 flex items-center">
          Login
        </Link>
      </div>
     
    </nav>
  );
}