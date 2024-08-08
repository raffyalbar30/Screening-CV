 import React from 'react'
 import { GrDocumentPdf } from "react-icons/gr";
 import { Poppins } from "next/font/google";
 import { FaLinkedin } from "react-icons/fa";
 import { MdOutlineChat } from "react-icons/md";



 const font = Poppins({
 weight: '500',
 subsets: ['latin'] 
 });
 
 
 export default function Benner() {
   return (
     <div className="bg-indigo-50 w-full p-4">
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
               <div className="mt-5 flex gap-x-2 items-center">
              
                      <div className="border-2 border-indigo-600 w-56 p-4 rounded-sm flex items-center gap-x-2">
                        <span className="text-2xl">
                           <GrDocumentPdf/>
                        </span>
                         <p>Template CV</p>
                      </div>
                      <div className="border-2 border-indigo-600 w-56 p-4 rounded-sm flex items-center gap-x-2">
                        <span className="text-2xl">
                           <MdOutlineChat/>
                        </span>
                         <p>Reviewer</p>
                      </div>
                      <div className="border-2 border-indigo-600 w-56 p-4 rounded-sm flex items-center gap-x-2">
                        <span className="text-2xl">
                           <FaLinkedin/>
                        </span>
                         <p> linkedln</p>
                      </div>
                      
               </div>
               </div>
          </div>
     </div>
   )
 }
 