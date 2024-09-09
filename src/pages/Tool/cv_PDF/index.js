import Button from '@/components/UI/button'
import FileUploader from '@/components/UI/file'
import React from 'react'
import Navbar from './_components/Navbar'
import Content from '@/components/UI/content'
import Description from './_components/descriptionai'

export default function index() {
  return (
   <>
   <Navbar />
   <Content>
     <Description />
   </Content>
   </>
  )
}
