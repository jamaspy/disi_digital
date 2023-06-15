import { Space_Grotesk } from "@next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});
function MyApp({ Component, pageProps }) {
  return (
    <main className={`${space.variable} font-sans`}>
      <ToastContainer />
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}

export default MyApp;
