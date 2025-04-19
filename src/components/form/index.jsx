"use client";
import { sendEmailToOwner } from "@/helper/sendEmailToOwner";
import { sendEmailToUser } from "@/helper/sendEmailToUser";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { useState } from "react";
 
export default function SimpleRegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [queryError, setQueryError] = useState(false);


  const onChange = (e, type) => {
    if (type === "name") {
      setName(e.target.value);
      if (e.target.value.length < 3) {
        setNameError(true);
      } else {
        setNameError(false);
      }
    } else if (type === "email") {
      const mail = e.target.value.toLowerCase();
      setEmail(mail);
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!pattern.test(mail)) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    } else if (type === "query") {
      setQuery(e.target.value);
      if (e.target.value.length < 10) {
        setQueryError(true);
      } else {
        setQueryError(false);
      }
    }
  }

  const submitForm = async () => {
    if(nameError || emailError || queryError || name === "" || email === "" || query === "") {
      alert("Please fill the form correctly");
      return;
    }
    await sendEmailToOwner({name, email, query});
    await sendEmailToUser({name, email, query});
  }
  return (
     <Card color="transparent" shadow={false}>
      <p className="text-4xl font-bold text-[#050C9C]">
        Contact Us
      </p>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography> */}
          <Input
            size="lg"
            placeholder="Full Name"
            // className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              // className: "before:content-none after:content-none",
              className: "text-4xl font-bold",
            }}
            label="Your Name"
            error={nameError}
            value={name}
            onChange={e => onChange(e, "name")}
          />
          {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography> */}
          <Input
            size="lg"
            placeholder="name@mail.com"
            // className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            // labelProps={{
            //   className: "before:content-none after:content-none",
            // }}
            label="Your Email"
            type="email"
            error={emailError}
            value={email}
            onChange={e => onChange(e, "email")}
          />
          {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
            Query
          </Typography> */}
          <Textarea
            size="lg"
            // placeholder="Describe Your Ideas!"
            // className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            // labelProps={{
            //   className: "before:content-none after:content-none",
            // }}
            label="Query"
            error={queryError}
            value={query}
            onChange={e => onChange(e, "query")}
          />
        </div>
        
        <Button className="bg-[#050C9C] mt-6" color="blue" fullWidth onClick={submitForm}>
          Contact Us
        </Button>
        
      </form>
    </Card>
  );
}