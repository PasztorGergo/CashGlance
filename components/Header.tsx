import React from "react";
import Image from "next/image";
import FinanceApp from "../public/FinanceApp.svg";

export default function Header() {
  return (
    <header className="flex w-full py-8 px-4 justify-around items-center">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-7xl font-merriweather">CashGlance</h1>
        <h6 className="self-center">Keep an eye on your fortune.</h6>
      </div>
      <Image src={FinanceApp} />
    </header>
  );
}
