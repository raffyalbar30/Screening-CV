"use client"

import { useQuery } from "@tanstack/react-query"
const { MakeCallApi } = require("./axios-client")

const fecthingdata = async () => {
    const Response = MakeCallApi(`api/users`)
    console.log(Response.data);
    return;
    
}

export const FecthingQuery =  async () => {
    return await useQuery({
        queryKey : ["data"],
        queryFn : () => {
            const Response = MakeCallApi(`api/users`)
            console.log(Response.data);
            return;
        } ,
    })
 }
