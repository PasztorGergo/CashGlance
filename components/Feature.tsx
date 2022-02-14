import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "../styles/Feature.module.css";

type Props = {};

export default function Feature({}: Props) {
  return (
    <section className="features mt-36 py-2 px-4">
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
        </li>
      </ul>
    </section>
  );
}
