import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { NavBar } from "./components/navBar";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clothes Ecommerce",
  description: "A simple ecommerce site for clothes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-slate-700')}>
        <NavBar/>

        <main className=" h-screen ">
          {children}
          
        </main>
        
        </body>
    </html>
  );
}
