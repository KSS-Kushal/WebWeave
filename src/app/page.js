"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Carousel from "@/components/carousel";
import HeroCard from "@/components/heroCard";
import ImageTextBox from "@/components/imageTextBox";
import ReviewCard from "@/components/reviewCard";
import From from "@/components/from";
import { Fragment } from "react";
import { ourReviews, ourServices } from "./data";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <div className="relative flex flex-col justify-center items-center  mb-24 w-full">
        <Carousel />
        <div className="absolute -bottom-96 md:-bottom-32 px-5 w-ful md:w-[50%]">
          <HeroCard />
        </div>
      </div>
      <div id="about" className="bg-gray-300 w-full">
        <div className="flex  justify-between items-center py-10  flex-col md:flex-row gap-3 mt-[27rem] md:mt-52 w-[90%] md:w-4/5 2xl:w-3/4 mx-auto">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <p className="text-4xl font-bold text-[#050C9C]">Our Mission</p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-3">
            <p className="text-lg font-medium text-blue-gray-800 text-center">
              At <span className="font-semibold">WebWeave Creations,</span> our mission is to empower small businesses
              by providing innovative and affordable web solutions. We believe
              that every business deserves a strong online presence, and we are
              committed to delivering high-quality websites that are tailored to
              meet the unique needs of our clients.
            </p>
            <p className="text-xl font-bold text-[#050C9C] text-center">
              Our goals include:
            </p>
            <ul className="list-disc list-inside text-gray-800">
              <li>
                <span className="font-semibold">Empowerment:</span>
                <span className="ml-1">
                  Helping businesses thrive in the digital landscape through
                  effective online strategies.
                </span>
              </li>
              <li>
                <span className="font-semibold">Innovation:</span>
                <span className="ml-1">
                  Utilizing the latest technologies and design trends to create
                  visually appealing and functional websites.
                </span>
              </li>
              <li>
                <span className="font-semibold">
                  Customer-Centric Approach:{" "}
                </span>
                <span className="ml-1">
                  Prioritizing our clients’ needs and building long-lasting
                  relationships based on trust and satisfaction.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="services" className="my-20 flex flex-col gap-10 w-[90%] md:w-4/5 2xl:w-3/4 mx-auto">
        <p className="text-4xl font-bold text-center text-[#050C9C]">
          Our Services
        </p>
        {ourServices.map((v, i)=>(
          <ImageTextBox key={i} {...v} revers={i%2===1} />
        ))}
      </div>
      <div id="projects" className="flex flex-col justify-center items-center pb-7 gap-3 w-[90%] md:w-4/5 2xl:w-3/4 mx-auto">
        <p className="text-4xl font-bold text-[#050C9C] mb-10">Recent Projects</p>
        <div className="flex justify-between items-center gap-5 flex-col md:flex-row">
          <div className="flex-1 rounded-xl shadow-xl">
            <img
              className="w-[350px] md:w-[400px] max-h-[400px] object-cover object-center rounded-xl "
              src="/assets/panchali.png"
            />
          </div>
          <div className="flex-1 rounded-xl shadow-xl">
            <img
              className="w-[350px] md:w-[400px] max-h-[400px] object-cover object-center rounded-xl"
              src="/assets/veda.png"
            />
          </div>
          <div className="flex-1 rounded-xl shadow-xl">
            <img className="w-[350px] md:w-[400px] max-h-[400px] object-cover object-center rounded-xl" src="/assets/gym.png" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-5 w-[90%] md:w-4/5 2xl:w-3/4 mx-auto my-20">
        <p className="text-4xl font-bold text-[#050C9C] mb-10">Testimonials</p>
        <div className="flex items-center gap-7 overflow-x-auto w-full snap-x snap-mandatory scroll-mt-2 p-3">
          {ourReviews.map((v, i)=>(
            <ReviewCard key={i} {...v} />
          ))}
        </div>
      </div>

      {/* <video className="w-full" source="" /> */}

      <div id="contact" className="flex justify-center items-center p-3 w-[90%] md:w-4/5 2xl:w-3/4 mx-auto mb-20">
        <From />
      </div>
      <Footer />
    </Fragment>
  );
}
