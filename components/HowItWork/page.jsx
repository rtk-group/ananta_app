"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const instruct = [
  {
    id: 1,
    icon: '/images/ins_img1.png',
    heading: 'Create an Account',
    description: 'Sign up for a free account on our platform to get started. It only takes a minute and gives you access to our full catalog.'
  },
  {
    id: 2,
    icon: '/images/ins_img2.png',
    heading: 'Browse Our Selection',
    description: 'Explore our premium cannabis products. Use filters to find exactly what you\'re looking for by strain, type, or effect.'
  },
  {
    id: 3,
    icon: '/images/ins_img3.png',
    heading: 'Place Your Order',
    description: 'Add your desired products to cart, select your preferred shipping method, and complete your secure checkout.'
  },
  {
    id: 4,
    icon: '/images/ins_img4.png',
    heading: 'Receive Your Package',
    description: 'We ship discreetly and securely. Track your order and receive it right at your doorstep in discreet packaging.'
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-[#01100B] text-white py-12 sm:py-16 md:py-20 lg:py-23 relative ">
      {/* Referral Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4 "
      >
        <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[342px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={'/images/mark_img.jpg'}
            fill
            className="object-cover"
            alt="Refer a friend banner"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 md:p-10 lg:p-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center sm:text-left mb-6 sm:mb-0"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold tracking-wide leading-tight mb-2 sm:mb-4">
                REFER A FRIEND
              </h1>
              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] text-white">And get</p>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] text-[#F2BC1B] font-bold">$30!</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-[#17AF26] text-white text-sm sm:text-base md:text-lg lg:text-[18px] font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl min-w-[160px] sm:min-w-[207px]">
                Refer Here
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="pt-[150px] sm:pt-[180px] md:pt-[200px] lg:pt-[250px] pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-12 md:mb-16"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold leading-tight text-center mb-4 sm:mb-6">
              HOW TO ORDER WEED ONLINE FROM TOP SHELF BC - MAIL ORDER ANANTA
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-[16px] text-center max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              Ordering weed online from Top Shelf BC is easy. We are proud to have made the process accessible across multiple platforms and simple to understand, meaning that more people can come to us to buy their cannabis products online.
            </p>
          </motion.div>

          {/* Instruction Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {instruct.map((item, index) => (
              <motion.div
                key={item.id}
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
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="bg-[#0a1a14] rounded-xl sm:rounded-2xl p-6 sm:p-8 h-full flex flex-col items-center text-center hover:bg-[#0f241b] transition-colors duration-300 shadow-lg hover:shadow-xl">
                  {/* Icon Container with Number */}
                  <div className="relative mb-4 sm:mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.2 + 0.3,
                        type: "spring"
                      }}
                      viewport={{ once: true }}
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 relative"
                    >
                      <Image
                        src={item.icon}
                        fill
                        className="object-contain"
                        alt={`${item.heading} icon`}
                        sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 144px"
                      />
                    </motion.div>

                    {/* Number Badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.2 + 0.4,
                        type: "spring"
                      }}
                      viewport={{ once: true }}
                      className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-8 h-8 sm:w-10 sm:h-10 bg-[#F2BC1B] flex items-center justify-center rounded-full shadow-lg"
                    >
                      <span className="text-white text-sm sm:text-base font-bold">
                        {index + 1}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4"
                  >
                    {item.heading}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
                    viewport={{ once: true }}
                    className="text-gray-400 text-sm sm:text-base leading-relaxed flex-1"
                  >
                    {item.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-10 sm:mt-12 md:mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#17AF26] text-white text-sm sm:text-base md:text-[16px] font-semibold px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl min-w-[200px] sm:min-w-[267px]"
            >
              Choose your Weed
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

