import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navigation from "../components/Navigation";
import { FirebaseProvider } from "../hooks/FirebaseContext";
import { Toaster, ToastBar } from "react-hot-toast";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fab, fas, far);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseProvider>
      <Navigation />
      <Component {...pageProps} />
      <Toaster />
    </FirebaseProvider>
  );
}

export default MyApp;
