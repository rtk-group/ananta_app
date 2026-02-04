"use client"
import Image from "next/image";
import gsap from "gsap";

import ProductCarousel from "../Carousel/page";
import { useRef, useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import TestimonialCarousel from "../Testimonial/page";

export default function ProductGrid() {

  const sellerCard = useRef(null);
  const testimonialCard = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sellerCard.current,
        { y: 30, opacity:0},
        {
          y: 0,
          delay: 0.3,
          duration: 1.5,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: sellerCard.current
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[32px] sm:text-[64px] text-[#1A1E26] sm:-mb-5 font-semibold text-center ">
          BEST DISPENSARY TO BUY
        </h2>
        <h2 className="text-[32px] sm:text-[64px] text-[#1A1E26]  font-semibold text-center ">
          WEED ONLINE IN INDIA
        </h2>

        {/* heading */}
        <div className="w-full h-[48px] mt-10 flex justify-between px-4">
          <button className="w-[389px] bg-[#F2F6F4] font-semibold h-full flex items-center justify-center text-[16px] text-[#05422C] border border-[#05422C] rounded-full">Best Sellers</button>
          <button className="w-[389px] h-full flex items-center justify-center text-[16px] text-[#05422C] border border-gray-200 rounded-full">Bundles & Promotions</button>
          <button className="w-[389px] h-full flex items-center justify-center text-[16px] text-[#05422C] border border-gray-200 rounded-full">On Sale</button>
        </div>


        <div className=" h-[568px] w-full mt-10 flex ">
          {/* best seller card */}
          <div ref={sellerCard} className=" bg-[#05422C] min-w-[379px] h-full flex flex-col items-center justify-center gap-5 rounded-3xl overflow-hidden">
            <div className="w-[213px] h-[213px] relative">
              <Image src={'/images/bestSeller_img.png'} fill className="object-cover z-4" alt="image" />
              <div className=" h-[371px] w-[261px] absolute left-20 bottom-5 rotate-5 bg-[#34665466]/40"> </div>
            </div>

            <div className=" w-full text-center">
              <h1 className="text-white text-[20px]">Shop our Best Sellers</h1>
              <p className="text-[14px] max-w-[216px] mx-auto my-4">Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius lorem blandit lectus magnis feugiat. </p>
              <button className="text-[#17AF26] text-[14px] tracking-wider mt-1"> View All </button>
            </div>
          </div>
          <div className="flex-1 min-w-0 relative">
            <ProductCarousel />
          </div>
        </div>


        {/* customer testimonial */}

        <div className="mt-25">
          <h2 className="text-[60px] text-[#1A1E26] my-10 font-semibold">
            CUSTOMER TESTIMONIALS
          </h2>

          <div className="flex gap-6 w-full">

            {/* Left static card */}
            <div ref={testimonialCard} className="flex-none w-[379px] max-w-[379px] p-10 h-[424px] bg-[#05422C] rounded-xl">
              <h1 className="text-[32px] font-semibold text-white">
                VOTED BEST <br /> ONLINE DISPENSARY IN INDIA
              </h1>

              <div className="border border-[#346654] mt-5 rounded-full"></div>

              <p className="text-[#346654] text-[30px] my-3 font-semibold">
                Google
              </p>

              <p className="text-[16px] my-2 text-white">EXCELLENT</p>

              <div className="text-yellow-500 text-[20px] flex items-center">
                <div className="flex gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <div className="border border-[#346654] h-5 mx-6"></div>

                <p className="text-white text-[16px]">
                  on 135 Reviews
                </p>
              </div>
            </div>

            {/* Right carousel */}
            <div className="flex-1 min-w-0 relative">
              <TestimonialCarousel />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
