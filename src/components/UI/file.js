import React from 'react'

export default function FileUploader() {
  return (
    <div className="border-dashed border-2 border-slate-500 mt-2 lg:px-16 h-auto lg:p-12 sm:px-12 sm:p-8 md:px-14 md:p-10 p-8 rounded-md">
    <input className="mx-auto opacity-0 absolute mt-4 " type="file" id="resumme" name="resumefile" multiple />
    <label htmlFor="" className='flex justify-center mt-2 text-slate-600'><span className='font-semibold '>Click to upload </span> <span>or drag and drop</span></label>
    <label htmlFor="" className='flex justify-center text-slate-600'>SVG, PNG, JPG or GIF (MAX, 10MB)</label>
   </div>
  )
}
