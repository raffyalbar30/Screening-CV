"use client"
import React from 'react'
import ReCAPTCHA from "react-google-recaptcha"
import { CiSearch } from "react-icons/ci";
import Input from '../UI/input';
import FileUploader from '../UI/file';
import Button from '../UI/button';


export default function Uploader() {
  return (
    <>
     <div className="flex justify-center">
       <div className="mt-12">
        <Input placeholder="your position apply..." />
         <FileUploader />
         <label htmlFor="" className='mt-4 lg:text-[12px] sm:text-[10px] md:text-[10px] text-[10px] ml-1 text-slate-600'>Anda memerlukan CV PDF untuk mengecek ATS-friendly</label>
          <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPCATH_KEY } /> 
           <Button>  
            <CiSearch className="text-[24px]" />
            Check ATS
            </Button>
          </div>
      </div>
    </>
  )
}
