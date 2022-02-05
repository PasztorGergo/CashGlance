import React from "react";
import styles from "../styles/Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
type Props = {};

export default function Navigation({}: Props) {
  return (
    <nav className={`${styles.navigation} prose-h2:text-white`}>
      <Link href="/">
        <h2 className={styles.brand}>CashGlance</h2>
      </Link>
      <ul className={styles.navList}>
        <li>
          <Link href="/charts">
            <div className={`${styles.icon} group`}>
              <FontAwesomeIcon icon={["fas", "chart-bar"]} />
              <p
                className={`${styles.iconText} group-hover:w-full group-hover:min-h-max group-hover:opacity-100`}
              >
                Charts
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="statement">
            <div className={`${styles.icon} group`}>
              <FontAwesomeIcon icon={["fas", "file-invoice"]} />
              <p
                className={`${styles.iconText} group-hover:min-h-max group-hover:opacity-100`}
              >
                Statement
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="">
            <div className={`${styles.icon} group`}>
              <FontAwesomeIcon icon={["fas", "book"]} />
              <p
                className={`${styles.iconText} group-hover:w-full group-hover:min-h-max group-hover:opacity-100`}
              >
                book
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <div className={`${styles.icon} group`}>
              <FontAwesomeIcon icon={["fas", "info-circle"]} />
              <p
                className={`${styles.iconText} group-hover:w-full group-hover:min-h-max group-hover:opacity-100`}
              >
                About
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
