import type { NextPage } from "next";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fab, fas, far);

const Home: NextPage = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default Home;
