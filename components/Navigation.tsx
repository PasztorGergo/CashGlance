import React, { useEffect, useState } from "react";
import styles from "../styles/Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useFirebase } from "../hooks/FirebaseContext";
type Props = {};

export default function Navigation({}: Props) {
  const [scroll, setScroll] = useState(false);
  const [prevScrollPos, setPrevious] = useState<number>(0);
  const [currentScrollPos, setCurrent] = useState<number>(0);

  window.addEventListener("scroll", () => {});
  const { currentUser } = useFirebase();
  return (
    <nav
      className={`${styles.navigation} prose-h2:text-white ${
        scroll ? "-translate-y-full" : "translate-y-0"
      }`}
    >
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
          <Link href="/portfolio">
            <div className={`${styles.icon} group`}>
              <FontAwesomeIcon icon={["fas", "info-circle"]} />
              <p
                className={`${styles.iconText} group-hover:w-full group-hover:min-h-max group-hover:opacity-100`}
              >
                Portfolio
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link href={currentUser ? "/account" : "/signin"}>
            <div className={`${styles.icon} group`}>
              {currentUser?.photoURL ? (
                <div
                  className={styles.avatar}
                  style={{ backgroundImage: currentUser.photoURL }}
                ></div>
              ) : (
                <FontAwesomeIcon icon={["fas", "user-circle"]} />
              )}
              <p
                className={`${styles.iconText} group-hover:w-full group-hover:min-h-max group-hover:opacity-100`}
              >
                {currentUser ? currentUser.displayName : "Sign In"}
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
