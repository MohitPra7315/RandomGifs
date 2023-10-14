import { useState, useEffect } from "react"
// import axios from 'react'
import { Spinner } from "./Spinner";
import useGif from "../Hooks/useGif";
export function Taggif() {

    
    const [tag, setTag] = useState('cat')
    const {gif,loader,result}=useGif(tag);
   

  
   

    return (

        <div className="bg-blue-200 w-[700px] flex flex-col justify-evenly marker:ax-h-auto min-h-[300px] max-h-[500px]  relative">
            <p className="text-center font-serif text-[20px] underline mt-5">Search  gifs</p>
            {loader ? <Spinner></Spinner> : <img className="max-w-[600px] h-[300px]  mx-auto" src={gif} ></img>
            }

            <input type="text"
                onChange={(e)=>setTag(e.target.value)}
                value={tag}
                className="  w-10/12 mx-auto text-center mt-10    rounded-sm"

            />
            <button
                onClick={()=>result(tag)}

                className=" mb-[10px]    mt-[30px] mx-auto bg-yellow-300 w-10/12 py-3 font-bold text-[20px]  rounded-md">Generate Random</button>



        </div>


    )
}