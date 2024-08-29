// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_URL);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const fileManager = new GoogleAIFileManager(process.env.API_KEY);


export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
  maxDuration: 5,
};


export default function handler(req, res) {
   const Sending = async() => {
    const model = genAI.getGenerativeModel({
      // Choose a Gemini model.
      model: "gemini-1.5-flash",
    });

    const uploadResponse = await fileManager.uploadFile(res.data.file, {
      mimeType: "application/pdf",
      displayName: "Gemini 1.5 PDF",
    });

    const result = await model.generateContent([
      {
        fileData: {
          mimeType: uploadResponse.file.mimeType,
          fileUri: uploadResponse.file.uri
        }
      },
      { text: res.data.prompt },
    ]);
    
    console.log(result.response.text())

   }
  return Sending;
  res.status(200).json({ prompt : res.data});
}
