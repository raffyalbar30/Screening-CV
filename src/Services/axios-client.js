import axios from "axios";

export const Makecallapi = axios.create ({
      baseURL : "https://reqres.in/",
      timeout : 5000,
      headers : {
          "Content-Type" : "application/json",
      }
  }); 
 