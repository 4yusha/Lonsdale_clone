"use client";
import React from "react";
import ThankYouPage1 from "../../components/thankyou/thankyou1";
import ThankYouPage2 from "../../components/thankyou/thankyou2";
import Footer from "@/src/components/footer/footer";

export default function Home(){
    return (
        <React.Fragment>
            <ThankYouPage1/>
            <ThankYouPage2/>
            <Footer />
        </React.Fragment>
    );
}