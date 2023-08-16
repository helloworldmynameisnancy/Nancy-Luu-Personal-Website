import React from 'react';
import Link from 'next/link';
import { BsFillMoonStarsFill } from 'react-icons/bs';

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="py-8 mb-12 flex justify-between font-titleFont2">
      <Link href="/" legacyBehavior>
        <a className="text-xl px-16 text-emerald-700 dark:text-white">developedbynancy</a>
      </Link>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl fill-emerald-700 dark:fill-white"
          />
        </li>
        <li className="px-20">
          <Link href="/About" legacyBehavior>
            <a className="bg-white-500 text-emerald-700 px-4 py-2 text-xl dark:text-red-50">About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;