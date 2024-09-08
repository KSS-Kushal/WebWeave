"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@material-tailwind/react";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <p className="text-red-500 text-2xl">Home</p>
      <Button>Button</Button>
      <Footer />
    </Fragment>
  );
}
