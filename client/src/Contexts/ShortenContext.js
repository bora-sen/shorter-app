import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export const ShortenContext = createContext();

export default function ShortenContextProvider({children}){

    const [URLS,setURLS] = useState([]);


    async function shortenUrl(baseUrl){
        try {
            if(baseUrl === '') {
                toast.error("Please input a valid URL");
                return
            }
            let req = await axios.post("https://api.urlo.in/api/short-url",{
                originalUrl:baseUrl
            });
            //let data = await resp;
            let newUrl = {
                shortUrl:req.data.data.shortUrl,
                originalUrl:req.data.data.originalUrl
            }
            setURLS(URL => [...URL,newUrl]);
    
            //console.log(newUrl);
            toast.success("Short link is created!")
        } catch (error) {
            toast.error(error);
        }

        //return req.data
        //console.log(resp);
    }


    const data = {
        URLS,
        shortenUrl
    }

    return (
        <ShortenContext.Provider value={data}>
            {children}
        </ShortenContext.Provider>
    )
}