"use client";

import { Carousel } from "@material-tailwind/react";
 
export default function CarouselDefault() {
  return (
    <Carousel className="rounded-xl w-full" autoplay draggable loop navigation={()=><div></div>}>
      <img
        src="/assets/heroBanner1.webp"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/assets/heroBanner2.webp"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="/assets/heroBanner3.webp"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="/assets/heroBanner4.webp"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}