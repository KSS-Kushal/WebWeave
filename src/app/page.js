"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Carousel from "@/components/carousel";
import HeroCard from "@/components/heroCard";
import ImageTextBox from "@/components/imageTextBox";
import ReviewCard from "@/components/reviewCard";
import From from "@/components/from";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <div className="relative flex flex-col justify-center items-center  mb-24 w-full">
        <Carousel />
        <div className="absolute -bottom-72 md:-bottom-32 px-5 w-ful md:w-[50%]">
          <HeroCard />
        </div>
      </div>
      <div className="flex  justify-between items-center  px-7 py-10 bg-gray-300 w-full flex-col md:flex-row gap-3 mt-80 md:mt-52">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <p className=" text-xl font-bold text-gray-500">Our Mission</p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center ">
          <p className="text-xl font-bold text-gray-800 text-center ">
            At WebWeave Creations, our mission is to empower small businesses by
            providing innovative and affordable web solutions. We believe that
            every business deserves a strong online presence, and we are
            committed to delivering high-quality websites that are tailored to
            meet the unique needs of our clients.
          </p>
          <p className="text-xl font-bold text-gray-800 text-center ">
            Our goals include:
          </p>
          <ul className="list-disc list-inside text-gray-800 ">
            <li>
              <span className="font-semibold">Empowerment:</span>
              Helping businesses thrive in the digital landscape through
              effective online strategies.
            </li>
            <li>
              <span className="font-semibold">Innovation:</span>
              Utilizing the latest technologies and design trends to create
              visually appealing and functional websites.
            </li>
            <li>
              <span className="font-semibold">Customer-Centric Approach: </span>
              Prioritizing our clients’ needs and building long-lasting
              relationships based on trust and satisfaction.
            </li>
          </ul>
        </div>
      </div>

      <div className="my-20 flex flex-col gap-10 w-[90%] md:w-4/5 2xl:w-3/4 mx-auto">
        <p className="text-2xl font-bold text-center text-gray-800">
          Our Services
        </p>
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
      <div className="flex flex-col justify-center items-center pb-7 gap-3 w-[90%] md:w-4/5 2xl:w-3/4 mx-auto">
        <p className="text-4xl font bold">web weave</p>
        <div className="flex justify-between items-center gap-5 flex-col md:flex-row">
          <div className="flex-1 rounded-xl">
            <img className="w-full rounded-xl " src="/assets/panchali.png" width="400px" height="400px" />
          </div>
          <div className="flex-1 rounded-xl">
            <img className="w-full rounded-xl" src="/assets/veda.png" width="400px" height="400px" />
          </div>
          <div className="flex-1 rounded-xl">
            <img
              className="w-full rounded-xl"
              src="/assets/gym.png"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-5 w-[90%] md:w-4/5 2xl:w-3/4 mx-auto my-20">
        <p className="text-4xl font bold">Review</p>
        <div className="flex justify-center items-center gap-7 overflow-x-scroll w-full ">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>

      <video className="w-full" source="" />

      <div className="flex justify-center items-center p-3 w-[90%] md:w-4/5 2xl:w-3/4 mx-auto mb-20">
        <From />
      </div>
      <Footer />
    </Fragment>
  );
}
