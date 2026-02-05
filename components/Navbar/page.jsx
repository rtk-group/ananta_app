"use client";
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About Us", href: "#about" },
  {
    name: "Brands",
    href: "#brands",
    submenu: [
      { name: 'OptA', href: '/hello1' },
      { name: 'OptB', href: '/hello2' },
      { name: 'OptC', href: '/hello3' }
    ],
  },
  {
    name: "Business",
    href: "#business",
  },
  { name: 'Our People', href: '#peoples' },
  { name: 'Our Impact', href: '#impact' },
  {
    name: "Investors",
    href: "",
    submenu: [
      { name: 'OptA', href: '/hello1' },
      { name: 'OptB', href: '/hello2' },
      { name: 'OptC', href: '/hello3' }
    ],
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && !e.target.closest('.mobile-menu') && !e.target.closest('.menu-button')) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [open]);

  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-[#05422C] h-8 md:h-[37px] flex items-center justify-center overflow-hidden"
      >
        <div className="relative overflow-hidden w-full">
          <motion.div
            animate={{ x: [0, -100, 0] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="text-xs md:text-sm text-[#FFFFFFB2] font-normal tracking-wider whitespace-nowrap inline-flex items-center gap-4 px-4"
          >
            <span>🚨 LIMITED OFFER: 30% OFF. Use ANANTA30 at Checkout. 🚨</span>
            <span className="text-white font-medium">23 : 15 : 00</span>
            <span>🚨 LIMITED OFFER: 30% OFF. Use ANANTA30 at Checkout. 🚨</span>
            <span className="text-white font-medium">23 : 15 : 00</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Header */}
      <div className="h-16 sm:h-[90px] flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button
            className="menu-button sm:hidden text-2xl text-gray-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <IoClose size={28} /> : "☰"}
          </button>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={'/images/ananta_logo2.png'}
              alt="ananta_logo"
              width={120}
              height={45}
              className="w-auto h-8 sm:h-10 md:h-[62px] md:w-[167px] object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item, index) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.submenu && setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <Link
                href={item.href}
                className="px-3 py-2 text-[15px] xl:text-[16px] text-gray-700 hover:text-[#05422C] font-medium relative group transition-colors duration-300"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#05422C] group-hover:w-3/4 transition-all duration-300" />
              </Link>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {item.submenu && activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 min-w-[200px]    shadow-xl rounded-lg mt-2 overflow-hidden z-50"
                  >
                    {item.submenu.map((sub, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: i * 0.05 }}
                      >
                        <Link
                          href={sub.href}
                          className="block px-4 py-3 text-gray-700 bg-[#05422C4D] hover:bg-[#05422C] hover:text-white transition-colors duration-200"
                          onClick={() => setActiveIndex(null)}
                        >
                          {sub.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Search and Cart */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
          {/* Search Bar - Desktop */}
          <div className="hidden sm:flex items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-48 md:w-56 lg:w-64 xl:w-[456px]"
            >
              <input
                type="text"
                placeholder="Search products..."
                className="w-full text-gray-700 h-10 md:h-[48px] pl-4 pr-12 rounded-full border border-gray-300 focus:border-[#17AF26] focus:ring-2 focus:ring-[#17AF26]/20 focus:outline-none transition-all duration-300 text-sm md:text-base"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-[#17AF26] text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300">
                <CiSearch size={20} />
              </button>
            </motion.div>
          </div>

          {/* Account & Cart - Desktop */}
          {/* <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Your Account</span>
              <div className="h-4 border-r border-gray-300" />
            </div>
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
              <HiOutlineShoppingBag size={24} className="text-gray-700" />
              <div className="absolute -top-1 -right-1 bg-red-500 w-5 h-5 text-xs flex items-center justify-center text-white rounded-full">
                0
              </div>
            </button>
          </div> */}

          {/* Mobile Search Icon */}
          <button className="sm:hidden p-2 text-gray-700" aria-label="Search">
            <CiSearch size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="sm:hidden px-4 pb-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full text-gray-800 h-12 pl-4 pr-12 rounded-full border border-gray-300 focus:border-[#17AF26] focus:ring-2 focus:ring-[#17AF26]/20 focus:outline-none text-sm"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#17AF26] text-white rounded-full flex items-center justify-center">
            <CiSearch size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mobile-menu fixed inset-y-0 left-0 w-64 bg-white shadow-2xl z-50 lg:hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <Image
                  src={'/images/ananta_logo2.png'}
                  alt="ananta_logo"
                  width={120}
                  height={45}
                  className="object-contain"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 text-gray-700 hover:bg-gray-100 rounded-full"
                  aria-label="Close menu"
                >
                  <IoClose size={24} />
                </button>
              </div>

              <nav className="space-y-4">
                {navItems.map((item, index) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block py-3 text-gray-700 hover:text-[#05422C] font-medium text-lg"
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 space-y-2 mt-2">
                        {item.submenu.map((sub, i) => (
                          <Link
                            key={i}
                            href={sub.href}
                            className="block py-2 text-gray-600 hover:text-[#05422C] text-sm"
                            onClick={() => setOpen(false)}
                          >
                            • {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Account & Cart */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <Link
                    href="/account"
                    className="text-gray-700 font-medium hover:text-[#05422C]"
                    onClick={() => setOpen(false)}
                  >
                    Your Account
                  </Link>
                  <button className="relative p-2">
                    <HiOutlineShoppingBag size={24} className="text-gray-700" />
                    <div className="absolute -top-1 -right-1 bg-red-500 w-5 h-5 text-xs flex items-center justify-center text-white rounded-full">
                      0
                    </div>
                  </button>
                </div>
                <button className="w-full py-3 bg-[#05422C] text-white rounded-lg font-medium hover:bg-[#0a5a3c] transition-colors duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>
    </header>
  );
}

