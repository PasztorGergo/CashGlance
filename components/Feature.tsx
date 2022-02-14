import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "../styles/Feature.module.css";

type Props = {};

export default function Feature({}: Props) {
  return (
    <section className="features">
      <ul className={Styles.featureList}>
        <li className={Styles.featureContainer}>
          <FontAwesomeIcon icon={["fas", "chart-line"]} />
          <div className={Styles.featureText}>
            <h3 className={Styles.featureTitle}>Charts</h3>
            <p className={Styles.featureDescription}></p>
          </div>
        </li>
        <li className={Styles.featureContainer}>
          <FontAwesomeIcon icon={["fas", "file-invoice-dollar"]} />
          <div className={Styles.featureText}>
            <h3 className={Styles.featureTitle}>Financial Statement</h3>
            <p className={Styles.featureDescription}></p>
          </div>
        </li>
        <li className={Styles.featureContainer}>
          <FontAwesomeIcon icon={["fas", "piggy-bank"]} />
          <div className={Styles.featureText}>
            <h3 className={Styles.featureTitle}>Hints</h3>
            <p className={Styles.featureDescription}></p>
          </div>
        </li>
      </ul>
    </section>
  );
}
