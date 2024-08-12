 import React from 'react'
 import { Poppins } from "next/font/google";
 import { MdEmail } from "react-icons/md";
 const font = Poppins({
    weight: '400',
    subsets: ['latin'] 
  });

 
 export default function Data() {
   return (
     <div className={` flex-wrap items-center lg:text-2xl md:text-sm`}>
       <div className='flex items-center '>
         <div className="ml-2 px-4 py-2 rounded-lg bg-indigo-800">
             <span className="lg:text-xl md:text-sm text-white">R</span>
         </div>
          <span className="ml-1 font-semibold text-slate-500 font-white">affsume</span>
         </div>
          <div className="ml-2  flex-wrap mt-2">
           <span>Buat CV menjadi sempurna dengan bantuan AI.</span>
            <p className="font-semibold mt-1">CV Massculinity Character</p>
            <p className="mt-1">Karawang, Banyusari 41375, Jawabarat</p>
            <p className="mt-1 flex items-center gap-x-1"><MdEmail className="text-xl"/> raffialbar135@gmail.com</p>
          </div>
          <div className="flex-wrap mt-3 ml-2 lg:text-2xl md:text-sm">
            <span className=" font-semibold text-slate-500 font-white">Legal</span>
            <p className="mt-1">Syarat dan Ketentuan</p>
            <p className="mt-1">Kebijakan Privasi</p>
          </div>
     </div>
   )
 }
 