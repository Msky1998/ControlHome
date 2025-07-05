import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle';
import { Home } from 'lucide-react';



export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-white text-2xl font-bold flex items-baseline gap-2">
      <Home/>
        Home Control
      </Link>
      <ModeToggle/>
    </div>
   </nav>
  )
}