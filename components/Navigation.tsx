import React, { useEffect, useState } from "react";
import styles from "../styles/Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useFirebase } from "../hooks/FirebaseContext";
import { Transition, animated } from "@react-spring/web";

type Props = {};

export default function Navigation({}: Props) {
  const { currentUser } = useFirebase();
  const [open, setOpen] = useState(false);

  return (
    <Transition
      items={open}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      reverse={open}
    >
      {({ opacity }, item) =>
        item ? (
          <animated.nav
            className={`${styles.navigation} prose-h2:text-white`}
            style={{ opacity: opacity.to({ range: [0, 1], output: [0, 1] }) }}
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
              <li>
                <FontAwesomeIcon
                  icon={["fas", "times"]}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer"
                />
              </li>
            </ul>
          </animated.nav>
        ) : (
          <animated.nav
            onClick={() => setOpen(true)}
            className="rounded-full h-16 w-16 text-3xl cursor-pointer flex justify-center items-center fixed bg-gradient-to-br top-4 left-4 z-10 from-emerald-900 to-emerald-800 text-white"
            style={{ opacity: opacity.to({ range: [0, 1], output: [0, 1] }) }}
          >
            <FontAwesomeIcon icon={["fas", "bars"]} />
          </animated.nav>
        )
      }
    </Transition>
  );
}
