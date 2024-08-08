import { Poppins } from 'next/font/google';
import React from 'react'
const font = Poppins({
  weight: '400',
  subsets: ['latin'] 
});


export default function Footer({ children}) {
  return (
        <div className={` ${font.className} w-auto `}>
             { children }
        </div>
   
  )
}
