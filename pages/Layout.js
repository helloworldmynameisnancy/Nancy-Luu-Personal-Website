import React from 'react';
import Navbar from './Navbar';
import { useState } from 'react';

function Layout({ children}) {
  const [darkMode, setDarkMode]= useState(false);
  return(
     <div className={darkMode? "dark" : ""}>
      <main className="bg-red-50 dark:bg-emerald-700 dark:text-red-50">
        <section className="min-h-screen">
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