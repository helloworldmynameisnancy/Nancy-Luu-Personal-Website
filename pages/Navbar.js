import React from 'react';
import Link from 'next/link';
import { BsFillMoonStarsFill } from 'react-icons/bs';


function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="py-8 mb-48 flex justify-between font-titleFont2 text-emerald-700 dark:text-red-50">
    <Link href="/" legacyBehavior>
      <a className="sm:px-10 md:px-12 lg:px-16 text-xl ml-3">developedbynancy</a>
     </Link>
     <ul className="flex items-center">
       <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl fill-emerald-700 dark:fill-red-50"/>
       </li>
       <li className="sm:px-8 md:px-12 lg:px-16">
         <Link href="/About" legacyBehavior>
          <a className="dark:text-red-50 text-xl px-4">About</a>
         </Link>
       </li>
     </ul>
   </nav>
  )
 }
 
 
 export default Navbar;