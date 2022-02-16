import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "../styles/Feature.module.css";
import Button from "./Button";

type Props = {};

export default function Feature({}: Props) {
  return (
    <section className="features pt-36 pb-8 px-4 z-10">
      <h2 className="text-3xl font-bold text-center mb-16">Main Features</h2>
      <ul className={Styles.featureList}>
        <li className={Styles.featureContainer}>
          <FontAwesomeIcon
            icon={["fas", "chart-line"]}
            className={Styles.featureIcon}
          />
          <div className={Styles.featureText}>
            <h3 className={Styles.featureTitle}>Charts</h3>
            <p className={Styles.featureDescription}>
              We provide an easily comprehesnsible bar-chart for you to
              visualize your financial changes.
            </p>
          </div>
          <Button
            theme="error"
            className="hover:bg-red-400 hover:text-red-900 transition-colors"
          >
            Learn More
          </Button>
        </li>
        <li className={Styles.featureContainer}>
          <FontAwesomeIcon
            icon={["fas", "file-invoice-dollar"]}
            className={Styles.featureIcon}
          />
          <div className={Styles.featureText}>
            <h3 className={Styles.featureTitle}>Financial Statement</h3>
            <p className={Styles.featureDescription}>
              A finacial statement can be useful, since it shows your dirrection
              of cashflow.
            </p>
          </div>
          <Button
            theme="error"
            className="hover:bg-red-400 hover:text-red-900 transition-colors"
          >
            Learn More
          </Button>
        </li>
        <li className={Styles.featureContainer}>
          <FontAwesomeIcon
            icon={["fas", "piggy-bank"]}
            className={Styles.featureIcon}
          />
          <div className={Styles.featureText}>
            <h3 className={Styles.featureTitle}>Hints</h3>
            <p className={Styles.featureDescription}>
              We will be helping you with little hints to improve your financial
              world.
            </p>
          </div>
          <Button
            theme="error"
            className="hover:bg-red-400 hover:text-red-900 transition-colors"
          >
            Learn More
          </Button>
        </li>
      </ul>
    </section>
  );
}
