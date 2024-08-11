import React from 'react'
import { Poppins } from "next/font/google";
import Uploader from '../UI/uploader';
const font = Poppins({
    weight: '400',
    subsets: ['latin'] 
});

export default function Maincontent() {
  return (
    <div className="w-full">
      <div className={`mt-16 ${font.className}`}>
          <div className={`flex justify-center`}>
              <span className="lg:text-[56px] sm:text-[24px] md:text-[28px] text-[24px] font-semibold text-slate-500">AI <span className="text-amber-600 mr-2">CV ATS Scanner</span>Gratis</span>
          </div>
          <div className="flex justify-center">
            <div className="flex-wrap border border-indigo-600">
              <p className="lg:text-xl sm:text-[10px] md:text-[13px] text-[10px] ml-2 mr-2 ">CV ATS Scanner adalah sebuah tools buat kamu para Jobseker, Perbaiki CV mu dalam penulisan dan tata bahasa </p>
              <p className="flex justify-center lg:text-base sm:text-[10px] md:text-[13px] text-[10px]">Track dan optimalisasikan penulisan & ratting CV anda di sini.</p>
            </div>
          </div>
      </div>
      <Uploader/>
    </div>
  )
}
