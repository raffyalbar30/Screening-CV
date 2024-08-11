import Maincontent from '@/components/Mainbar/Maincontent'
import React from 'react'
import DetailAccordion from './components/accordion'
import Benner from '@/components/UI/benner'




export default function Mainbar() {
  return (
   <>
   <div className="border border-slate-500 w-full">
      <Maincontent />
      {/* <div className="mt-32 flex justify-center">
        <div className={`w-1/2 bg-slate-50 rounded-md p-4`}>
          <DetailAccordion />
        </div>
      </div> 
       <div className="mt-12">
        <Benner />
       </div> */}
   </div>
   </>
  )
}
