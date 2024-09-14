"use client";
import style from "./style.module.css";

const ImageTextBox =({image,heading,text})=>{
  return (
    <div className="flex justify between items-center">
      <img  className="w-1/2" src={image}/>
      <div className="flex flex-col gap-3 ">
      <p className="text-2xl font-bold">
        {heading}
      </p>
      <p className="text-xl">
        {text}
      </p>
      </div>
    </div>
  )
}
export default ImageTextBox;