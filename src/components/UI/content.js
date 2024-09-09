import React from 'react'
import { Poppins } from "next/font/google";
const font = Poppins({
  weight: '400',
  subsets: ['latin'] 
});

export default function Content({ children }) {
  return (
    <div className={`${font.className} border bg-[#e0d9e0] rounded-md h-auto mt-12 ml-8 mr-8`}>
       <div className="border border-slate-500 mr-4 ml-4"> 
        <div className="flex gap-x-2 mt-8 items-center">
              <img src="https://cdn.resumegenius.com/assets/builder/images/loader.gif" className="w-12 border-purple-400" />
              <span className="text-[50px] font-semibold">Hasil Analisis Cv mu . . .</span>
        </div>
        <p>Berikut hasil analisi kami anda bisa mempertimbangkan analisis kami terhadap cv anda <br></br> dan meningkatkan peluang penerimaan pekerjaan anda. . .</p>
        <div>
            { children }
        </div>
       </div>
    </div>
  )
}
