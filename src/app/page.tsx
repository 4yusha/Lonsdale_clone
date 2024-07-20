"use client";
import React from "react";
import Text from "../components/text/text";
import Header from "../components/header/header";
import Banner from "../components/home/banner";
import Form from "../components/form/form";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Text />
      <Form />
      <Footer />
    </React.Fragment>
  );
}
