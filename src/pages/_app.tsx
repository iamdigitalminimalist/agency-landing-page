import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Barlow, Fraunces } from "@next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-barlow",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-fraunces",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${barlow.variable} ${fraunces.variable} font-serif font-sans`}
    >
      <Component {...pageProps} />
    </main>
  );
}
