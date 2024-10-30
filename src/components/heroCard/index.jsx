"use client";
import { FaArrowDown } from "react-icons/fa";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export default function SimpleCard() {
  const router = useRouter();
  return (
    <Card className="mt-6 w-full z-30">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
        Crafting Digital Solutions for Small Businesses
        </Typography>
        <Typography>
          At WebWeave Creations, we specialize in building custom websites that bring your business vision to life. Whether it's a simple landing page or a fully functional e-commerce platform, our experienced team delivers tailored solutions that meet your unique needs.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex gap-2 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full">
          <Button className="flex  justify-center items-center gap-2 rounded-full text-[#050C9C] border-[#050C9C]" color="blue" variant="outlined" onClick={() => router.push('#services')}>
            <FaArrowDown color="#050C9C" />
            More Info</Button>
          <Button className="rounded-full bg-[#050C9C]" color="blue" onClick={() => router.push('#contact')}>
            Direct Contact Us
          </Button >
        </div>
      </CardFooter>
    </Card>
  );
}