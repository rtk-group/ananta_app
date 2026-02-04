"use client"

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Header from "../../components/Navbar/page";
import IntroducePage from "../../components/introduceUs/page"
import Hero from "../../components/Hero/page";
import ProductGrid from "../../components/ProductGrid/page";
import Weed from "../../components/weeds/page";
import HowItWorks from "../../components/HowItWork/page";
import Footer from "../../components/Footer/page";
import Image from "next/image";

const aboutIns = [
  {
    image: '/images/card_img1.png',
    heading: 'Reliable Shipping',
    description: 'Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!',
  },
  {
    image: '/images/card_img2.png',
    heading: 'You’re Safe With Us',
    description: 'Our secure payment system accepts the most common forms of payments making the checkout process quicker! The payments we accept are debit, all major credit cards, and cryptocurrency.',
  },
  {
    image: '/images/card_img3.png',
    heading: 'Best Quality & Pricing',
    description: 'Here at Green Society, we take pride in the quality of our products and service. Our prices are set to ensure you receive your medication at a reasonable price and safely',
  }
];


export default function Home() {

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        gsap.utils.toArray(".about-card"),
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".about-card",
            start: "top 85%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);


  return (

    <>
      <Header />
      <main>
        <Hero />
        <div className="bg-[#F2F6F4] h-auto md:h-[356px] flex flex-col md:flex-row  items-center justify-center gap-10">
          {
            aboutIns.map((item, index) => (
              <div key={index} className="about-card min-h-[172px] w-[429px] flex">
                <div className="w-[100px] h-[85px] relative ">
                  <Image src={item.image} width={100} height={100} className='' alt="image" />
                </div>
                <div className="w-full ml-5">
                  <h1 className="text-[24px] text-black mb-4">{item.heading}</h1>
                  <p className="text-[16px] text-[#717378]">{item.description}</p>
                </div>
              </div>
            ))
          }
        </div>
        <ProductGrid />
        <Weed />
        <HowItWorks />
        <IntroducePage />
      </main>
      <Footer />
    </>
  );
}








