"use client";

import React from "react";
import styles from "./style.module.css";

export default function ThankYouPage2() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <p className={styles.info}>
          <span>We will be in contact with you shortly to</span>
          <span>provide you with all the necessary details</span>
          <span>and customised materials to assist you</span>
          <span>in your decision-making process.</span>
        </p>
        <div className={styles.contentLogo}>
          <img
            src="https://lonsdalewp.wpenginepowered.com/wp-content/uploads/2024/04/content-logo.png"
            className={styles.imgFluid}
            alt="image"
          />
        </div>
      </div>
    </React.Fragment>
  );
}
