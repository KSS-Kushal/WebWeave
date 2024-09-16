"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Carousel from "@/components/carousel";
import HeroCard from "@/components/heroCard";
import ImageTextBox from "@/components/imageTextBox";
import ReviewCard from "@/components/reviewCard";
import From from "@/components/from";
import { Button } from "@material-tailwind/react";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />

      <div className="relative flex flex-col justify-center items-center  mb-24 w-full">
        <Carousel />
        <div className="absolute -bottom-5 px-5">
          <HeroCard />
        </div>
      </div>
      <div className="flex  justify-between items-center  p-3 bg-gray-300">
        <p className=" text-xl font-bold text-gray-800">Our Mission"</p>
        <div classname="w-[50%]">
          <p className="text-xl font-bold text-gray-800">
            web analytics class of chemistry University of the world of warcraft
            terms in the morning na pathia nije der me call kra tha first time
            noi
          </p>
        </div>
      </div>
      <div className="my-5 flex flex-col gap-5">
        <ImageTextBox
          image="https://www.healthkart.com/connect/wp-content/uploads/2021/07/Header-10.jpg"
          heading="web weave"
          text="to have been working with you and your family r lok sabha elections in west bengal hospital a"
        />
        <ImageTextBox
          image="https://www.healthkart.com/connect/wp-content/uploads/2021/07/Header-10.jpg"
          heading="web weave"
          text="to the reproductive health care of the day on the day of the day on the day of the month ar"
        />
        <ImageTextBox
          image="https://www.healthkart.com/connect/wp-content/uploads/2021/07/Header-10.jpg"
          heading="web weave"
          text="ok thanks for the information contained herein including any attachments are handled on the way to the reproductive health"
        />
      </div>
      <div className="flex flex-col justify-center items-center pb-7">
        <p className="text-4xl font bold">web weave</p>
        <div className="flex justify-between items-center gap-5 flex-col md:flex-row">
          <img
            className="w-[300px]"
            src="https://www.healthkart.com/connect/wp-content/uploads/2021/07/Header-10.jpg"
          />
          <img
            className="w-[300px]"
            src="https://www.healthkart.com/connect/wp-content/uploads/2021/07/Header-10.jpg"
          />
          <img
            className="w-[300px] "
            src="https://www.healthkart.com/connect/wp-content/uploads/2021/07/Header-10.jpg"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center pb-7">
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="text-4xl font bold">Review</p>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>

      <video className="w-full" source="" />

      <div className="flex justify-between items-center p-3">
        <From />
      </div>
      <Footer />
    </Fragment>
  );
}
