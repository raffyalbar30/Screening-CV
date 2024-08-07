 import React from 'react'
 import { Poppins } from "next/font/google";

 const font = Poppins({
 weight: '500',
 subsets: ['latin'] 
 });
 
 
 export default function Benner() {
   return (
     <div className="border border-slate-500 bg-indigo-50 w-full p-4">
          <div className={`ml-[150px] ${font.className} items-center`}>
              <div className={`mt-4`}>
                 <span className="text-4xl font-semibold text-slate-500">
                   Teman <span className="text-amber-600">Terpercaya Anda Dalam Perjalanan Profesional</span> Anda
                 </span>
              </div>
               <div className="mt-4 ml-2 text-xl text-slate-500">
                 <span>
                 Resmume membantu Anda mendapatkan pekerjaan impian Anda dengan cepat dan mudah.
                 </span>
                 <br></br>
                 <p>
                 Dengan bantuan AI dan template CV profesional, Anda akan mendapatkan CV yang sempurna
                 dalam hitungan menit.
                 </p>
               <div className="mt-5">
               <span>
                 Follow mediasosial kami berikut.
                 </span>
               </div>
               </div>
          </div>
     </div>
   )
 }
 