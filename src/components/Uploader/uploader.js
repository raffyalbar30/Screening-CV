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
import { GoogleGenerativeAI } from "@google/generative-ai";



export default function Uploader() {
  const [getInputuser, setInputuser] = useState("");
  const [file, setfile] = useState(null);
 
  

  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_URL);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


  const HandleSumbit =  async () => {
    const formData = new FormData(); 
    formData.set("file", file);
    console.log(file);
    
    
     if (file != null) {
      try {
        const result = await model.generateContent([
          {
            fileData: {
              mimeType: "application/pdf",
              fileUri: "localhost:3000/pdf/CV.pdf"
            }
          },
          { text: `Can you summarize this document as a bulleted list? ${getInputuser}` },
        ]);

        console.log(result.response.text());

      } catch (error) {
        console.error("Error processing the file:", error);
      } 
    };
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
