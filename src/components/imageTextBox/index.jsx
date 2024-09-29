"use client";
import style from "./style.module.css";

const ImageTextBox =({image,heading,text, revers})=>{
  return (
    <div className={`flex justify between items-center w-full flex-col ${revers?"md:flex-row-reverse":"md:flex-row"} gap-6`}>
      <div className="w-full md:w-1/2 ">
      <img  className="w-full rounded-xl" src={image}/>
      </div>
      <div className="flex flex-col gap-3 w-full md:w-1/2 justify-center items-center  ">
      <p className="text-2xl font-bold">
        {heading}
      </p>
      <p className="text-xl text-center">
        {text}
      </p>
      </div>
    </div>
  )
}
export default ImageTextBox;