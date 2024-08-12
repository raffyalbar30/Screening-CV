import Maincontent from '@/components/Mainbar/Maincontent'
import React from 'react'
import DetailAccordion from './components/accordion'
import Benner from '@/components/UI/benner'




export default function Mainbar() {
  return (
   <>
   <div className=" w-full">
      <Maincontent />
       <div className="lg:mt-32 mt-24 flex justify-center">
        <div className={`lg:w-1/2 md:w-1/2 w-full bg-slate-50 rounded-md p-4`}>
          <DetailAccordion />
        </div>
      </div> 
      <div className="mt-2">
       <Benner/>
       </div> 
   </div>
   </>
  )
}
