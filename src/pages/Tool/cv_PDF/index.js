import Button from '@/components/UI/button'
import FileUploader from '@/components/UI/file'
import React from 'react'

export default function index() {
  return (
         <div className="flex justify-center">
          <div className="mt-12">
             <FileUploader/>
             <Button>
                Convert to PDF
             </Button>
          </div>
         </div>
      
  )
}
