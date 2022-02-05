import React from "react";
import styles from "../styles/Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type Props = {};

export default function ({}: Props) {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        <li className={`${styles.icon} group`}>
          <FontAwesomeIcon icon={["fas", "chart-bar"]} />
          <p
            className={`${styles.iconText} group-hover:w-full group-hover:min-h-max group-hover:opacity-100`}
          >
            Charts
          </p>
        </li>
        <li className={`${styles.icon} group`}>
          <FontAwesomeIcon icon={["fas", "file-invoice"]} />
          <p
            className={`${styles.iconText} group-hover:w-full group-hover:min-h-max group-hover:opacity-100`}
          >
            Statement
          </p>
        </li>
        <li className={`${styles.icon} group`}>
          <FontAwesomeIcon icon={["fas", "book"]} />
          <p
            className={`${styles.iconText} group-hover:w-full group-hover:min-h-max group-hover:opacity-100`}
          >
            book
          </p>
        </li>
        <li className={`${styles.icon} group`}>
          <FontAwesomeIcon icon={["fas", "info-circle"]} />
          <p
            className={`${styles.iconText} group-hover:w-full group-hover:min-h-max group-hover:opacity-100`}
          >
            About
          </p>
        </li>
      </ul>
    </nav>
  );
}
