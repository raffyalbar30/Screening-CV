import React from 'react'

export default function Button({children}) {
  return (
    <button className="w-full bg-indigo-800 mt-4 rounded-md text-white py-2 flex items-center justify-center gap-x-2">
        {children}
   </button>
  )
}
