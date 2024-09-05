import React from 'react'

export default function Input(props) {
    let placeholder = props.placeholder;
    let setInputuser = props.setInputuser;
  return (
    <>
        <input
         type="text"
         accept='.pdf, .docx, .doc, .odt' 
         className="w-full rounded-md py-2 bg-white placeholder:text-slate-400 placeholder:pl-2 text-slate-400 " 
         placeholder={placeholder}
         onChange={(e) => {setInputuser(e.target.value)}}
         />
    </>
  )
}
