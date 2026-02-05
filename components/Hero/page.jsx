"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-primary text-white h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/heroImg1.png"
          alt="Hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20 md:bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            {/* Best Seller Tag */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#F2BC1B] text-sm sm:text-base md:text-lg tracking-widest mb-2 sm:mb-3"
            >
              BEST SELLER
            </motion.p>

            {/* Main Heading */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold leading-tight"
              >
                <span className="block">BEST DISPENSARY TO</span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block"
                >
                  BUY WEED ONLINE
                </motion.span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-200 text-lg sm:text-xl md:text-2xl tracking-wide mt-4 sm:mt-6"
            >
              Vitamins & Supplements
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1 }}
                  className="text-lg sm:text-xl md:text-2xl font-medium"
                >
                  Get 25% off
                </motion.span>
              </div>

              <div className="hidden sm:block">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="w-8 h-0.5 bg-gray-400"
                />
              </div>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-lg sm:text-xl md:text-2xl font-medium"
              >
                Free Shipping
              </motion.span>
            </motion.div>

            {/* Shop Now Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 sm:mt-12 md:mt-16"
            >
              <button className="relative bg-[#17AF26] text-white text-base sm:text-lg md:text-xl w-full sm:w-auto min-w-[180px] h-14 sm:h-16 md:h-[64px] px-8 rounded-full font-bold overflow-hidden group">
                <span className="relative z-10">Shop Now</span>
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="mt-12 sm:mt-16 hidden md:flex items-center gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#F2BC1B] rounded-full" />
                <span className="text-gray-300 text-sm">Premium Quality</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#17AF26] rounded-full" />
                <span className="text-gray-300 text-sm">Lab Tested</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-white rounded-full" />
                <span className="text-gray-300 text-sm">Discreet Shipping</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-300 mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2"
            >
              <div className="w-1 h-3 bg-gray-400 rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:hidden"
      >
        <div className="flex gap-4">
          <div className="text-center">
            <div className="w-2 h-2 bg-[#F2BC1B] rounded-full mx-auto mb-1" />
            <span className="text-xs text-gray-300">Premium</span>
          </div>
          <div className="text-center">
            <div className="w-2 h-2 bg-[#17AF26] rounded-full mx-auto mb-1" />
            <span className="text-xs text-gray-300">Tested</span>
          </div>
          <div className="text-center">
            <div className="w-2 h-2 bg-white rounded-full mx-auto mb-1" />
            <span className="text-xs text-gray-300">Discreet</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
