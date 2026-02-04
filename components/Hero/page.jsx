"use client";

import Image from "next/image";
import gsap from "gsap";
import { useRef, useEffect } from "react";


export default function Hero() {

  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity:0},
        {
          y: 0,
          delay: 0.3,
          duration: 1.5,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: headingRef.current
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className=" bg-primary text-white h-screen w-full relative overflow-hidden">
      <Image
        src="/images/heroImg1.png"
        alt="Hero"
        fill
        className="object-cover"
        priority
      />

      <div className="pl-12 py-20 grid lg:grid-cols-2 items-center absolute inset-0">
        <div ref={headingRef} className="">
          <p className="text-[#F2BC1B] text-[16px] tracking-widest mb-2">
            BEST SELLER
          </p>

          <h1 className="text-4xl lg:text-[64px] font-semibold">
            BEST DISPENSARY TO
          </h1>
          <h1 className="text-4xl lg:text-[64px] font-semibold">
            BUY WEED ONLINE
          </h1>

          <p className="text-[#F4F4F4] text-[24px] tracking-wide mt-3">
            Vitamins & Supplements
          </p>

          <div className="w-[365px] h-[36px] text-[24px] flex items-center justify-between mt-10">
            <span>Get 25% off</span>
            <div className="h-[25px] border-2 border-gray-400 rounded-full"></div>
            <span>Free Shipping</span>
          </div>

          <button
            // ref={btnRef}
            className="mt-20 bg-[#17AF26] text-white text-[18px] w-[190px] h-[64px] rounded-full font-semibold"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}


