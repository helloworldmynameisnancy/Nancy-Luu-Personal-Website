import React from 'react';
import Navbar from './Nav';
import { useState } from "react";

function Layout({ children}) {
  const [darkMode, setDarkMode]= useState(false);
  return(
     <div className={darkMode? "dark" : ""}>
      <main className="bg-red-50 border-spacing border-t-60 border-b-60 border-l-60 border-r-60 border-emerald-700 dark:bg-emerald-700 dark:border-red-50">
        <section className="min-h-full">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="flex flex-col items-center justify-center min-h-screenflex">
            {children}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Layout;