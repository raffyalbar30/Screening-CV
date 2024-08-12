"use client"
import React from 'react'
import ReCAPTCHA from "react-google-recaptcha"
import { CiSearch } from "react-icons/ci";


export default function Uploader() {
  return (
    <>
     <div className="flex justify-center">
       <div className="mt-12">
          <input type="text" className="w-full rounded-md py-2 bg-white placeholder:text-slate-400 placeholder:pl-2 text-slate-400 " placeholder="your posisition apply.."/>
         <div className="border-dashed border-2 border-slate-500 mt-2 lg:px-16 h-auto lg:p-12 sm:px-12 sm:p-8 md:px-14 md:p-10 p-8 rounded-md">
            <input className="mx-auto opacity-0 absolute mt-4 " type="file" id="resumme" name="resumefile" multiple />
            <label htmlFor="" className='flex justify-center mt-2 text-slate-600'><span className='font-semibold '>Click to upload </span> <span>or drag and drop</span></label>
            <label htmlFor="" className='flex justify-center text-slate-600'>SVG, PNG, JPG or GIF (MAX, 10MB)</label>
         </div>
         <label htmlFor="" className='mt-4 lg:text-[12px] sm:text-[10px] md:text-[10px] text-[10px] ml-1 text-slate-600'>Anda memerlukan CV PDF untuk mengecek ATS-friendly</label>
          <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPCATH_KEY } /> 
         <button className="w-full bg-indigo-800 mt-4 rounded-md text-white py-2 flex items-center justify-center gap-x-2">
         <CiSearch className="text-[24px]" />
            Check ATS
        </button>
          </div>
      </div>
    </>
  )
}
