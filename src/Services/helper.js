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


 export const ConvertResponse = async (Response) => {
  const Convert = `jawab sebagai cv reviewer, layaknya di sebuah hrd, berikan kekurangan dan kelebihan dari inputan user ${Response} dan rapihkan text berikut`;
  const encodedText = encodeURIComponent(Convert);
  const system = "jawab sebagai asisten yg supportif, dan juga kamu adalah pribadi yg menyenangkan";
  const encodedSystem = encodeURIComponent(system);
  const Api = `https://api.nyxs.pw/ai/gpt4o?text=${encodedText}&system=${encodedSystem}`;
  const ApiResponse = await fetch(Api)
  const json = await ApiResponse.json();
  let ClenedResponse = json.result;
  const Replace = ClenedResponse.replace(/\*/g, '');

   return Replace;
 }
