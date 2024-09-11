"use client"
import React from 'react'
import { useRouter } from 'next/router'
import { Light as SyntaxHighlight } from "react-syntax-highlighter";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default function Description() {
  const Router = useRouter();
  const { base64File, Result } = Router.query;
  const pdfData = `data:application/pdf;base64,${base64File}`;

  return (
    <div className="mt-12">
      <div className="flex justify-between gap-x-2 h-full">
        {/* Bagian Kode */}
        <div className="h-full rounded-md w-1/2">
          <SyntaxHighlight
            language="swift"
            style={atomOneDark}
            wrapLongLines={true}
            className="pl-4 pr-4 text-sm rounded-lg"
          >
            {Result}
          </SyntaxHighlight>
        </div>

        {/* Bagian PDF */}
        <div className="h-full w-1/2">
          <div className="flex justify-center h-full">
            <iframe src={pdfData} className="w-full" height="670" ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
