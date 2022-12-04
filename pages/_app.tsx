import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Barlow, Fraunces } from "@next/font/google";

const barlow = Barlow({
  weight: ["600"],
  variable: "--font-barlow",
});

const fraunces = Fraunces({
  weight: ["700", "900"],
  variable: "--font-fraunces",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${barlow.variable} ${fraunces.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
