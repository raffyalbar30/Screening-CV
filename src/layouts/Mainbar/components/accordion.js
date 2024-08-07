import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/UI/accordion"
  import { Poppins } from "next/font/google";

  const font = Poppins({
  weight: '400',
  subsets: ['latin'] 
  });
  
 import React from 'react'
 
 export default function DetailAccordion() {
   return (
  <Accordion type="single" collapsible className={`${font.className} w-full`}>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl font-semibold hover:text-amber-600">Apa itu AI CV ATS Checker?</AccordionTrigger>
        <AccordionContent className="text-[14px]">
        AI CV ATS checker adalah tool yang membantu Anda memeriksa apakah CV Anda 
        dioptimalkan untukapplicant tracking systems (ATS). ATS digunakan oleh perekrut
         untuk mengecek CV dan menyaring kandidat berdasarkan kata kunci dan kriteria tertentu.
          Tool ini dapat membantu Anda memastikan bahwa CV ATS Anda diformat dengan baik sehingga
           dapat melewati ATS atau masih memerlukan perbaikan.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-xl font-semibold hover:text-amber-600">Bagaimana cara kerja AI CV ATS Checker?</AccordionTrigger>
        <AccordionContent className="text-[14px]">
        AI CV ATS Checker menggunakan kecerdasan buatan untuk menganalisis CV 
        Anda dan mengidentifikasi masalah potensial yang dapat mencegahnya melewati ATS.
         Tool ini mencari masalah umum seperti kata kunci yang hilang, masalah format, dan 
         faktor lain yang dapat mempengaruhi kinerja CV Anda di ATS.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-xl font-semibold hover:text-amber-600">Apakah data saya aman dengan AI CV ATS Checker?</AccordionTrigger>
        <AccordionContent className="text-[14px]">
        Ya, data Anda aman dengan AI CV ATS Checker. Kami tidak menyimpan 
        informasi pribadi atau CV yang dikirim melalui tool ini. CV Anda diproses 
        dan hasilnya langsung ditampilkan kepada Anda. Kami sangat menjaga privasi 
        dan keamanan data dan tidak membagikan informasi Anda kepada pihak ketiga.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-xl font-semibold hover:text-amber-600 text-left">Saya memiliki pertanyaan lebih lanjut. Bagaimana saya bisa menghubungi Anda? </AccordionTrigger>
        <AccordionContent className="text-[14px]">
        Jika Anda memiliki pertanyaan lebih lanjut tentang AI CV Reviewer 
        atau memerlukan bantuan dengan CV Anda, Anda dapat menghubungi kami di <span className="text-indigo-600">raffialbar135@gmail.com</span>.
        </AccordionContent>
      </AccordionItem>
    </Accordion>

   )
 }
 
