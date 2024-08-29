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


export default function Uploader() {
  const [getInputuser, setInputuser] = useState("");
  const [file, setfile] = useState(null);
  

  const HandleSumbit =  async () => {
    try {
      const Upload = {
          prompt : getInputuser,
          file : file
      }
      await axios.post("http://localhost:3000/api/hello", Upload)
      .then(ress => console.log(ress))
    } catch (error) {
       console.log(error);
    }
  }

  useEffect(() => {
    HandleSumbit();
  }, [getInputuser])

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
