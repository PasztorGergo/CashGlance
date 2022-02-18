import React, { useEffect, useState } from "react";
import styles from "../styles/Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useFirebase } from "../hooks/FirebaseContext";
import Image from "next/image";
import {
  Transition,
  animated,
  useChain,
  useSpringRef,
  useSpring,
  config,
  useTransition,
} from "@react-spring/web";

type Props = {};

export default function Navigation({}: Props) {
  const { currentUser } = useFirebase();
  const [open, setOpen] = useState(false);
  const springApi = useSpringRef();
  const { opacity, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { opacity: 0 },
    to: {
      opacity: open ? 1 : 0,
    },
  });
  const navOpacity = opacity;
  const transApi = useSpringRef();
  const transition = useTransition(
    open
      ? [
          { icon: ["fas", "chart-line"], link: "charts" },
          { icon: ["fas", "money-check"], link: "statement" },
          { icon: ["fas", "file-invoice-dollar"], link: "portfolio" },
          { icon: currentUser?.photoURL ?? ["fas", "user"], link: "account" },
        ]
      : [],
    {
      trail: 75,
      ref: transApi,
      enter: { opacity: 1, scale: 1 },
      leave: { opacity: 0, scale: 0 },
      from: { opacity: 0, scale: 0 },
      to: { opacity: 1, scale: 1 },
    }
  );
  useChain(open ? [springApi, transApi] : [transApi, springApi]);

  return (
    <Transition items={open} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
      {({ opacity }, item) =>
        item ? (
          <animated.nav
            className={`${styles.navigation} prose-h2:text-white`}
            style={{
              opacity: navOpacity.to({ range: [0, 1], output: [0, 1] }),
            }}
          >
            <Link href="/">
              <h2 className={styles.brand}>CashGlance</h2>
            </Link>
            <ul className={styles.navList}>
              {transition((style, item) => (
                <animated.li style={{ ...style }}>
                  <Link href={item.link}>
                    <div className={`${styles.icon} group`}>
                      {typeof item.icon == "string" ? (
                        <Image src={item.icon} />
                      ) : (
                        <FontAwesomeIcon icon={item.icon} />
                      )}
                      <p
                        className={`${styles.iconText} group-hover:min-h-max group-hover:opacity-100`}
                      >
                        {item.link}
                      </p>
                    </div>
                  </Link>
                </animated.li>
              ))}
              <li onClick={() => setOpen(false)}>
                <FontAwesomeIcon icon={["fas", "times"]} />
              </li>
            </ul>
          </animated.nav>
        ) : (
          <animated.div
            onClick={() => setOpen(true)}
            className="rounded-full h-16 z-[9] w-16 text-3xl cursor-pointer flex justify-center items-center fixed bg-gradient-to-br top-4 left-4 from-emerald-900 to-emerald-800 text-white"
            style={{ opacity: opacity.to({ range: [0, 1], output: [0, 1] }) }}
          >
            <FontAwesomeIcon icon={["fas", "bars"]} />
          </animated.div>
        )
      }
    </Transition>
  );
}
