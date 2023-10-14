import { Random } from "./Component/Random";
import { Taggif } from "./Component/Taggif";

// import { useState } from "react";
export default function App() {


  return (
    <div className="bg-sky-300 min-screen  w-screen flex h-screen flex-col items-center justify-around"     >

      <div className="w-11/12  h-[80px] text-center text-3xl  rounded-lg py-4  bg-white font-bold">Random Gifs</div>
      <div className=" h-full flex  items-center gap-[20px] ">

      <Random  />
      <Taggif/>
         </div>

    </div>);
}
