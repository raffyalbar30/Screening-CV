import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";



export default function Connect() {
  return (
    <div className="flex-wrap ml-4 mt-4 lg:ml-0 md:ml-0 lg:mt-0 md:mt-0 lg:text-2xl md:text-sm">
    <span className=" font-semibold text-slate-500 font-white">Contact</span>
      <div className="flex gap-x-2 text-3xl mt-2">
         <BsInstagram />
         <FaLinkedin />
         <FaGithub />
      </div>
      <div className="mt-8">
      <span className=" font-semibold text-slate-500 font-white ">Bahasa</span>
        <p>Indonesia</p>
        <p>English</p>
        <p>Sunda</p>
      </div>
 </div>
  )
}
