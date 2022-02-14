import type { NextPage } from "next";
import Head from "next/head";
import Feature from "../components/Feature";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CashGlance | Main</title>
      </Head>
      <Header />
      <Feature />
    </>
  );
};

export default Home;
