import React from "react";
import Image from "next/image";
import FinanceApp from "../public/FinanceApp.svg";
import Button from "./Button";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header className="flex w-full py-8 px-4 justify-around items-center flex-wrap">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-3xl sm:text-7xl font-merriweather">
          CashGlance
        </h1>
      </div>
      <Image src={FinanceApp} />
      <div className="flex flex-col basis-full justify-around items-center gap-2 text-center">
        <h2 className="pl-4 text-2xl font-semibold">
          Keep an eye on your fortune using CashGlance.
        </h2>
        <h2 className="pl-4 text-2xl font-semibold">
          A modern and useful application to track your expenses.
        </h2>
        <Button
          onClick={() => {
            router.replace("/#signin", undefined, {
              shallow: true,
              scroll: true,
            });
          }}
          theme="success"
          className="mt-3 px-5 py-2 text-lg hover:bg-emerald-800 transition-all hover:scale-105 active:scale-95"
        >
          Get Started
        </Button>
      </div>
    </header>
  );
}
