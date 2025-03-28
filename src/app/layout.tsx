import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { NavBar } from "./components/navBar";

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
      <body className={inter.className}>
        <NavBar/>

        <main className="bg-slate-700 h-screen p-16">
          {children}
        </main>
        
        </body>
    </html>
  );
}
