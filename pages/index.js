import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillFile, AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';

export default function Home() {
   const [darkMode, setDarkMode] = useState(false);
   const textSteps = ['Computer Science @ University of Houston'];
   const [typedText, setTypedText] = useState('');
   const [showCursor, setShowCursor] = useState(true);

   useEffect(() => {
      document.body.classList.toggle('dark', darkMode);
   }, [darkMode]);

   useEffect(() => {
      const intervalId = setInterval(() => {
         if (typedText.length < textSteps[0].length) {
            setTypedText((prevText) => prevText + textSteps[0][typedText.length]);
         } else {
            clearInterval(intervalId);
         }
      }, 50); // Adjust typing speed

      const cursorInterval = setInterval(() => {
         setShowCursor((prevShow) => !prevShow);
      }, 500); // Adjust blinking cursor speed

      return () => {
         clearInterval(intervalId);
         clearInterval(cursorInterval);
      };
   }, [darkMode, typedText, textSteps]);

   return (
      <div className={darkMode ? 'dark' : ''}>
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         </Head>
         <main className="min-h-screen bg-red-50 dark:bg-emerald-700">
            <section className="">
               <nav className="py-8 mb-48 flex justify-between font-titleFont2 text-emerald-700 dark:text-red-50">
                  <Link href="/" legacyBehavior>
                     <a className="text-xl px-16">developedbynancy</a>
                  </Link>
                  <ul className="flex items-center">
                     <li>
                        <BsFillMoonStarsFill
                           onClick={() => setDarkMode(!darkMode)}
                           className="cursor-pointer text-2xl fill-emerald-700 dark:fill-red-50"
                        />
                     </li>
                     <li className="px-20">
                        <Link href="/About" legacyBehavior>
                           <a className="px-4 dark:text-red-50 text-xl">About</a>
                        </Link>
                     </li>
                  </ul>
               </nav>
               <div className="dark:text-red-50 flex flex-col items-center justify-center font-titleFont2 text-emerald-700">
                  <h1 className="text-6xl md:text-7xl">Nancy Luu</h1>
                  <p className="text-xl md:text-2xl py-3 mdl:text-xl max-w-xl mx-auto dark:text-red-50">
                     {typedText}
                     <span className={showCursor ? 'cursor' : ''}>|</span>
                  </p>
               </div>
               <div className="text-3xl md:text-4xl flex justify-center gap-5 py-1 text-emerald-700 dark:text-red-50">
                  <a href="Resume-Nancy%20Luu.pdf" target="_blank" rel="noopener noreferrer">
                     <AiFillFile />
                  </a>
                  <a href="https://www.linkedin.com/in/nancyhluu/">
                     <AiFillLinkedin />
                  </a>
                  <a href="https://github.com/helloworldmynameisnancy">
                     <AiFillGithub />
                  </a>
                  <a href="mailto:n.luu1330@gmail.com">
                     <AiFillMail />
                  </a>
               </div>
            </section>
         </main>
      </div>
   );
}