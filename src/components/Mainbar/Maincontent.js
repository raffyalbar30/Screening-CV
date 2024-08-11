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
              <span className="text-[56px] font-semibold text-slate-500">AI <span className="text-amber-600 mr-2">CV ATS Scanner</span>Gratis</span>
          </div>
          <div className="flex justify-center">
            <div className="flex-wrap">
              <span>CV ATS Scanner adalah sebuah tools buat kamu para Jobseker, Perbaiki CV mu dalam penulisan dan tata bahasa  </span>
              <p className="flex justify-center">Track dan optimalisasikan penulisan & ratting CV anda di sini.</p>
            </div>
          </div>
      </div>
      <Uploader/>
    </div>
  )
}
