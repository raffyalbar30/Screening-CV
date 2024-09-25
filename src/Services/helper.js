import axios from 'axios';


export const convertToBase64 = (file) => {
   return new Promise((resolve, reject) => {
     const reader = new FileReader();
     reader.readAsDataURL(file);
     reader.onload = () => {
       const base64String = reader.result;
       const base64WithoutPrefix = base64String.replace(/^data:.*;base64,/, '');
       resolve(base64WithoutPrefix);

     };
     reader.onerror = error => reject(error);
   });
 }


 export const uploading = async (data, request) => {
      const Response = axios.post(`${process.env.NEXT_PUBLIC_API_URL}`, {
        base64 : data,
        text : `coba kamu analisis cv ini dengan score dan identifikasi kesalahan tata bahasa sesuai bidang pekerjaan ${request} dalam bahasa indonesia`,
        gaya : "kamu adalah asisten yang baik" 
      }, {
         headers: {
           "Content-Type" : "application/json"
         }
       }); 

      return Response;
   
 }
