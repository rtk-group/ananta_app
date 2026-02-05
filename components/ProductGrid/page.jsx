"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import ProductCarousel from "../Carousel/page";
import TestimonialCarousel from "../Testimonial/page";
import { FaStar } from "react-icons/fa6";

export default function ProductGrid() {
  const tabButtons = ["Best Sellers", "Bundles & Promotions", "On Sale"];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[64px] text-[#1A1E26] font-semibold leading-tight">
            <span className="block">BEST DISPENSARY TO BUY</span>
            <span className="block mt-2">WEED ONLINE IN INDIA</span>
          </h2>
        </motion.div>

        {/* Tab Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6">
            {tabButtons.map((button, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full sm:w-auto min-w-[200px] md:min-w-[300px] lg:min-w-[389px] h-12 md:h-[48px] px-4 rounded-full border text-sm md:text-[16px] font-semibold transition-all duration-300 ${index === 0
                  ? "bg-[#F2F6F4] text-[#05422C] border-[#05422C]"
                  : "bg-white text-[#05422C] border-gray-200 hover:border-[#05422C]"
                  }`}
              >
                {button}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Product Section */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Best Seller Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="w-full lg:w-[379px] h-[400px] sm:h-[500px] md:h-[568px]"
          >
            <div className="bg-[#05422C] h-full flex flex-col items-center justify-center gap-4 sm:gap-5 p-4 sm:p-6 rounded-2xl sm:rounded-3xl overflow-hidden relative">
              {/* Decorative Background Element */}
              <motion.div
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 5 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute w-[180px] h-[250px] sm:w-[261px] sm:h-[371px] bg-[#34665466]/40 left-1/2 bottom-0 transform -translate-x-1/2 sm:left-auto sm:right-8 sm:transform-none"
              />

              {/* Image Container */}
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative z-10 w-40 h-40 sm:w-[213px] sm:h-[213px]"
              >
                <Image
                  src={'/images/bestSeller_img.png'}
                  fill
                  className="object-cover"
                  alt="Best Seller Product"
                  sizes="(max-width: 640px) 160px, 213px"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center z-10 px-4"
              >
                <h1 className="text-white text-lg sm:text-[20px] font-semibold mb-2">
                  Shop our Best Sellers
                </h1>
                <p className="text-gray-300 text-xs sm:text-[14px] max-w-[200px] sm:max-w-[216px] mx-auto mb-3 sm:mb-4">
                  Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius lorem blandit lectus magnis feugiat.
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-[#17AF26] text-sm sm:text-[14px] font-semibold tracking-wider hover:text-green-400 transition-colors"
                >
                  View All →
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Product Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            viewport={{ once: true }}
            className="flex-1 min-w-0 h-[400px] sm:h-[500px] md:h-[568px]"
          >
            <ProductCarousel />
          </motion.div>
        </div>

        {/* Customer Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 md:mt-25"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-[#1A1E26] mb-8 sm:mb-10 font-semibold"
          >
            CUSTOMER TESTIMONIALS
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Static Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="w-full lg:w-[379px] h-auto min-h-[300px] sm:min-h-[424px]"
            >
              <div className="bg-[#05422C] h-full p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl md:text-[32px] font-semibold text-white leading-tight"
                >
                  VOTED BEST <br /> ONLINE DISPENSARY IN INDIA
                </motion.h1>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="border border-[#346654] mt-4 sm:mt-5 rounded-full"
                />

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-[#346654] text-xl sm:text-2xl md:text-[30px] my-3 sm:my-4 font-semibold"
                >
                  Google
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-sm sm:text-[16px] my-2 text-white font-medium"
                >
                  EXCELLENT
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
                >
                  <div className="flex gap-1 text-yellow-500 text-lg sm:text-[20px]">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <FaStar />
                      </motion.span>
                    ))}
                  </div>

                  <div className="hidden sm:block border border-[#346654] h-5 mx-4 md:mx-6" />

                  <p className="text-white text-sm sm:text-[16px] font-medium">
                    on 135 Reviews
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Testimonial Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
              viewport={{ once: true }}
              className="flex-1 min-w-0 h-[300px] sm:h-[400px] md:h-[424px]"
            >
              <TestimonialCarousel />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

