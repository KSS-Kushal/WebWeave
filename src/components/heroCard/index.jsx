"use client";
import { FaArrowDown } from "react-icons/fa";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function SimpleCard() {
  return (
    <Card className="mt-6 w-full z-30">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex gap-2 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full">
          <Button className="flex  justify-center items-center gap-2 rounded-full text-[#050C9C] border-[#050C9C]" color="blue" variant="outlined">
            <FaArrowDown color="#050C9C" />
            More Info</Button>
          <Button className="rounded-full bg-[#050C9C]" color="blue">
            Direct Contact Us
          </Button >
        </div>
      </CardFooter>
    </Card>
  );
}