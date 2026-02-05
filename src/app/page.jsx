"use client"

import Header from "../../components/Navbar/page";
import IntroducePage from "../../components/introduceUs/page"
import Hero from "../../components/Hero/page";
import ProductGrid from "../../components/ProductGrid/page";
import Weed from "../../components/weeds/page";
import HowItWorks from "../../components/HowItWork/page";
import Footer from "../../components/Footer/page";
import Whyus from "../../components/WhyUs/page";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Whyus />
        <ProductGrid />
        <Weed />
        <HowItWorks />
        <IntroducePage />
      </main>
      <Footer />
    </>
  );
}








