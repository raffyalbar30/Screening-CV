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
import Convertertobase64 from '@/Services/helper';




export default function Uploader() {
  const [getInputuser, setInputuser] = useState("");
  const [file, setfile] = useState(null);
  const [sendfile, setsendfile] = useState(null);



   
   
  const HandleSumbit =  async () => {
    if (file != null) {

      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setsendfile(reader.result.split(',')[1]);
       };

       console.log(sendfile);
       
        const Data = {
           base64 : sendfile,
           text : `coba kamu analisis cv ini dengan score dan identifikasi kesalahan tata bahasa sesuai bidang pekerjaan ${getInputuser}`,
           gaya : "kamu adalah asisten yang baik"
        }

      try {
        axios.post(`https://api.nyxs.pw/ai/gemini-input64`, Data, {
          headers: {
            "Content-Type" : "application/json"
          }
        })
        .then(ress => console.log(ress));

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
