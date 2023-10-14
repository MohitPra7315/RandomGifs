import { useState, useEffect } from "react"
import axios from 'react'
import { Spinner } from "./Spinner";
import useGif from "../Hooks/useGif";
export function Random() {

const {gif,loader,result}=useGif();
   
    return (
        <div className="bg-green-300 w-[700px] flex flex-col max-h-auto  justify-between min-h-[500px]  max-h-[500px]">
            <p className="text-center font-serif text-[20px] underline mt-5">Random gifs</p>
        {  loader?<Spinner></Spinner>:  <img  className="max-w-[700px] h-[300px]  mx-auto" src={gif} ></img>
           }   <button
                onClick={()=>result()}
                className=" mb-[10px]    mt-[30px] mx-auto bg-yellow-300 w-10/12 py-3 font-bold text-[20px]  rounded-md">Generate Random</button>
        </div>

    )
}