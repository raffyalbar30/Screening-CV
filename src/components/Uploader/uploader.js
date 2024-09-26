"use client"
import React from 'react'
import ReCAPTCHA from "react-google-recaptcha"
import { CiSearch } from "react-icons/ci";
import Input from '../UI/input';
import FileUploader from '../UI/file';
import axios from 'axios';
import Button from '../UI/button';
import { useState } from 'react';
import { useEffect } from 'react';
import { convertToBase64, uploading } from '@/Services/helper';
import Router from 'next/router';





export default function Uploader() {
  const [getInputuser, setInputuser] = useState("");
  const [file, setfile] = useState(null);
  


  
  const HandleSumbit =  async () => {
    if (file != null) {
      const base64File = await convertToBase64(file);
      
      try {
        const Response = await uploading(base64File, getInputuser)
        const Result = Response.data.result; 
        const Convert = `jawab sebagai cv reviewer, layaknya di sebuah hrd, berikan kekurangan dan kelebihan dari inputan user ${Result} dan rapihkan text berikut`;
        const encodedText = encodeURIComponent(Convert);
        const system = "jawab sebagai asisten yg supportif, dan juga kamu adalah pribadi yg menyenangkan";
        const encodedSystem = encodeURIComponent(system);
        const Api = `https://api.nyxs.pw/ai/gpt4o?text=${encodedText}&system=${encodedSystem}`;
        const ApiResponse = await fetch(Api)
        const json = await ApiResponse.json();

         console.log(json.result);
         
        // Router.push({
        //   pathname: "/Tool/cv_PDF",
        //   query : {
        //     base64File,
        //     Result
        //   }
        // })
        
      } catch (error) {
        console.error("Error processing the file:", error);
      } 

     
    
     };

    
  }
   
  
  useEffect(() => {
    HandleSumbit();
  }, [])

  return (
    <>
     <div className="flex justify-center">
       <div className="mt-12">
          <Input placeholder="your position apply..." setInputuser={setInputuser}/>
          <FileUploader setfile={setfile}/>
          <label htmlFor="" className='mt-4 lg:text-[12px] sm:text-[10px] md:text-[10px] text-[10px] ml-1 text-slate-600'>Anda memerlukan CV PDF untuk mengecek ATS-friendly</label>
            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPCATH_KEY } /> 
            <Button HandleSumbit={HandleSumbit}>  
              <CiSearch className="text-[24px]" />
              Check ATS
            </Button>
          </div>
      </div>

    
    </>

  )
}
