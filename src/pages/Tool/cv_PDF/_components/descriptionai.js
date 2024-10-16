"use client"
import React from 'react'
import { useRouter } from 'next/router'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default function Description() {
  const Router = useRouter();
  const { base64File, Result } = Router.query;
  const pdfData = `data:application/pdf;base64,${base64File}`;

  return (
    <div className="mt-12">
      <div className="flex justify-between gap-x-2 h-1/2">
        {/* Bagian Kode */}
        <div className="h-1/2 rounded-md w-1/2 overflow-auto overflow-y-auto">
          <SyntaxHighlighter
            language="markdown"
            style={coy}
            wrapLongLines={true}
            className="pl-4 pr-4 text-sm rounded-lg"
          >
            {Result}
          </SyntaxHighlighter>
        </div>

        {/* Bagian PDF */}
        <div className="h-full w-1/2">
          <div className="flex justify-center h-full">
            <iframe src={pdfData} className="w-full" height="1070" ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
