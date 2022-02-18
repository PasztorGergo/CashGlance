import React from "react";
import Styles from "../styles/Details.module.css";
import Image from "next/image";
import waveUpper from "../public/waveUpper.svg";
import waveBottom from "../public/waveBottom.svg";

export default function Details() {
  return (
    <>
      <Image src={waveUpper} className="w-screen absolute left-0 z-[2] top-0" />
      <section className={Styles.details}>
        <div className={`${Styles.sub} ${Styles.first}`}>
          <h3></h3>
          <p></p>
        </div>
        <div className={`${Styles.sub} ${Styles.second}`}>
          <h3></h3>
          <p></p>
        </div>
        <div className={`${Styles.sub} ${Styles.third}`}>
          <h3></h3>
          <p></p>
        </div>
      </section>
      <Image
        src={waveBottom}
        className="w-screen absolute left-0 z-[2] bottom-0"
      />
    </>
  );
}
