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
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex gap-2">
        <div className="flex flex-col items-center gap-2">
        <Button color="blue">
          <FaArrowDown color="red"/>
          More Info</Button>
        </div>
        <Button color="blue">
          Direct Contact Us
        </Button >
      </CardFooter>
    </Card>
  );
}