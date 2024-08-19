import React from 'react';
import { Poppins } from "next/font/google";
import Example from './dropdown-menu';
const font = Poppins({
    weight: '400',
    subsets: ['latin'] 
});

// navbar
const Navbar = () => {
    return (
        <>
         <div className={`${font.className} flex items-center lg:ml-4`}>
         <div className="ml-8 px-4 py-2 rounded-lg bg-indigo-800">
             <span className="text-xl text-white">R</span>
         </div>
          <span className="ml-1 text-xl font-semibold text-slate-500 font-white">affsume</span>
         </div>
    
        <div className="mr-16 hidden">
          <ul className={`${font.className} flex gap-x-6 font-semibold`}>
              <li>Buat Cv Sekarang</li>
              <li>Tempalate CV</li>
              <li>Feedback</li>
          </ul>
        </div>
        
        <div>
        </div>
        </>
    );
}

export default Navbar;
