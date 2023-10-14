import { useEffect, useState } from "react";



function useGif(tag){
 
    console.log(tag)
 
    const [gif, setGif] = useState('')
    const [loader, setLoader] = useState(false)

    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
   
    const url = `https:api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


    async function result(tag) {
        setLoader(true)
        try {
            const oupt = await fetch(tag?`${url}&tag=${tag}`:`${url}`);
            const res = await oupt.json();
            console.log(res)
            console.log(res.data.images.downsized_large.url);
            setGif(res.data.images.downsized_large.url)
        }
        catch (error) {
            console.log(error)
        }
        setLoader(false)
    }

   useEffect(()=>{

        result('cat');
    }, [])

    return{gif,loader,result}
  

   
   
}
export default useGif