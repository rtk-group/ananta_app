"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    icon: '/images/icard6.png',
    title: 'CUSTOMER SERVICE',
    description: 'Whether it is answering any questions you have before making a purchase, helping out with the buying process itself or taking your feedback under consideration, we are proud to provide high quality customer service that makes you – the customer – the most important person in the transaction.',
    delay: 0.1
  },
  {
    id: 2,
    icon: '/images/icard5.png',
    title: 'SECURITY',
    description: 'When it comes to security, we only keep what details are necessary for you to have an account with us and make an order. When it comes to shipping your mail order marijuana out, we use only tamper-proof and discrete packaging so then what you\'ve purchased is your business only.',
    delay: 0.2
  },
  {
    id: 3,
    icon: '/images/icard4.png',
    title: 'BEST VALUE',
    description: 'We are continually adjusting what we supply and our prices to ensure that we maintain an optimal balance of affordable and quality for our products. We invest in the best quality strains that we can find and are always on the lookout for new, affordable and high quality weed products.',
    delay: 0.3
  },
  {
    id: 4,
    icon: '/images/icard3.png',
    title: 'DELIVERY INSURANCE',
    description: 'If your mail order marijuana becomes lost, stolen, or damaged during transit, we will send you a replacement completely free of charge. Free Canada Post Xpress shipping on all orders over $120',
    delay: 0.4
  },
  {
    id: 5,
    icon: '/images/icard2.png',
    title: 'HIGHEST QUALITY',
    description: 'All of our cannabis products are tested to ensure that they are the highest quality possible. We work with expert suppliers and are always revising what makes a quality cannabis product to ensure that we have only the best available.',
    delay: 0.5
  },
  {
    id: 6,
    icon: '/images/icard1.png',
    title: 'TRUST',
    description: 'With over 15 years in the weed business, you can rest assured that you will be taken care of. You can guarantee that we have your best interests in mind. Feel free to check out our reviews.',
    delay: 0.6
  }
];

const IntroducePage = () => {
  return (
    <div className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className="max-w-3xl lg:max-w-[815px]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold leading-tight text-[#1A1E26]">
              WHAT MAKES US THE <span className="text-yellow-500"> #1 </span> ONLINE ANANTA DISPENSARY IN INDIA?
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 text-sm sm:text-base md:text-[16px] mt-4 sm:mt-6 leading-relaxed"
            >
              When it comes to what makes us the foremost online marijuana dispensary in Canada, we could wax lyrical about our positive qualities. Instead, to make this information clearer, we've highlighted the six prioritized features that we feel makes us a cut above the rest.
            </motion.p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: feature.delay,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="w-full sticky top-[200px]"
            >
              <div className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 md:p-10 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: feature.delay + 0.2,
                    type: "spring"
                  }}
                  viewport={{ once: true }}
                  className="mb-4 sm:mb-6"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 relative">
                    <Image
                      src={feature.icon}
                      fill
                      className="object-contain"
                      alt={`${feature.title} icon`}
                      sizes="(max-width: 640px) 56px, 64px"
                    />
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: feature.delay + 0.3 }}
                  viewport={{ once: true }}
                  className="text-lg sm:text-xl md:text-2xl font-bold text-[#1A1E26] mb-3 sm:mb-4"
                >
                  {feature.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: feature.delay + 0.4 }}
                  viewport={{ once: true }}
                  className="text-gray-600 text-sm sm:text-[14px] leading-relaxed flex-1"
                >
                  {feature.description}
                </motion.p>

                {/* Decorative Accent */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: feature.delay + 0.5 }}
                  viewport={{ once: true }}
                  className="mt-4 sm:mt-6 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#17AF26] rounded-full" />
              <span className="text-sm sm:text-base font-semibold text-gray-800">Ready to experience the difference?</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#05422C] text-white text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 rounded-full hover:bg-[#0a5a3c] transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Shop Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroducePage;