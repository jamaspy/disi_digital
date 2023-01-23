import { Space_Grotesk } from "@next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "../styles/globals.css";
const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
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
