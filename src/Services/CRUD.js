"use client"

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
const { MakeCallApi } = require("./axios-client")

const fecthingdata = async () => {
    const Response = MakeCallApi(`api/users`)
    return Response.data;
}

export const FecthingQuery =  async () => {
    return await useQuery({
        queryKey : ["data"],
        queryFn : fecthingdata,
    })
 }
