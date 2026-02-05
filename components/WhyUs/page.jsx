"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

export default function Whyus() {
  return (
    <div className="bg-[#F2F6F4] py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Discover what makes us the preferred choice for thousands of customers
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10">
          {aboutIns.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="w-full sm:w-[90%] md:w-[380px] lg:w-[429px]"
            >
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[172px] h-full p-5 sm:p-6 md:p-7 flex">
                {/* Icon Container */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.3,
                    type: "spring"
                  }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 relative self-start"
                >
                  <Image
                    src={item.image}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                    alt={item.heading}
                  />
                </motion.div>

                {/* Content */}
                <div className="ml-4 sm:ml-5 md:ml-6 flex-1">
                  <motion.h3
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                    className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3 md:mb-4"
                  >
                    {item.heading}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="text-sm sm:text-base text-[#717378] leading-relaxed"
                  >
                    {item.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/50 rounded-full">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#17AF26] rounded-full" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F2BC1B] rounded-full" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full" />
            <span className="text-xs sm:text-sm text-gray-600 font-medium ml-2">
              Trusted by 10,000+ Customers
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}