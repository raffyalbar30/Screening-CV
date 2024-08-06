import React from 'react'
import { Poppins } from "next/font/google";
const font = Poppins({
    weight: '400',
    subsets: ['latin'] 
});

export default function Maincontent({ chilldren }) {
  return (
    <div className="border border-slate-400 h-auto mt-16">
        <div className={`flex justify-center ${font.className}`}>
            <span className="text-[56px] font-semibold text-slate-500">AI <span className="text-amber-600 mr-2">CV ATS Scanner</span>Gratis</span>
        </div>
        { chilldren }
    </div>
  )
}
