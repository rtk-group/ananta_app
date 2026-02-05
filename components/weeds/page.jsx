"use client";

import ProductCarousel from "../Carousel/page";
import { motion } from "framer-motion";

export default function Weed() {
  const filterButtons = [
    "Best Sellers",
    "Bundles & Promotions",
    "On Sale",
    "New Arrivals",
    "Top Rated"
  ];

  return (
    <section className="bg-white py-8 pb-45 sm:py-12 sm:pb-52 md:py-16 md:pb-54 lg:py-20 lg:pb-60 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-[#1A1E26] font-semibold">
            CHOOSE YOUR WEED
          </h2>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl md:text-2xl text-black tracking-wide font-medium"
            >
              Filter by Interest
            </motion.p>

            {/* Desktop Filter Buttons */}
            <div className="hidden sm:flex flex-wrap justify-center gap-3">
              {filterButtons.map((button, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`min-w-[100px] h-10 md:h-[48px] px-4 flex items-center justify-center text-sm md:text-[16px] font-medium rounded-full border transition-all duration-300 ${index === 0
                    ? "bg-[#F2F6F4] text-[#05422C] border-[#05422C]"
                    : "bg-white text-[#05422C] border-gray-200 hover:border-[#05422C]"
                    }`}
                >
                  {button}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile Filter Scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
            className="sm:hidden"
          >
            <div className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
              {filterButtons.map((button, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-shrink-0 h-10 px-4 flex items-center justify-center text-sm font-medium rounded-full border ${index === 0
                    ? "bg-[#F2F6F4] text-[#05422C] border-[#05422C]"
                    : "bg-white text-[#05422C] border-gray-200"
                    }`}
                >
                  {button}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-b border-gray-200 pt-4"
          />
        </motion.div>

        {/* First Product Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <div className="relative">
            <ProductCarousel />
          </div>
        </motion.div>

        {/* Decorative Separator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 my-8 sm:my-12"
        >
          <div className="w-8 h-0.5 bg-gray-300" />
          <div className="w-3 h-3 rounded-full bg-[#17AF26]" />
          <div className="w-3 h-3 rounded-full bg-[#F2BC1B]" />
          <div className="w-3 h-3 rounded-full bg-[#05422C]" />
          <div className="w-8 h-0.5 bg-gray-300" />
        </motion.div>

        {/* Second Product Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 md:mt-16"
        >
          <div className="relative">
            <ProductCarousel />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

