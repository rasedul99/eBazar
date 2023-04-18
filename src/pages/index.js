import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../../components/Header";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FlashDeals from "../../components/flashDeals/FlashDeals";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>eBazar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Header />
      <Navbar />
      <Hero />
      <FlashDeals />
    </>
  );
}
