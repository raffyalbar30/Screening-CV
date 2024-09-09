import React from 'react'
import { useRouter } from 'next/router'

export default function Description() {
  const Router = useRouter();
  const { base64File, result } = Router.query;
   console.log(result);
   
  return (
    <div className="border border-slate-500 mt-12">
       <div className="flex justify-between">
           <div className="border border-slate-400  rounded-md w-1/2">
              <p> Hello world</p>
           </div>
           <div>
           <embed src="path/to/your/file.pdf" width="600" height="500" type="application/pdf" />
           </div>

       </div>
    </div>
  )
}
