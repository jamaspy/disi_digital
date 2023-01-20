import { Cormorant_Garamond } from "@next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "../styles/globals.css";
const space = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "700"],
});
function MyApp({ Component, pageProps }) {
  return (
    <main className={`${space.variable} font-sans`}>
      <ToastContainer />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
